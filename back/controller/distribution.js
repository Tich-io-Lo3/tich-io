const db = require("../model");
const upload = require("multer")();
require("../cli/setup_bucket");
const s3 = require("../cli/setup_bucket")[0];

module.exports = {
  get_all: (req, res, next) => {
    return db.Distribution.findAll({
      where: {
        GameId: req.params.game_id,
      },
    }).then((distrib) => {
      if (!distrib) {
        throw { status: 404, message: "Requested distrib not found" };
      }
      res.json(distrib);
      return next;
    });
  },
  get_by_os: (req, res) => {
    db.Distribution.findOne({
      where: {
        GameId: req.params.game_id,
        os: req.params.distribution_os,
      },
    }).then((distribution) => {
      const params = {
        Bucket: process.env.BUCKET_NAME,
        Key: `${distribution.GameId}_${distribution.os}`,
      };
      s3.getObject(params, function (err, data) {
        if (err) {
          console.log(err, err.stack);
          res.status(500).send(err.stack);
        }
      });
      res.setHeader("content-type", distribution.mimeType);
      res.send(data.body);
    });
  },
  create: (req, res) => {
    const params = {
      Bucket: process.env.BUCKET_NAME,
      Key: `${req.params.GameId}_${req.body.os}`, // File name you want to save as in S3
      Body: req.file.buffer,
    };
    s3.upload(params, function (err, data) {
      if (err) {
        throw err;
      }
      console.log(`File uploaded successfully. ${data.Location}`);
      db.Distribution.create({
        os: req.body.os,
        file: `${req.params.GameId}_${req.body.os}`,
        GameId: req.params.game_id,
        mimeType: req.file.mimeType,
      }).then((distribution) => res.json(distribution).catch(next));
    });
  },
  update_by_id: (req, res, next) => {
    return db.Distribution.findByPk(req.params.distribution_id)
      .then((distribution) => {
        if (!distribution) {
          throw { status: 404, message: "Requested distribution not found" };
        }
        Object.assign(distribution, req.body);
        return distribution.save();
      })
      .then((distribution) => res.json(distribution))
      .catch(next);
  },
  delete_by_id: (req, res, next) => {
    const distrib = db.Distribution.findByPk(req.params.distribution_id)
      .then((distribution) => {
        if (!distribution) {
          throw { status: 404, message: "Requested distribution not found" };
        }
        return distribution.destroy();
      })
      .then(() => res.status(200).end())
      .catch(next);
    const params = {
      Bucket: process.env.BUCKET_NAME,
      Key: `${distrib.GameId}_${distrib.os}`,
    };
    s3.deleteObject(params, function (err, data) {
      if (err) console.log(err, err.stack);
      // error
      else console.log(); // deleted
    });
    return distrib;
  },
};

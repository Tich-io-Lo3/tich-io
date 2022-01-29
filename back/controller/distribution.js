const db = require("../model");
const upload = require("multer")();

require("../cli/setup_bucket");
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
      res.distrib = distrib;
      return next;
    });
  },
  get_by_os: (req, res) => {
    const distrib = db.Distribution.findOne({
      where: {
        GameId: req.params.game_id,
        os: req.params.distribution_os,
      },
    });
    const params = {
      Bucket: process.env.BUCKET_NAME,
      Key: `${distrib.GameId}_${distrib.os}`,
    };
    const file = s3.getObject(params, function (err, data) {
      if (err) {
        console.log(err, err.stack);
        res.status(500).send(err.stack);
      } /*  else {
          res.setHeader("content-type", question.imageMime);
          res.send(data.Body);
        } */
    });
    return {
      data: distrib,
      file,
    };
  },
  create: (req, res) => {
    const params = {
      Bucket: process.env.BUCKET_NAME,
      Key: `${req.body.GameId}_${req.body.os}`, // File name you want to save as in S3
      Body: req.file.buffer,
    };
    return s3.upload(params, function (err, data) {
      if (err) {
        throw err;
      }
      console.log(`File uploaded successfully. ${data.Location}`);
      return db.Distribution.create(req.body).then((distribution) =>
        res.json(distribution).catch(next)
      );
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

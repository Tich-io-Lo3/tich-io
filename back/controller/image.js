const upload = require("multer")();
const db = require("../model");
const nanoid = require("nanoid");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const s3 = require("../cli/setup_bucket")[0];
const image = require("../route/image");
module.exports = {
  get_all: (req, res, next) => {
    db.Image.findAll({
      where: {
        GameId: { [Op.eq]: req.params.game_id },
      },
    }).then((images) => {
      res.setHeader("content-type");

      let response = [];
      for (let i = 0; i < images.length; i++) {
        const params = {
          Bucket: process.env.BUCKET_NAME,
          Key: image.path,
        };

        s3.getObject(params, function (err, data) {
          if (err) {
            console.log(err, err.stack);
            res.status(500).send(err.stack);
          } else {
            response = [...response, data.body];
          }
        });
        res.setHeader("content-type", image.imageMime);
        res.send(response);
      }
    });
  },
  create: (req, res, next) => {
    let fileName = nanoid.nanoid();
    console.log(req);
    const params = {
      Bucket: process.env.BUCKET_NAME,
      Key: fileName, // File name you want to save as in S3
      Body: req.file.buffer,
    };
    s3.upload(params, function (err, data) {
      if (err) {
        throw err;
      }
      console.log(`File uploaded successfully. ${data.Location}`);

      db.Image.create({ path: fileName, imageMime: req.file.mimetype, GameId: req.params.game_id })
        .then((image) => res.json(image))
        .catch(next);
    });
  },
  delete_by_id: (req, res, next) => {
    return req.game
      .getImages({
        where: {
          id: req.params.image_id,
        },
      })
      .then((images) => {
        if (images.length === 0) {
          throw { status: 404, message: "Requested images not found" };
        }
        const params = {
          Bucket: process.env.BUCKET_NAME,
          Key: images[0].path,
        };
        s3.deleteObject(params, function (err, data) {
          if (err) console.log(err, err.stack);
          // error
          else console.log(); // deleted
        });
        return images[0].destroy();
      })
      .then(() => res.status(200).end())
      .catch(next);
  },
};

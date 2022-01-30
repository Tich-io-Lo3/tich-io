const upload = require("multer")();
const db = require("../model");
const nanoid = require("nanoid");

require("../cli/setup_bucket");
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
          Key: question.image,
        };

        s3.getObject(params, function (err, data) {
          if (err) {
            console.log(err, err.stack);
            res.status(500).send(err.stack);
          } else {
            response = [...response, data.body];
          }
        });
        res.setHeader("content-type", distrib.imageMime);
        res.send(response);
      }
    });
  },
  create: (req, res, next) => {
    let fileName = nanoid.nanoid();

    const params = {
      Bucket: process.env.BUCKET_NAME,
      Key: fileName, // File name you want to save as in S3
      Body: req.body.file.buffer,
    };
    s3.upload(params, function (err, data) {
      if (err) {
        throw err;
      }
      console.log(`File uploaded successfully. ${data.Location}`);

      db.Image.create({ path: fileName, imageMime: req.body.file.mimetype })
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

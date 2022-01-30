require("dotenv").config();
const bodyParser = require("body-parser");


const express = require("express");
const cors = require("cors");

const bdd = require("./model");
const app = express();

const upload = require("multer")();
const AWS = require("aws-sdk");
const nanoid = require("nanoid");

const s3 = new AWS.S3({
  accessKeyId: process.env.S3_ID,
  secretAccessKey: process.env.S3_TOKEN,
  endpoint: process.env.S3_DOMAIN,
  sslEnabled: false,
  s3ForcePathStyle: true,
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
require("./route")(app);
const image_ctrl = require('controller/image');

app.post("/game/:game_id/image", upload.single('file'), image_ctrl.create);

// launch server
const server = app.listen(process.env.PORT || 3630, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log("App listening at http://%s:%s", host, port);
});

require("dotenv").config();

const express = require("express");
const cors = require("cors");

const bdd = require("./models");
const app = express();

const upload = require("multer")();
const AWS = require("aws-sdk");
const nanoid = require("nanoid");

const questionType = ["question", "action"];

const s3 = new AWS.S3({
  accessKeyId: process.env.S3_ID,
  secretAccessKey: process.env.S3_TOKEN,
  endpoint: process.env.S3_DOMAIN,
  sslEnabled: false,
  s3ForcePathStyle: true,
});

app.use(cors());
app.use(express.json());

app.listen(process.env.PORT || 3630, () => {
  console.log(`Serveur lancé sur le port ${process.env.PORT || 3630}`);
});

const fs = require("fs");
const { Sequelize } = require("sequelize");
const { isObject } = require("util");

// create Sequelize instance
let sequelize = new Sequelize(process.env.BDD_URL);
console.log(process.env.BDD_URL);
/* let sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  { dialect: "mariadb" }
);
 */ const db = {};

fs.readdirSync(__dirname)
  .filter((filename) => filename !== "index.js")
  .forEach((filename) => {
    const model = require("./" + filename)(sequelize);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  db[modelName].associate(db);
});

sequelize.sync();

module.exports = db;

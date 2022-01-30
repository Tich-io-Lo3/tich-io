const { Sequelize, DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  class Library extends Sequelize.Model {}

  Library.init(
    {},
    {
      sequelize,
      modelName: "Librairy",
    }
  );

  return Library;
};

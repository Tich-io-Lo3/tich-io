const { Sequelize, DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  class Library extends Sequelize.Model {
    static associate(db) {}
  }

  Library.init(
    {},
    {
      sequelize,
      modelName: "Librairy",
    }
  );

  return Library;
};

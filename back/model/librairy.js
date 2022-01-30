const { Sequelize, DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  class Library extends Sequelize.Model {
    static associate(db) {
      Library.belongsTo(db.User, { onDelete: "cascade" });
      Library.belongsTo(db.Game, { onDelete: "cascade" });
    }
  }

  Library.init(
    {},
    {
      sequelize,
      modelName: "Library",
    }
  );

  return Library;
};

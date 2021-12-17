const { Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  class Library extends Sequelize.Model {
    static associate(db) {
      Library.hasMany(db.User, { onDelete: "cascade" });
      Library.hasMany(db.Game, { onDelete: "cascade" });
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

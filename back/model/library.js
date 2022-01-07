const { Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  class Library extends Sequelize.Model {
    static associate(db) {
      Library.belongsToMany(db.User, { through: Library, onDelete: "cascade" });
      Library.belongsToMany(db.Game, { through: Library, onDelete: "cascade" });
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

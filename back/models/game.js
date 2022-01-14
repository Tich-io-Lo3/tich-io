const { Sequelize, DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  class Game extends Sequelize.Model {
    static associate(db) {
      Game.hasMany(db.Distribution, { onDelete: "cascade" });
      Game.hasOne(db.User, { onDelete: "cascade" });
      Game.belongsToMany(db.User, { through: "Library", onDelete: "cascade" });
    }
  }

  Game.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Game",
    }
  );

  return Game;
};

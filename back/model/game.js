const { Sequelize, DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  class Game extends Sequelize.Model {
    static associate(db) {
      Game.hasMany(db.Distribution, { onDelete: "cascade" });
      Game.belongsTo(db.User, { onDelete: "cascade", as: "creator" });
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

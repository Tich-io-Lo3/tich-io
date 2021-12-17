const { Sequelize, DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  class User extends Sequelize.Model {
    static associate(db) {
      User.hasMany(db.Link);
      User.Belongsto(db.Library, { onDelete: "cascade" });
      User.hasMany(db.Game, { as: "createdGame" });
    }
  }

  User.init(
    {
      id: DataTypes.STRING,
      description: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Group",
    }
  );

  return User;
};

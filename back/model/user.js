const { Sequelize, DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  class User extends Sequelize.Model {
    static associate(db) {
      User.hasMany(db.Link);
      User.hasOne(db.Game);
    }
  }

  User.init(
    {
      name: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    { sequelize, modelName: "User" }
  );

  return User;
};

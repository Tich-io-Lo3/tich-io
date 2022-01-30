const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Distribution extends Sequelize.Model {
    static associate(db) {
      Distribution.belongsTo(db.Game, { onDelete: "cascade" });
    }
  }

  Distribution.init(
    {
      os: DataTypes.STRING,
      file: DataTypes.STRING,
      mimeType: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Distribution",
    }
  );

  return Distribution;
};

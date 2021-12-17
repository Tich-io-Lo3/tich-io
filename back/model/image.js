const { Sequelize, DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  class Image extends Sequelize.Model {
    static associate(db) {
      Image.belongsTo(db.Game, { onDelete: "cascade" });
    }
  }

  Image.init(
    {
      path: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Image",
    }
  );

  return Image;
};

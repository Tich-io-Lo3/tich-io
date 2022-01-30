const { Sequelize, DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  class Link extends Sequelize.Model {
    static associate(db) {
      Link.belongsTo(db.User, { onDelete: "cascade" });
    }
  }

  Link.init(
    {
      link: DataTypes.STRING,
      service: DataTypes.ENUM("Twitter", "Facebook", "Reddit"),
    },
    {
      sequelize,
      modelName: "Link",
    }
  );

  return Link;
};

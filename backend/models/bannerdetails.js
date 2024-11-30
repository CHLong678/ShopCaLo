"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class BannerDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      BannerDetails.belongsTo(models.Product, { foreignKey: "product_id" });
      BannerDetails.belongsTo(models.Banner, { foreignKey: "banner_id" });
    }
  }
  BannerDetails.init(
    {
      product_id: DataTypes.INTEGER,
      banner_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "BannerDetails",
      tableName: "banner_details",
      underscored: true,
    }
  );
  return BannerDetails;
};

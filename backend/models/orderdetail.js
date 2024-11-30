"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OrderDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      OrderDetail.belongsToMany(models.Product, { foreignKey: "product_id" });
      OrderDetail.belongsToMany(models.Order, { foreignKey: "order_id" });
    }
  }
  OrderDetail.init(
    {
      order_id: DataTypes.INTEGER,
      product_id: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "OrderDetail",
      tableName: "order_details",
      underscored: true,
    }
  );
  return OrderDetail;
};
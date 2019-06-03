const { purchase_productData } = require("../dataModel/purchase_product");

module.exports = (sequelize, DataTypes) => {
  const Purchase_product = sequelize.define(
    "purchase_product",
    purchase_productData(DataTypes),
    {
      freezeTableName: true
    }
  );

  Purchase_product.associate = models => {
    Purchase_product.belongsTo(models.purchase);
    Purchase_product.belongsTo(models.product);
  };

  return Purchase_product;
};

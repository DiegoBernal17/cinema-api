const { productData } = require("../dataModel/product");

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("product", productData(DataTypes), {
    freezeTableName: true
  });

  Product.associate = models => {
    Product.belongsTo(models.cinema);
    Product.hasMany(models.purchase_product);
  };

  return Product;
};

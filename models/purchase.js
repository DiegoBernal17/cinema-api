const { purchaseData } = require("../dataModel/purchase");

module.exports = (sequelize, DataTypes) => {
  const Purchase = sequelize.define("purchase", purchaseData(DataTypes), {
    freezeTableName: true
  });

  Purchase.associate = models => {
    Purchase.belongsTo(models.user);
    Purchase.hasMany(models.purchase_product);
  };

  return Purchase;
};

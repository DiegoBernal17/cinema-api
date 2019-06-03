const { promotion_codeData } = require("../dataModel/promotion_code");

module.exports = (sequelize, DataTypes) => {
  const Promotion_code = sequelize.define(
    "promotion_code",
    promotion_codeData(DataTypes),
    {
      freezeTableName: true
    }
  );

  return Promotion_code;
};

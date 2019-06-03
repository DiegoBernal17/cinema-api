const { userData } = require("../dataModel/user");
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("user", userData(DataTypes), {
    freezeTableName: true
  });

  User.associate = models => {
    User.hasMany(models.ticket);
    User.hasMany(models.purchase);
  };

  return User;
};

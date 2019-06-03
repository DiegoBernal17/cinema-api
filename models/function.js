const { functionData } = require("../dataModel/function");

module.exports = (sequelize, DataTypes) => {
  const Function = sequelize.define("function", functionData(DataTypes), {
    freezeTableName: true
  });

  Function.associate = models => {
    Function.belongsTo(models.room);
    Function.belongsTo(models.movie);
    Function.hasMany(models.ticket);
  };

  return Function;
};

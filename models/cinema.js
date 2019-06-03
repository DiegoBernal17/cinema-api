const { cinemaData } = require("../dataModel/cinema");
module.exports = (sequelize, DataTypes) => {
  const Cinema = sequelize.define("cinema", cinemaData(DataTypes), {
    freezeTableName: true
  });

  Cinema.associate = models => {
    Cinema.hasMany(models.room);
    Cinema.hasMany(models.product);
  };

  return Cinema;
};

const { roomData } = require("../dataModel/room");
module.exports = (sequelize, DataTypes) => {
  const Room = sequelize.define("room", roomData(DataTypes), {
    freezeTableName: true
  });

  Room.associate = models => {
    Room.belongsTo(models.cinema);
    Room.hasMany(models.function);
  };

  return Room;
};

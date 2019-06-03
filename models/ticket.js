const { ticketData } = require("../dataModel/ticket");

module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define("ticket", ticketData(DataTypes), {
    freezeTableName: true
  });

  Ticket.associate = models => {
    Ticket.belongsTo(models.function);
    Ticket.belongsTo(models.user);
  };

  return Ticket;
};

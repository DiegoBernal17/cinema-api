module.exports = {
  ticketData: DataTypes => {
    return {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      type: {
        type: DataTypes.STRING(1),
        allowNull: false
      },
      seat: {
        type: DataTypes.STRING(3),
        allowNull: false
      }
    };
  }
};

module.exports = {
  roomData: DataTypes => {
    return {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      number: {
        type: DataTypes.STRING(2),
        allowNull: false
      },
      total_seat: {
        type: DataTypes.STRING(2),
        allowNull: false
      }
    };
  }
};

module.exports = {
  functionData: DataTypes => {
    return {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      hour: {
        type: DataTypes.STRING(5),
        allowNull: false
      },
      date_start: {
        type: DataTypes.DATE,
        allowNull: false
      },
      date_finish: {
        type: DataTypes.DATE,
        allowNull: false
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      }
    };
  }
};

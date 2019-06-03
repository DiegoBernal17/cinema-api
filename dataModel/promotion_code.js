module.exports = {
  promotion_codeData: DataTypes => {
    return {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      type: {
        type: DataTypes.STRING(20),
        allowNull: false
      },
      code: {
        type: DataTypes.STRING(10),
        allowNull: false
      },
      expiration_date: {
        type: DataTypes.DATE,
        allowNull: false
      }
    };
  }
};

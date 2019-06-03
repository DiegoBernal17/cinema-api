module.exports = {
  purchase_productData: DataTypes => {
    return {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      amount: {
        type: DataTypes.FLOAT(2),
        allowNull: false
      }
    };
  }
};

module.exports = {
  purchaseData: DataTypes => {
    return {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      subtotal: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false
      },
      iva: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false
      },
      total: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      }
    };
  }
};

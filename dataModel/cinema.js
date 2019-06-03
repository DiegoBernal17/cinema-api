module.exports = {
  cinemaData: DataTypes => {
    return {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      price_normal: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false
      },
      price_3D: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false
      },
      price_senior: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false
      },
      price_children: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false
      },
      city: {
        type: DataTypes.STRING(40),
        allowNull: false
      },
      phone: {
        type: DataTypes.STRING(10),
        allowNull: false
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      },
      updatedAt: DataTypes.DATE
    };
  }
};

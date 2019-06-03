module.exports = {
  userData: DataTypes => {
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
      paternal: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      maternal: DataTypes.STRING(100),
      email: {
        type: DataTypes.STRING(140),
        allowNull: false
      },
      password: {
        type: DataTypes.STRING(64),
        allowNull: false
      },
      cellphone: DataTypes.STRING(10),
      birthday: DataTypes.STRING(10),
      cinema_points: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      loggedAt: DataTypes.DATE,
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      }
    };
  }
};

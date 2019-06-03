module.exports = {
  movieData: DataTypes => {
    return {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING(140),
        allowNull: false
      },
      synopsis: DataTypes.TEXT,
      certification: DataTypes.STRING(1),
      language: DataTypes.STRING(3),
      type: DataTypes.STRING(1),
      duration: DataTypes.FLOAT(3),
      genre: DataTypes.STRING(50),
      poster: DataTypes.STRING(150),
      actors: {
        type: DataTypes.STRING,
        allowNull: false
      },
      director: {
        type: DataTypes.STRING(120),
        allowNull: false
      },
      trailer: {
        type: DataTypes.STRING(200),
        allowNull: false
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false
      }
    };
  }
};

const { movieData } = require("../dataModel/movie");

module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define("movie", movieData(DataTypes), {
    freezeTableName: true
  });

  Movie.associate = models => {
    Movie.hasMany(models.function);
  };

  return Movie;
};

import db from "../models";
const js2xmlparser = require("js2xmlparser");

module.exports = function(app) {
  app.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
      res.status(400).send({ error: true, message: "Empty data" });
    }
    const correct = db.user
      .findOne({ where: { email, password } })
      .then(data => {
        if (data) {
          res.send({ error: false, data, message: "Login success" });
          return true;
        } else {
          res.send({ error: true, data, message: "Incorrect login" });
          return false;
        }
      })
      .catch(error => {
        res.status(400).send({ error: true, message: "Incorrect login" });
        return false;
      });
    if (!correct)
      res.status(400).send({ error: true, message: "Incorrect login" });
  });

  app.get("/movie/:movieId/cinema/:cinemaId", (req, res) => {
    const movieId = req.params.movieId;
    const cinemaId = req.params.cinemaId;

    if (!movieId || !cinemaId) {
      res.status(400).send({ error: true, message: "Empty data" });
    }
    db.room
      .findAll({
        include: [{ model: db.function, where: { movieId } }],
        where: {
          cinemaId
        }
      })
      .then(data => {
        res.send({ error: false, data, message: "" });
      });
  });

  app.get("/movie/XML/:movieId", (req, res) => {
    const movieId = req.params.movieId;
    if (!movieId) {
      return res.status(400).send({ error: true, message: "Empty data" });
    }
    db.movie.findByPk(movieId).then(data => {
      const data2 = data.get({
        plain: true
      });
      const dataToXML = js2xmlparser.parse("Pelicula", data2);
      res.set("Content-Type", "text/xml");
      res.send(dataToXML);
    });
  });
};

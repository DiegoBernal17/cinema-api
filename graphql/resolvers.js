const { mutations } = require("./mutations");

export default {
  Query: {
    cinemas: (parent, args, { db }, info) =>
      db.cinema.findAll({ include: [{ model: db.room }] }),
    movies: (parent, args, { db }, info) =>
      db.movie.findAll({
        include: [{ model: db.function }, { model: db.function }]
      }),
    functions: (parent, args, { db }, info) =>
      db.function.findAll({
        include: [{ model: db.room }, { model: db.movie }, { model: db.ticket }]
      }),
    products: (parent, args, { db }, info) =>
      db.product.findAll({ include: [{ model: db.cinema }] }),
    rooms: (parent, args, { db }, info) =>
      db.room.findAll({ include: [{ model: db.cinema }] }),

    cinema: (parent, { id }, { db }, info) =>
      db.cinema.findByPk(id, { include: [{ model: db.room }] }),
    function: (parent, { id }, { db }, info) =>
      db.cinema.findByPk(id, {
        include: [{ model: db.room }, { model: db.movie }, { model: db.ticket }]
      }),
    movie: (parent, { id }, { db }, info) =>
      db.movie.findByPk(id, { include: [{ model: db.function }] }),
    product: (parent, { id }, { db }, info) =>
      db.product.findByPk(id, { include: [{ model: db.cinema }] }),
    promotion_code: (parent, { id }, { db }, info) =>
      db.promotion_code.findByPk(id),
    purchase_product: (parent, { id }, { db }, info) =>
      db.purchase_product.findByPk(id, {
        include: [{ model: db.product }, { model: db.purchase }]
      }),
    purchase: (parent, { id }, { db }, info) =>
      db.purchase.findByPk(id, { include: [{ model: db.purchase_product }] }),
    room: (parent, { id }, { db }, info) =>
      db.room.findByPk(id, { include: [{ model: db.cinema }] }),
    ticket: (parent, { id }, { db }, info) =>
      db.ticket.findByPk(id, {
        include: [{ model: db.function }, { model: db.user }]
      }),
    user: (parent, { id }, { db }, info) =>
      db.user.findByPk(id, {
        include: [{ model: db.ticket }, { model: db.purchase }]
      })
  },
  Mutation: mutations
};

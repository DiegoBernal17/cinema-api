const cinemaCRUD = {
  createCinema: (
    parent,
    {
      name,
      price_normal,
      price_3D,
      price_senior,
      price_children,
      address,
      city,
      phone
    },
    { db },
    info
  ) =>
    db.cinema.create({
      name,
      price_normal,
      price_3D,
      price_senior,
      price_children,
      address,
      city,
      phone,
      createdAt: Date.now()
    }),
  updateCinema: (
    parent,
    {
      id,
      name,
      price_normal,
      price_3D,
      price_senior,
      price_children,
      address,
      city,
      phone
    },
    { db },
    info
  ) =>
    db.cinema.update(
      {
        name,
        price_normal,
        price_3D,
        price_senior,
        price_children,
        address,
        city,
        phone
      },
      {
        where: {
          id: id
        }
      }
    )
  /*  deleteCinema: (parent, { id }, { db }, info) =>
        db.cinema.destroy({
        where: {
            id: id
        }
    }) */
};

const functionCRUD = {
  createFunction: (
    parent,
    { hour, date_start, date_finish, status, roomId, movieId },
    { db },
    info
  ) =>
    db.function.create({
      hour,
      date_start,
      date_finish,
      status,
      roomId,
      movieId,
      createdAt: Date.now()
    })
};

const movieCRUD = {
  createMovie: (
    parent,
    { name, synopsis, duration, actors, director, trailer },
    { db },
    info
  ) =>
    db.function.create({
      name,
      synopsis,
      duration,
      actors,
      director,
      trailer,
      createdAt: Date.now()
    })
};

const productCRUD = {
  createProduct: (parent, { name, price, available, cinemaId }, { db }, info) =>
    db.function.create({
      name,
      price,
      available,
      cinemaId,
      createdAt: Date.now()
    })
};

const promotion_codeCRUD = {
  createPromotion_code: (
    parent,
    { type, code, expiration_date },
    { db },
    info
  ) =>
    db.function.create({
      type,
      code,
      expiration_date,
      createdAt: Date.now()
    })
};

const purchase_productCRUD = {
  createPurchase_product: (
    parent,
    { amount, productId, purchaseId },
    { db },
    info
  ) =>
    db.function.create({
      amount,
      productId,
      purchaseId,
      createdAt: Date.now()
    })
};

const purchaseCRUD = {
  createPurchase: (parent, { subtotal, iva, total, userId }, { db }, info) =>
    db.function.create({
      subtotal,
      iva,
      total,
      userId,
      createdAt: Date.now()
    })
};

const roomCRUD = {
  createRoom: (parent, { number, total_seat, cinemaId }, { db }, info) =>
    db.function.create({
      number,
      total_seat,
      cinemaId,
      createdAt: Date.now()
    })
};

const ticketCRUD = {
  createTicket: (parent, { type, seat, funcitionId, userId }, { db }, info) =>
    db.function.create({
      type,
      seat,
      funcitionId,
      userId,
      createdAt: Date.now()
    })
};

const userCRUD = {
  createUser: (
    parent,
    { name, paternal, maternal, email, password, cellphone, birthday },
    { db },
    info
  ) =>
    db.function.create({
      name,
      paternal,
      maternal,
      email,
      password,
      cellphone,
      birthday,
      createdAt: Date.now()
    })
};

module.exports = {
  mutations: {
    ...cinemaCRUD,
    ...functionCRUD,
    ...movieCRUD,
    ...productCRUD,
    ...promotion_codeCRUD,
    ...purchase_productCRUD,
    ...purchaseCRUD,
    ...roomCRUD,
    ...ticketCRUD,
    ...userCRUD
  }
};

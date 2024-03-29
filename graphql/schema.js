export default `
  type Cinema {
    id: ID!
    name: String!
    price_normal: Float!
    price_3D: Float!
    price_senior: Float!
    price_children: Float!
    address: String!
    city: String!
    rooms: [Room!]!
    phone: String!
  }
  scalar Date
  type Function {
    id: ID!
    hour: String!
    date_start: Date
    date_finish: Date
    status: Boolean!
    room: Room!
    movie: Movie!
    tickets: [Ticket!]!
  }
  type Movie {
    id: ID!
    name: String!
    synopsis: String!
    duration: Int!
    actors: String!
    director: String!
    trailer: String!
    functions: [Function!]!
  }
  type Product {
    id: ID!
    name: String!
    price: Float!
    available: Boolean!
    cinema: Cinema!
  }
  type Promotion_code {
    id: ID!
    type: String!
    code: String!
    expiration_date: Date!
  }
  type Purchase_product {
    id: ID!
    amount: String!
    product: Product!
    purchase: Purchase!
  }
  type Purchase {
    id: ID!
    subtotal: Float!
    iva: Float!
    total: Float!
    user: User!
    createdAt: Date
    purchase_products: [Purchase_product!]!
  }
  type Room {
    id: ID!
    cinema: Cinema!
    number: String!
    total_seat: Int!
  }
  type Ticket {
    id: ID!
    type: String!
    seat: String!
    function: Function!
    user: User!
  }
  type User {
    id: ID!
    name: String!
    paternal: String!
    maternal: String
    email: String!
    cellphone: String
    birthday: String
    cinema_points: Int!
    createdAt: Date!
    loggedAt: Date
    tickets: [Ticket!]!
    purchases: [Purchase!]!
  }
  type Query {
    cinemas: [Cinema!]!
    movies: [Movie!]!
    functions: [Function!]!
    products: [Product!]!
    rooms: [Room!]!
    cinema(id: ID!): Cinema
    function(id: ID!): Function
    movie(id: ID!): Movie
    product(id: ID!): Product
    promotion_code(id: ID!): Promotion_code
    purchase_product(id: ID!): Purchase_product
    purchase(id: ID!): Purchase
    room(id: ID!): Room
    ticket(id: ID!): Ticket
    user(id: ID!): User
  }
  type Mutation {
    createCinema(name: String!, price_normal: Float!, price_3D: Float, price_senior: Float, price_children: Float, address: String!, city: String!, phone: String): Cinema!
    updateCinema(id: ID!, name: String!, price_normal: Float!, price_3D: Float, price_senior: Float, price_children: Float, address: String!, city: String!, phone: String): [Int!]!
    createFunction(hour: String!, date_start: String!, date_finish: String!, status: Boolean!, roomId: Int!, movieId: Int!): Function!
    createMovie(name: String!, synopsis: String!, duration: Int!, actors: String, director: String, trailer: String): Movie!
    createProduct(name: String!, price: Float!, available: Boolean!, cinemaId: Int!): Product!
    createPromotion_code(type: String!, code: String!, expiration_date: String!): Promotion_code!
    createPurchase_product(amount: Int!, productId: Int!, purchaseId: Int!): Purchase_product!
    createPurchase(subtotal: Float!, iva: Float!, total: Float!, userId: Int!): Purchase!
    createRoom(number: String!, total_seat: Int!, cinemaId: Int!): Room!
    createTicket(type: String!, seat: String!, funcitionId: Int!, userId: Int!): Ticket!
    createUser(name: String!, paternal: String!, maternal: String, email: String!, password: String!, cellphone: String, birthday: String): User!
  }
`;

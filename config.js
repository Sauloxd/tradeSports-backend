var config = {};
config.connectionString = process.env.DATABASE_URL || ('postgres://ricardo:1234@localhost:5432/tradesportsdb');
//config.connectionString = process.env.DATABASE_URL || ('postgres://localhost:5432/tradesportsdb');
config.secret = "superSecret";


module.exports = config;

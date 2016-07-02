var database         = 'tradesportsdb';
var connectionString = process.env.DATABASE_URL || ('postgres://localhost:5432/' + database);

module.exports = connectionString;

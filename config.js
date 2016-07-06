var database         = 'tradesportsdb';
var connectionString = process.env.DATABASE_URL || ('postgres://localhost:5432/' + database);
var secret = "superSecret"

exports.connectionString = connectionString;
exports.secret = secret;

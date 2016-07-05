var database         = 'tradesportsdb';
var connectionString = process.env.DATABASE_URL || ('postgres://manuelpuyol:b282F775&@localhost:5432/' + database);

module.exports = connectionString;

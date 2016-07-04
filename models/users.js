var pg = require('pg');
var path = require('path');
var connectionString = require(path.join(__dirname, '../', 'config'));

var client = new pg.Client(connectionString);
client.connect();

var query = client.query(
  'CREATE TABLE administrador('            +
    'CPF numeric(30) PRIMARY KEY,'      +
    'Nome varchar(255) not null,'        +
    'Senha varchar(255) not null'      +
  ')'
);

query.on('end', function() {
  client.end();
});

var pg = require('pg');
var path = require('path');
var connectionString = require(path.join(__dirname, '../../', 'config')).connectionString;

var client = new pg.Client(connectionString);
client.connect();

var query = client.query(
  'CREATE TABLE IF NOT EXISTS promocao('       +
    'idPromocao numeric PRIMARY KEY,'        +
    'tipo varchar(255) not null,'     +
    'dataInicio Date not null,'    +
    'dataFim Date not null,'    +
  ')'
);

query.on('end', function() {
  client.end();
});
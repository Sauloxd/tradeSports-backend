var pg = require('pg');
var path = require('path');
var connectionString = require(path.join(__dirname, '../', 'config'));

var client = new pg.Client(connectionString);
client.connect();

var query = client.query(
  'CREATE TABLE Produto('            +
    'idProduto SERIAL PRIMARY KEY,'      +
    'Valor numeric(30) not null,'        +
    'Nome varchar(255) not null,'        +
    'Imagem varchar(255),'               +
    'Descrição varchar(255) not null,'   +
    'Peso numeric(30) not null,'         +
    'Tamanho varchar(255) not null,'     +
    'Fabricante varchar(255) not null,'  +
    'Quantidade numeric(30) not null,'   +
    'Tipo varchar(255) not null'      +
  ')'
);

query.on('end', function() {
  client.end();
});

var pg = require('pg');
var path = require('path');
var connectionString = require(path.join(__dirname, '../../', 'config'));

var client = new pg.Client(connectionString);
client.connect();

var query = client.query(
  'CREATE TABLE IF NOT EXISTS Produto('                +
    'idProduto SERIAL PRIMARY KEY,'      +
    'valor numeric(30) not null,'        +
    'nome varchar(255) not null,'        +
    'imagem varchar(255),'               +
    'descrição varchar(255) not null,'   +
    'peso numeric(30) not null,'         +
    'tamanho varchar(255) not null,'     +
    'fabricante varchar(255) not null,'  +
    'quantidade numeric(30) not null,'   +
    'tipo varchar(255) not null'         +
  ')'
);

query.on('end', function() {
  client.end();
});

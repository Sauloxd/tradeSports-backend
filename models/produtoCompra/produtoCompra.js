var pg = require('pg');
var path = require('path');
var connectionString = require(path.join(__dirname, '../../', 'config')).connectionString;

var client = new pg.Client(connectionString);
client.connect();

var query = client.query(
  'CREATE TABLE IF NOT EXISTS ProdutoCompra('       +
    'idCompra numeric REFERENCES Compra (idCompra),'        +
    'idProduto numeric REFERENCES Produto (idProduto),' 		+
    'quantidade numeric not null' +
  ')'
);

query.on('end', function() {
  client.end();
});
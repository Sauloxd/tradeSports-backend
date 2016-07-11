var pg = require('pg');
var path = require('path');
var connectionString = require(path.join(__dirname, '../../', 'config')).connectionString;

var client = new pg.Client(connectionString);
client.connect();

var query = carrinho.query(
  'CREATE TABLE IF NOT EXISTS Carrinho('        				+
    'cpf_cliente integer REFERENCES cliente (cpf),' 			+
    'nome varchar(255) not null,' 			    				+
  ')'
);

query.on('end', function() {
  client.end();
});
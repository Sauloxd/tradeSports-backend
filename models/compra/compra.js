var pg = require('pg');
var path = require('path');
var connectionString = require(path.join(__dirname, '../../', 'config')).connectionString;

var client = new pg.Client(connectionString);
client.connect();

var query = client.query(
  'CREATE TABLE IF NOT EXISTS Compra('       +
    'idCompra numeric PRIMARY KEY,'        +
    'cpf_cliente numeric(11) REFERENCES cliente (cpf),' 		+
    'valor numeric not null,'
    'idEndereco numeric REFERENCES Endereco (idEndereco),' 		+    
    'metodo_de_pagamento varchar(255) not null,'    +
    'imagemNF varchar(255) not null,'    +
    'notaFiscal varchar(255) not null'    +
  ')'
);

query.on('end', function() {
  client.end();
});
var pg = require('pg');
var path = require('path');
var connectionString = require(path.join(__dirname, '../../', 'config')).connectionString;

var client = new pg.Client(connectionString);
client.connect();

var query = client.query(
  'CREATE TABLE IF NOT EXISTS promocao('       +
    'idPromocao numeric PRIMARY KEY,'        +
    'tipo varchar(255) not null,'     +
    'estado varchar(255) not null'    +
  ')'
);

/*
	CREATE TABLE IF NOT EXISTS promocao(
	idPromocao numeric PRIMARY KEY,
	tipo numeric not null,
	estado numeric not null)


	tipo:
			1 - desconto 10%
			2 - desconto 25%
			3 - sem frete

	estado:
			inativo
			ativo
*/

query.on('end', function() {
  client.end();
});
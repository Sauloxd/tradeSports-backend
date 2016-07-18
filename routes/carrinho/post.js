var path = require('path');
var pg = require('pg');
var connectionString = require(path.join(__dirname, '../', '../', 'config')).connectionString;


module.exports = function(req, res) {
  console.log('add was called!');
  var results = [];

  // Grab data from http request
  var data = {
    CPF: req.body.cpf,
    idProduto: req.body.idProduto,
    quantidade: req.body.quantidade
  };

  // Get a Postgres client from the connection pool
  pg.connect(connectionString, function(err, client, done) {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({ success: false, data: err});
    }

    // SQL Query > Insert Data
    client.query('INSERT INTO Carrinho('            +
      'cpf_cliente,'                                +
      'id_produto,'                                 +
      'quantidade'                                  +
    ') values($1, $2, $3)', [data.CPF, data.idProduto, data.quantidade]);

    // SQL Query > Select Data
    var query = client.query("SELECT * FROM Carrinho ORDER BY cpf_cliente DESC LIMIT 1");

    // Stream results back one row at a time
    query.on('row', function(row) {
      results.push(row);
    });

    // After all data is returned, close connection and return results
    query.on('end', function() {
      done();
      return res.json(results);
    });


  });
}

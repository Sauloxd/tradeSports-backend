var path = require('path');
var pg = require('pg');
var connectionString = require(path.join(__dirname, '../', '../', 'config')).connectionString;

var produtos = {};

produtos.get = function(req, res) {

  var results = [];

  // Get a Postgres client from the connection pool
  pg.connect(connectionString, function(err, client, done) {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({ success: false, data: err});
    }

    // SQL Query > Select Data
    var query = client.query("SELECT * FROM Produto ORDER BY idProduto;");

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

produtos.getById = function(req, res) {

  var results = [];
  var _id = req.params.idProduto;


  // Get a Postgres client from the connection pool
  pg.connect(connectionString, function(err, client, done) {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({ success: false, data: err});
    }

    // SQL Query > Select Data
    var query = client.query("SELECT * FROM Produto WHERE idProduto="+ _id +"ORDER BY idProduto;");

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

produtos.add = function(req, res) {
  console.log('add was called!');
  var results = [];

  // Grab data from http request
  var data = {
    Valor: req.body.valor,
    Nome: req.body.nome,
    Imagem: req.body.imagem,
    Descrição: req.body.descricao,
    Peso: req.body.peso,
    Tamanho: req.body.tamanho,
    Fabricante: req.body.fabricante,
    Quantidade: req.body.quantidade,
    Tipo: req.body.tipo
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
    client.query('INSERT INTO Produto(' +
      'valor,'                          +
      'nome,'                           +
      'imagem,'                         +
      'descrição,'                      +
      'peso,'                           +
      'tamanho,'                        +
      'fabricante,'                     +
      'quantidade,'                     +
      'tipo'                            +
    ') values($1, $2, $3, $4, $5, $6, $7, $8, $9)', [data.Valor, data.Nome, data.Imagem, data.Descrição, data.Peso, data.Tamanho, data.Fabricante, data.Quantidade, data.Tipo]);

    // SQL Query > Select Data
    var query = client.query("SELECT * FROM Produto ORDER BY idProduto DESC LIMIT 1");

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

produtos.update = function(req, res) {

  var results = [];

  // Grab data from the URL parameters
  var id = req.params.idProduto;

  // Grab data from http request
  var data = {
    Valor: req.body.valor,
    Nome: req.body.nome,
    Imagem: req.body.imagem,
    Descrição: req.body.descrição,
    Peso: req.body.peso,
    Tamanho: req.body.tamanho,
    Fabricante: req.body.fabricante,
    Quantidade: req.body.quantidade,
    Tipo: req.body.tipo
  };

  // Get a Postgres client from the connection pool
  pg.connect(connectionString, function(err, client, done) {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).send(json({ success: false, data: err}));
    }

    // SQL Query > Update Data
    client.query("UPDATE Produto SET valor=($1), nome=($2), imagem=($3), descrição=($4), peso=($5), tamanho=($6), fabricante=($7), quantidade=($8), yipo=($9) WHERE idProduto=($10)", [data.Valor, data.Nome, data.Imagem, data.Descrição, data.Peso, data.Tamanho, data.Fabricante, data.Quantidade, data.Tipo, id]);

    // SQL Query > Select Data
    var query = client.query("SELECT * FROM Produto ORDER BY idProduto ASC");

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

produtos.delete = function(req, res) {

  var results = [];

  // Grab data from the URL parameters
  var id = req.params.idProduto;


  // Get a Postgres client from the connection pool
  pg.connect(connectionString, function(err, client, done) {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({ success: false, data: err});
    }

    // SQL Query > Delete Data
    client.query("DELETE FROM Produto WHERE idProduto=($1)", [id]);

    // SQL Query > Select Data
    var query = client.query("SELECT * FROM Produto ORDER BY idProduto ASC");

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

module.exports = produtos;

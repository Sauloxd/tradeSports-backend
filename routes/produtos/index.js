var path = require('path');
var pg = require('pg');
var connectionString = require(path.join(__dirname, '../', '../', 'config'));

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
    Valor: req.body.Valor,
    Nome: req.body.Nome,
    Imagem: req.body.Imagem,
    Descrição: req.body.Descricao,
    Peso: req.body.Peso,
    Tamanho: req.body.Tamanho,
    Fabricante: req.body.Fabricante,
    Quantidade: req.body.Quantidade,
    Tipo: req.body.Tipo
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
      'Valor,'                          +
      'Nome,'                           +
      'Imagem,'                         +
      'Descrição,'                      +
      'Peso,'                           +
      'Tamanho,'                        +
      'Fabricante,'                     +
      'Quantidade,'                     +
      'Tipo'                            +
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
    Valor: req.body.Valor,
    Nome: req.body.Nome,
    Imagem: req.body.Imagem,
    Descrição: req.body.Descrição,
    Peso: req.body.Peso,
    Tamanho: req.body.Tamanho,
    Fabricante: req.body.Fabricante,
    Quantidade: req.body.Quantidade,
    Tipo: req.body.Tipo
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
    client.query("UPDATE Produto SET Valor=($1), Nome=($2), Imagem=($3), Descrição=($4), Peso=($5), Tamanho=($6), Fabricante=($7), Quantidade=($8), Tipo=($9) WHERE idProduto=($10)", [data.Valor, data.Nome, data.Imagem, data.Descrição, data.Peso, data.Tamanho, data.Fabricante, data.Quantidade, data.Tipo, id]);

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

var path = require('path');
var pg = require('pg');
var connectionString = require(path.join(__dirname, '../', '../', 'config')).connectionString;

var clientes = {};

clientes.get = function(req, res) {

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
    var query = client.query("SELECT cpf, nome, login, telefone, email FROM Cliente;");

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

clientes.getById = function(req, res) {

  var results = [];
  var _id = req.params.cpf;


  // Get a Postgres client from the connection pool
  pg.connect(connectionString, function(err, client, done) {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({ success: false, data: err});
    }

    // SQL Query > Select Data
    var query = client.query("SELECT cpf, nome, login, telefone, email FROM Cliente WHERE cpf="+ _id +";");

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

clientes.add = function(req, res) {
  console.log('Cliente add was called!');
  var results = [];

  // Grab data from http request
  var data = {
    CPF: req.body.cpf,
    Nome: req.body.nome,
    Login: req.body.login,
    Senha: req.body.senha,
    Telefone: req.body.telefone,
    Email: req.body.email
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
    client.query('INSERT INTO Cliente(' +
      'cpf,'                            +
      'nome,'                           +
      'login,'                          +
      'senha,'                          +
      'telefone,'                       +
      'email'                          +
    ') values($1, $2, $3, $4, $5, $6)', [data.CPF, data.Nome, data.Login, data.Senha, data.Telefone, data.Email]);

    // SQL Query > Select Data
    var query = client.query("SELECT * FROM Cliente WHERE cpf=" + data.CPF);

    // Stream results back one row at a time
    query.on('row', function(row) {
      results.push(row);
    });

    // After all data is returned, close connection and return results
    query.on('end', function() {
      done();
      console.log('connected');
      return res.json(results);
    });


  });
}

clientes.update = function(req, res) {

  var results = [];

  // Grab data from the URL parameters
  var id = req.params.cpf;

  // Grab data from http request
  var data = {
    Nome: req.body.nome,
    Login: req.body.login,
    Senha: req.body.senha,
    Telefone: req.body.telefone,
    Email: req.body.email
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
    client.query("UPDATE Produto SET nome=($1), login=($2), senha=($3), telefone=($4), email=($5) WHERE cpf=($5)", [data.Nome, data.Login, data.Senha, data.Telefone, data.Email, id]);

    // SQL Query > Select Data
    var query = client.query("SELECT * FROM Cliente");

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

clientes.delete = function(req, res) {

  var results = [];

  // Grab data from the URL parameters
  var id = req.params.cpf;


  // Get a Postgres client from the connection pool
  pg.connect(connectionString, function(err, client, done) {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({ success: false, data: err});
    }

    // SQL Query > Delete Data
    client.query("DELETE FROM Cliente WHERE cpf=($1)", [id]);

    // SQL Query > Select Data
    var query = client.query("SELECT * FROM Cliente");

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

module.exports = clientes;

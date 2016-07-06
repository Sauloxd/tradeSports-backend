var express = require('express');
var routes = require('./routes');
var bodyParser = require('body-parser');
var jwt    = require('jsonwebtoken');
var morgan      = require('morgan');


var app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static('dashboard-admin/dist'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(morgan('dev'));
//Authentication
app.post('/auth', routes.auth);


// Produto CRUD
app.get('/produto/:idProduto', routes.produtos.getById);
app.get('/produto', routes.produtos.get);
app.post('/produto', routes.produtos.add);
app.put('/produto/:idProduto', routes.produtos.update);
app.delete('/produto/:idProduto', routes.produtos.delete);

// Administrador CRUD
app.get('/administrador/:cpf', routes.administradores.getById);
app.get('/administrador', routes.administradores.get);
app.post('/administrador', routes.administradores.add);
app.put('/administrador/:cpf', routes.administradores.update);
app.delete('/administrador/:cpf', routes.administradores.delete);

app.use(function(req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, 'saulofuruta', function(err, decoded) {
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;
        next();
      }
    });

  } else {

    // if there is no token
    // return an error
    return res.status(403).send({
        success: false,
        message: 'No token provided.'
    });

  }
});

// Cliente CRUD
app.get('/cliente/:cpf', routes.clientes.getById);
app.get('/cliente', routes.clientes.get);
app.post('/cliente', routes.clientes.add);
app.put('/cliente/:cpf', routes.clientes.update);
app.delete('/cliente/:cpf', routes.clientes.delete);

app.listen(3000, function () {
  console.log('The service is on port 3000!');
});

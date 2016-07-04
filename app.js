var express = require('express');
var routes = require('./routes');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static('dashboard-admin/dist'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Produto CRUD
app.get('/produto/:idProduto', routes.produtos.getById);
app.get('/produto', routes.produtos.get);
app.post('/produto', routes.produtos.add);
app.put('/produto/:idProduto', routes.produtos.update);
app.delete('/produto/:idProduto', routes.produtos.delete);

// Administrador CRUD
app.get('/administrador/:cpf', routes.administrador.getById);
app.get('/administrador', routes.administrador.get);
app.post('/administrador', routes.administrador.add);
app.put('/administrador/:cpf', routes.administrador.update);
app.delete('/administrador/:cpf', routes.administrador.delete);


// Cliente CRUD
app.get('/cliente/:cpf', routes.clientes.getById);
app.get('/cliente', routes.clientes.get);
app.post('/cliente', routes.clientes.add);
app.put('/cliente/:cpf', routes.clientes.update);
app.delete('/cliente/:cpf', routes.clientes.delete);

app.listen(3000, function () {
  console.log('The service is on port 3000!');
});

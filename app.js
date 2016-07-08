var express     = require('express');
var routes      = require('./routes');
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var cors        = require('cors');
var app = express();

//FOR NOW, encapsulate this in a setup folder!
var _           = require('underscore');


app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static('dashboard-admin/dist'));

app.use(cors());

app.use(morgan('dev'));
//Authentication
//Check for JWT in every of the below routes
// app.use(routes.auth.middleware);
// app.post('/api/auth', routes.auth.authenticate);

var appRoutes = [];
var actions = [];

_.forEach(routes, function(route){
  appRoutes = _.union(appRoutes, route);
});

_.forEach(appRoutes, function(route){
  actions.push(cb(route));
});

function cb(route) {
    return function(next) {
        app[route.method](route.path, route.callback);
        next();
    }
}

_(actions).reduceRight(_.wrap, function() { console.warn('Finished Adding routes!') })();



// // Produto CRUD
// app.get('/produto/:idProduto', routes.produtos.getById);
// app.get('/produto', routes.produtos.get);
// app.post('/produto', routes.produtos.add);
// app.put('/produto/:idProduto', routes.produtos.update);
// app.delete('/produto/:idProduto', routes.produtos.delete);

// // Administrador CRUD
// app.get('/administrador/:cpf', routes.administradores.getById);
// app.get('/administrador', routes.administradores.get);
// app.post('/administrador', routes.administradores.add);
// app.put('/administrador/:cpf', routes.administradores.update);
// app.delete('/administrador/:cpf', routes.administradores.delete);

// // Cliente CRUD
// app.get('/cliente/:cpf', routes.clientes.getById);
// app.get('/cliente', routes.clientes.get);
// app.post('/cliente', routes.clientes.add);
// app.put('/cliente/:cpf', routes.clientes.update);
// app.delete('/cliente/:cpf', routes.clientes.delete);

app.listen(3000, function () {
  console.log('The service is on port 3000!');
});

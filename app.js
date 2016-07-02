var express = require('express');
var routes = require('./routes');

var app = express();

app.use(express.static('public'));

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// Product CRUD
app.get('/produto/:id', routes.produtos.getById);

app.post('/produto', routes.produtos.add);

app.put('/produto/:id', routes.produtos.update);

app.delete('/produto/:id', routes.produtos.delete);



app.listen(3000, function () {
  console.log('The service is on port 3000!');
});

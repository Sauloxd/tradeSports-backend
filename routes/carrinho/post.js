var path = require('path');
var pg = require('pg');
var connectionString = require(path.join(__dirname, '../', '../', 'config')).connectionString;


module.exports = function(req, res) {
  var results = [];
  var onCart = [];
  var collection = [];

  // Grab data from http request
  var data = {
    item: req.body.item,
    cpf_cliente: req.body.cpf_cliente
  }
    // CPF: req.body.cpf,
    // idProduto: req.body.idProduto,
    // quantidade: req.body.quantidade

  // Get a Postgres client from the connection pool
  pg.connect(connectionString, function(err, client, done) {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({ success: false, data: err});
    }

    for(var i = 0; i < data.item.length; i++) {
      collection.push(
        "SELECT id_produto, tamanho, cpf_cliente FROM Carrinho WHERE " +
        "cpf_cliente=" + data.cpf_cliente + " and " +
        "id_produto="  + data.item[i].item_id + " and " +
        "tamanho="  + data.item[i].item_size
      );
    }
    insertCollection(collection, closeConnection);
    // SQL Query > Insert Data
    //
    //
    // // SQL Query > Select Data
    // var query = client.query("SELECT * FROM Carrinho ORDER BY cpf_cliente DESC LIMIT 1");
    //
    // // Stream results back one row at a time
    // query.on('row', function(row) {
    //   results.push(row);
    // });
    //
    // // After all data is returned, close connection and return results
    // query.on('end', function() {
    //   done();
    //   return res.json(results);
    // });
    //
    // // Stream results back one row at a time
    // queryVerify.on('row', function(row) {
    //   results.push(row);
    // });
    //
    // // After all data is returned, close connection and return results
    // queryVerify.on('end', function() {
    //   if(results[0] == undefined){
    //
    //       client.query('INSERT INTO Carrinho('            +
    //                     'cpf_cliente,'                                +
    //                     'id_produto,'                                 +
    //                     'quantidade'                                  +
    //                     ') values($1, $2, $3)', [data.CPF, data.idProduto, data.quantidade]);
    //   }else{
    //     var quant = parseInt(results[0].quantidade) + parseInt(data.quantidade);
    //     client.query("UPDATE Carrinho SET quantidade=($1) WHERE cpf_cliente=($2) and id_produto=($3)", [quant,  data.CPF, data.idProduto]);
    //   }
    // });


    function closeConnection(err) {
      if (err) {
        console.log('deu ruim, nada foi adicionado :/');
      } else {
        if(data.item.length !== onCart.length){
          console.log('todos o');
        }
      }
      return;
    }

    function insertCollection(collection, callback) {
      console.log('collection is: ', collection);
      console.log('callback is: ', callback);
      var coll = collection.slice(0); // clone collection
      (function insertOne() {
        var record = coll.splice(0, 1)[0]; // get the first record of coll and reduce coll by one
        var query = client.query(record);
        console.log('the record: ', record);
        query.on('error', function(err) {
          console.log(err);
          callback(err);
        });
        query.on('row', function(row) {
          console.log('Jah tem ele no carrinho!');
          onCart.push(row);
        });
        query.on('end', function() {
          console.log('Foi pego essa promocao: ', record);
          if (coll.length == 0) {
            console.log('há no carrinho os seguintes items paradas: ', onCart);
            callback();
          } else {
            setTimeout(insertOne, 0);
          }
        });
      })();
    }

  });
}

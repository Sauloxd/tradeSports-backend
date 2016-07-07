var path = require('path');
var pg = require('pg');
var jwt    = require('jsonwebtoken');
var config = require(path.join(__dirname, '../', '../', 'config'))

var auth = {};

auth.authenticate = function(req, res) {
  console.log('Auth was called!');

  var results = [];
  // Grab data from http request
  var credential = {
    login: req.body.login,
    senha: req.body.senha
  };

  console.log('this are the creds', credential);
  pg.connect(config.connectionString, function(err, client, done) {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({ success: false, data: err});
    }

    var query = client.query("SELECT login, senha FROM Administrador WHERE login= \'" + credential.login + "\' and senha=\'" + credential.senha + "\';");

    query.on('row', function(row) {
        results.push(row);
    });

    query.on('end', function() {
      done();
      if(!results.length) {
        return res.status(403).json({ success: false, message: 'Authentication FAILED! :('});
      } else {
        var token = jwt.sign(credential, config.secret, {
          expiresIn : 60*60*24 // 24h
        });

        return res.json({
          success: true,
          message: 'Token Created!',
          token: token
        });
      }
    });

  });

}

auth.middleware = function(req, res, next) {
  var _ = require('underscore')
    , nonSecurePaths = ['/api/auth'];
  console.log('passou pelo api/auth!');
  if ( _.contains(nonSecurePaths, req.path) ) return next();

  console.log('passou pelo middleware!!');
  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  // decode token
  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, config.secret, function(err, decoded) {
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
};

module.exports = auth;

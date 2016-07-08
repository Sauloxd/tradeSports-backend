var path = require('path');
var pg = require('pg');
var jwt    = require('jsonwebtoken');
var config = require(path.join(__dirname, '../', '../', 'config'))

module.exports = function(req, res, next) {
  //TODO: import this nonSecurePaths from somewhere else!
  var _ = require('underscore')
    , nonSecurePaths = ['/api/login'];
  console.log('passou pelo api/login!');
  if ( _.contains(nonSecurePaths, req.path) ) return next();

  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['authorization'];

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

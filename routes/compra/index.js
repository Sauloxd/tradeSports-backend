module.exports = [{
    path: '/compra',
    method: 'get',
    callback: require('./get')
  },
  {
    path: '/compra/:id',
    method: 'get',
    callback: require('./getById')
  },
  {
    path: '/compra/:id/:idCompra',
    method: 'put',
    callback: require('./update')
  },
  {
    path: '/compra/',
    method: 'post',
    callback: require('./post')
  }
];
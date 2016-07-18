module.exports = [{
    path: '/carrinho',
    method: 'get',
    callback: require('./get'),
    isAuth: true
  },
  {
    path: '/carrinho/:cpf',
    method: 'get',
    callback: require('./getById'),
    isAuth: true
  },
  {
    path: '/carrinho/:cpf',
    method: 'delete',
    callback: require('./delete')
  },
  {
    path: '/carrinho/:cpf/:idProduto',
    method: 'put',
    callback: require('./update')
  }
];

module.exports = [{
    path: '/administrador',
    method: 'get',
    callback: require('./get'),
    isAuth: true
  },
  {
    path: '/administrador/:cpf',
    method: 'get',
    callback: require('./getById'),
    isAuth: true
  },
  {
    path: '/administrador',
    method: 'post',
    callback: require('./post'),
    isAuth: true
  },
  {
    path: '/administrador/:cpf',
    method: 'put',
    callback: require('./update'),
    isAuth: true
  },
  {
    path: '/administrador/:cpf',
    method: 'delete',
    callback: require('./delete'),
    isAuth: true
  }
];

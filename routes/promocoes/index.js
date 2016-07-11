module.exports = [{
    path: '/promocao',
    method: 'get',
    callback: require('./get')
  },
  {
    path: '/promocao/:idPromocao',
    method: 'get',
    callback: require('./getById')
  },
  {
    path: '/promocao',
    method: 'post',
    callback: require('./post')
  },
  {
    path: '/promocao/:idPromocao',
    method: 'put',
    callback: require('./update')
  },
  {
    path: '/promocao/:idPromocao',
    method: 'delete',
    callback: require('./delete')
  }
];
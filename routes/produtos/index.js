module.exports = [
  {
    path: '/produto',
    method: 'get',
    callback: require('./get')
  },
  {
    path: '/produto/:idProduto',
    method: 'get',
    callback: require('./getById')
  },
  {
    path: '/produto',
    method: 'post',
    callback: require('./post')
  },
  {
    path: '/produto/:idProduto',
    method: 'put',
    callback: require('./update')
  },
  {
    path: '/produto/:idProduto',
    method: 'delete',
    callback: require('./delete')
  }
];

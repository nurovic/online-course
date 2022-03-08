module.exports = {
    devServer: {
    proxy: 'http://localhost:3000',
      disableHostCheck: true,
      // host: '0.0.0.0',
      // public: '0.0.0.0:80',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'common, X-Requested-With, content-type, Authorization'
      }
    },
    lintOnSave: false
  }
  
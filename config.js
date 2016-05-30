// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')
var env = process.env.NODE_ENV;
var modePath = env && env == 'production' ? '/msiH52016/' : '/'

module.exports = {
  build: {
    main: path.resolve(__dirname, 'dist/main.html'),
    // index: path.resolve(__dirname, 'dist/index.html'),
    assetsRoot: path.resolve(__dirname, 'dist'),
    assetsSubDirectory: 'assets',
    assetsPublicPath: modePath,
    productionSourceMap: false
  },
  dev: {
    port: 8080,
    proxyTable: {}
  }
}

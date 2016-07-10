// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')
module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    env: require('./dev.env'),
    port: 8181,
    proxyTable: {}
  },
  'ACCESS_KEY': 'ghqBV5qXT19D8UOIGDmFw9u8efcMzP-mOnQi1BE5',
  'SECRET_KEY': 'cGGNbQmh7xKuHQPDfibTZWmxKssc_JSDKKwILUXB',
  'Bucket_Name': 'taoxin167',
  'Domain': 'http://7xs43y.com1.z0.glb.clouddn.com/'
}


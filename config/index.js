'use strict'

// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')
let mode = require('./prodProperties')
let mode2 = mode.mode

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/umu-spp/siswa/getdata': {
        target: 'http://localhost:10015',
        changeOrigin: true
      },
      '/umu-spp/siswa/excel/template': {
        target: 'http://localhost:10015',
        changeOrigin: true
      },
      '/umu-spp/siswa/excel/upload': {
        target: 'http://localhost:10015',
        changeOrigin: true
      },
      '/umu-spp/tagihan/getdata': {
        target: 'http://localhost:10015',
        changeOrigin: true
      },
      '/umu-spp/tagihan/excel/template': {
        target: 'http://localhost:10015',
        changeOrigin: true
      },
      '/umu-spp/tagihan/excel/upload': {
        target: 'http://localhost:10015',
        changeOrigin: true
      },
      '/umu-spp/siswa/getSiswa': {
        target: 'http://localhost:10015',
        changeOrigin: true
      },
      '/umu-spp/akademi/getAkademi': {
        target: 'http://localhost:10015',
        changeOrigin: true
      },
      '/umu-spp/tagihan/getAllTagihan': {
        target: 'http://localhost:10015',
        changeOrigin: true
      },
      '/umu-spp/akademi/updateData': {
        target: 'http://localhost:10015',
        changeOrigin: true
      },
      '/umu-spp/user/registration': {
        target: 'http://localhost:10015',
        changeOrigin: true
      },
      '/umu-spp/login/auth': {
        target: 'http://localhost:10015',
        changeOrigin: true
      },
      '/umu-spp/user/pdf': {
        target: 'http://localhost:10015',
        changeOrigin: true
      },
      '/umu-spp/order/listData': {
        target: 'http://localhost:10015',
        changeOrigin: true
      },
      '/umu-spp/order/add': {
        target: 'http://localhost:10015',
        changeOrigin: true
      },
      '/umu-spp/order/view': {
        target: 'http://localhost:10015',
        changeOrigin: true
      },
      '/umu-spp/role/getPermission': {
        target: 'http://localhost:10015',
        changeOrigin: true
      },
      '/umu-spp/user/ubahPassword': {
        target: 'http://localhost:10015',
        changeOrigin: true
      },
      '/umu-spp/order/approval': {
        target: 'http://localhost:10015',
        changeOrigin: true
      },
      '/umu-spp/order/edit': {
        target: 'http://localhost:10015',
        changeOrigin: true
      },
      '/umu-spp/order/getOrderData': {
        target: 'http://localhost:10015',
        changeOrigin: true
      },
      '/umu-spp/order/delete': {
        target: 'http://localhost:10015',
        changeOrigin: true
      }
    },

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../' + mode2 + '/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../' + mode2 + '/'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/' + mode2 + '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}

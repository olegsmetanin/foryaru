var webpack = require('webpack');

module.exports = function(config) {
  config.set({
    browsers: ['IE6 - WinXP'/*, 'IE7 - WinXP', 'IE8 - WinXP', 'IE9 - Win7', 'IE10 - Win7' */],
    singleRun: true,
    frameworks: ['mocha'],
    files: [
      'node_modules/es5-shim/es5-shim.js',
      'node_modules/es5-shim/es5-sham.js',
      'node_modules/json2/lib/JSON2/static/json2.js',
      'node_modules/karma-babel-preprocessor/node_modules/babel-core/browser-polyfill.js',
      'test/test.js', {
        pattern: './public/**/*',
        included: false
      }
    ],

    transports: ['jsonp-polling'],
    reporters: ['spec'],
    preprocessors: {
      'test/test.js': ['webpack', 'sourcemap']
    },
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [{
          test: /\.js?$/,
          loaders: ['babel?experimental'],
          exclude: /node_modules/
        }, ]
      }
    },
    webpackServer: {
      noInfo: true
    }
  });
};
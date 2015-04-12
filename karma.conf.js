var webpack = require('webpack');

module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: ['mocha'],
    files: [
      'test/test.js', {
        pattern: 'public/**/*',
        included: false,
        served: true
      }
    ],
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
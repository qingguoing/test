const path = require('path');

module.exports = {
  target: 'node',
  entry: './lib/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          "presets": [ "env" ],
          "plugins": [ "transform-object-rest-spread" ]
        }
      }
    ]
  }
}
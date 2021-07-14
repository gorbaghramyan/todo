const path = require('path');

module.exports = {
  entry: ['./src/index.js', './test.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].bundle.js',
  },
};
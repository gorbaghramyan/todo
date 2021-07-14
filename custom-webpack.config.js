const path = require('path');

module.exports = {
  entry: ['./src/main.ts', './test.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
  },
};
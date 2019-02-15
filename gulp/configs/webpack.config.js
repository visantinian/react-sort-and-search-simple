const path = require('path');
const webpack = require('webpack-stream').webpack;

module.exports = {
  devtool: 'cheap-module-inline-source-map',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
    }),
    new webpack.ProvidePlugin({
      'Immutable': 'Immutable',
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel-loader'],
      include: path.join(__dirname, '../../js'),
      exclude: /node_modules/
    }]
  }
};

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: './client/src/index.js',

  output: {
    path: './client/dist',
    filename: 'bundle.js'
  },
  devtool: '#source-map',
  devServer: {
    headers: { 'Access-Control-Allow-Origin': '*' },
    inline: true,
    port: 300,
    historyApiFallback: true,
    contentBase: './',
    hot: true
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }, {test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader')},
      {test: /\.woff(\?.*)?$/, loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff'},
      {test: /\.woff2(\?.*)?$/, loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff2'},
      {test: /\.ttf(\?.*)?$/, loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream'},
      {test: /\.eot(\?.*)?$/, loader: 'file-loader?prefix=fonts/&name=[path][name].[ext]'},
      {test: /\.svg(\?.*)?$/, loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml'},
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
    ]
  }
};

module.exports = config;

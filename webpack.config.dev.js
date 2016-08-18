const config = {
  entry: './client/src/index.js',

  output: {
    path: './client/dist',
    filename: 'bundle.js'
  },
  devtool: '#source-map',
  devServer: {
    inline: true,
    port: 300,
    historyApiFallback: true
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  }
};

module.exports = config;

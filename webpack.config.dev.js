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
      }
    ]
  }
};

module.exports = config;

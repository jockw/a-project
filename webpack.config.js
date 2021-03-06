const path = require('path');

module.exports = {
  entry: './src/entry',
  resolve: {
    extensions: ['', '.js', '.vue'],
  },
  output: {
    path: path.join(__dirname, 'assets'),
    filename: 'app.bundle.js',
  },
  externals: {
    jquery: '$',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.vue$/,
        loader: 'vue',
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css?module&localIdentName=[path][name]__[hash:base64:5]'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|svg|ttf|woff)$/,
        loaders: ['file-loader'],
      },

    ],
  },
};
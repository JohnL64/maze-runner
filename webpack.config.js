const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: ['./client/index.js', './client/styles.scss'],
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/build/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /(node_modules)/,
        use: [
          // Creates 'style' nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader',
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html',
    }),
  ],
  resolve: {
    // Enable importing JS / JSX files without specifying their extension
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    publicPath: '/build',
    contentBase: path.join(__dirname, 'client'),
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false,
      },
    },
    port: 8080,
    host: '0.0.0.0',
    hot: true,
    historyApiFallback: {
      index: '/client/index.html',
    },
  },
};

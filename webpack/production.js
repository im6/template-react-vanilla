
const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: "production",
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: [
    './src/index.js'
  ],
  module:{
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[hash:base64:5]',
              },
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            "presets": ['@babel/preset-env', '@babel/preset-react'],
          }
        }]
      },
    ],
  },
  output: {
    publicPath: '/',
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.js',
    libraryTarget: 'umd',
  },
  plugins: []
};
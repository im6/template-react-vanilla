"use strict";
const webpack = require('webpack');
const path = require('path');

module.exports = {
  watch: true,
  mode: "development",
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: [
    './src/index.jsx',
    'webpack/hot/only-dev-server',
    'webpack-dev-server/client?http://localhost:3000',
  ],
  module:{
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            }
          }
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
    path: path.join(__dirname, '../public'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      }
    }),
  ],
  devServer: {
    contentBase: "./public",  // set "public" path, relative to root
    noInfo: true,
    hot: true,
    inline: true,
    port: "3000",
    host: "localhost",
  }
};
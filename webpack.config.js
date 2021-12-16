const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';
console.log(`Develop: ${devMode}`);
const plugins = () => {
  const result = [
    new HtmlWebpackPlugin({ template: path.join(__dirname, 'src', 'index.html'), }),
  ];
  if (!devMode) {
    result.push(new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[contenthash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[contenthash].css',
    }));
  }
  return result;
};

const cssLoader = (extra) => {
  const firstLoader = devMode ? 'style-loader' : MiniCssExtractPlugin.loader;
  const cssloaders = [firstLoader, 'css-loader'];
  for (const loader of extra) {
    cssloaders.push(loader);
  }
  return cssloaders;
};

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].bundle.js',
    clean: true,
    asyncChunks: true,
    chunkFilename: '[id].js'
  },

  resolve: { extensions: ['.tsx', '.ts', '.js'], },

  devServer: {
    hot: true,
    port: 9000,
    static: './dist'
  },
  devtool: 'inline-source-map',
  plugins: plugins(),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.(css|scss)$/,
        use: cssLoader(['sass-loader']),
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        type: 'asset/resource'
      },
    ],
  },

  optimization: {
    runtimeChunk: 'single',
    splitChunks: { chunks: 'all' }
  }
};

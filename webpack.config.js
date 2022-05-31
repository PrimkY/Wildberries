const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const devServer = (isDev) => !isDev ? {} : {
  devServer: {
    open: true,
    port: 8080,
    contentBase: path.join(__dirname, 'public'),
  },
};

const esLintPlugin = (isDev) => isDev ? [] : [ new ESLintPlugin({ extensions: ['ts', 'js'] }) ];

module.exports = ({ development }) => ({
  mode: development ? 'development' : 'production',
  devtool: development ? 'inline-source-map' : false,
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.[tj]s$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ],
  },
  plugins: [
    ...esLintPlugin(development),
    new MiniCssExtractPlugin({ filename: '[name].css' }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      filename: './assets/htmls/basket.html',
      template: 'src/assets/htmls/basket.html',
      chunks: ['exampleEntry']
    }),
    new HtmlWebpackPlugin({
      filename: './assets/htmls/accessories.html',
      template: 'src/assets/htmls/accessories.html',
      chunks: ['exampleEntry']
    }),
    new HtmlWebpackPlugin({
      filename: './assets/htmls/books.html',
      template: 'src/assets/htmls/books.html',
      chunks: ['exampleEntry']
    }),
    new HtmlWebpackPlugin({
      filename: './assets/htmls/sport.html',
      template: 'src/assets/htmls/sport.html',
      chunks: ['exampleEntry']
    }),
    new HtmlWebpackPlugin({
      filename: './assets/htmls/toys.html',
      template: 'src/assets/htmls/toys.html',
      chunks: ['exampleEntry']
    }),
    new HtmlWebpackPlugin({
      filename: './assets/htmls/shoes.html',
      template: 'src/assets/htmls/shoes.html',
      chunks: ['exampleEntry']
    }),
    new CopyPlugin({
      patterns: [{
        from: 'public',
        noErrorOnMissing: true,
      }],
    }),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
  ],
  resolve: {
    extensions: ['.ts', '.js'],
  },
  ...devServer(development)
});

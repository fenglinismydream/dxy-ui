const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const AutoDllPlugin = require('autodll-webpack-plugin')
const MiNiCssExtractPlugin = require('mini-css-extract-plugin')
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
module.exports = {
  entry: {
    bundle: path.resolve(__dirname, '../example/index.js')
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/', // 路径错误 会导致构建失败(第一个坑)
    filename: '[name].[hash].js'
  },
  resolve: {
    extensions: ['.js', '.json', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('example'),
      '$pkg': resolve('packages')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node-modules/
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          process.env.NODE_ENV !== 'production'
            ? 'vue-style-loader'
            : MiNiCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.less$/,
        use: [
          process.env.NODE_ENV !== 'production'
            ? 'vue-style-loader'
            : MiNiCssExtractPlugin.loader, 'css-loader', 'less-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html')
    }),
    new AutoDllPlugin({
      inject: true, // 自动注入到index.html
      debug: true,
      filename: '[name]_[hash].js',
      path: './dll',
      entry: {
        vendor: ['vue']
      }
    }),
    new MiNiCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new VueLoaderPlugin(),
    new webpack.optimize.SplitChunksPlugin() // 使用默认提取配置来提取公共代码
  ]
}
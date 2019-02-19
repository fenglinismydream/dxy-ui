const merge = require('webpack-merge');
const path = require('path');
const baseConfig = require('./webpack.base.conf');
module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map', // cheap-module-eval-source-map is faster for development
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    open: true,
    overlay: true, // 全屏显示编译错误和警告
    historyApiFallback: true, //路由类型history 需要设置为true
  }
});

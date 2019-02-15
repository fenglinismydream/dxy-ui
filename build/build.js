process.env.NODE_ENV = 'production'

const ora = require('ora')
const chalk = require('chalk')
const webpack = require('webpack')
const prodConfig = require('./webpack.prod.conf')

const spinner = ora('building for production...')
spinner.start()

webpack(prodConfig, (err, stats) => {
  spinner.stop()
  if (err || stats.hasErrors()) {
    // 在这里处理错误
    console.log(error(err))
    return
  }

  // 处理完成
  console.log(stats.toString({
    colors: true, // 在控制台展示颜色
    chunks: false, // 使构建过程更静默无输出
    modules: false, // 添加构建模块信息
    children: false, // 添加children信息
    chunkModules: false // 将构建模块信息添加到chunk信息
  }))
  // console.log(chalk.cyan('  Build complete.\n'))
  // console.log(chalk.yellow(
  //   '  Tip: built files are meant to be served over an HTTP server.\n' +
  //   '  Opening index.html over file:// won\'t work.\n'
  // ))
})
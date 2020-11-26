// webpack 开发环境

// 引入 webpack-merge 用来合并多个 webpack 配置文件
const { merge } = require('webpack-merge')
// 导入 公共webpack 配置
const common = require('./webpack.common.js')
// 引入 开发服务器配置变量
const { SERVER_HOST, SERVER_PORT } = require('../constant')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map', // 开启source-map,映射编译后的代码与源代码之间位置
  // 配置开发服务器
  devServer: {
    host: SERVER_HOST, // 指定 host，不设置的话默认是 localhost
    port: SERVER_PORT, // 指定端口，默认是8080
    stats: 'errors-only', // 终端仅打印 error
    clientLogLevel: 'silent', // 日志等级
    compress: true, // 是否启用 gzip 压缩
    open: true, // 打开默认浏览器
    hot: true, // 热更新
  },
})

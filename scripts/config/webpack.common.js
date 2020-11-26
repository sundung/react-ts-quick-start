const { resolve } = require('path')
// 引入根目录
const { PROJECT_PATH } = require('../constant')

module.exports = {
  // 入口
  entry: {
    app: resolve(PROJECT_PATH, './src/app.js'),
  },
  // 出口
  output: {
    filename: 'js/[name].[hash:8].js', // 取 8位hash值
    path: resolve(PROJECT_PATH, './dist'),
  },
}

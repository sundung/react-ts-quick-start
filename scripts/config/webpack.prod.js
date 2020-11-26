// 生产环境
const { merge } = require('webpack-merge')
// 引入 每次打包之前,自动删除 dist文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'none', // 关闭 source-map
  plugins: [new CleanWebpackPlugin()],
})

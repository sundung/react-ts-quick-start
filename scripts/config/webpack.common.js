const { resolve } = require('path')

// 引入 html-webpack-plugin , 在index.html 中自动引入js文件
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 引入根目录
const { PROJECT_PATH, isDev } = require('../constant')

module.exports = {
  // 入口
  entry: {
    app: resolve(PROJECT_PATH, './src/app.js'),
  },
  // 出口
  output: {
    /* 
       // 取 8位hash值
       判断当前环境,如果是开发环境,就不使用 hash值, 如果是生产环境就使用
    */
    filename: `js/[name]${isDev ? '' : '.[hash: 8]'}.js`,
    path: resolve(PROJECT_PATH, './dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(PROJECT_PATH, './public/index.html'),
      filename: 'index.html',
      cache: false, // 特别重要：防止之后使用v6版本 copy-webpack-plugin 时代码修改一刷新页面为空问题。
      minify: isDev
        ? false
        : {
            removeAttributeQuotes: true,
            collapseWhitespace: true,
            removeComments: true,
            collapseBooleanAttributes: true,
            collapseInlineTagWhitespace: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            minifyCSS: true,
            minifyJS: true,
            minifyURLs: true,
            useShortDoctype: true,
          },
    }),
  ],
}

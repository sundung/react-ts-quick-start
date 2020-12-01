/* 
  常量文件
*/
const path = require('path')

// 配置 根目录
const PROJECT_PATH = path.resolve(__dirname, '../')
const PROJECT_NAME = path.parse(PROJECT_PATH).name
// 判断 当前环境是开发环境
const isDev = process.env.NODE_ENV !== 'production'
// 配置本地开发环境
const SERVER_HOST = '127.0.0.1'
const SERVER_PORT = 9000
module.exports = {
  PROJECT_PATH,
  PROJECT_NAME,
  isDev,
  SERVER_HOST,
  SERVER_PORT,
}

/* 
PROJECT_PATH ：表示项目的根目录。
PROJECT_NAME ：表示项目名，目前不用，但之后的配置会用到，我们就先定义好吧～ 
*/

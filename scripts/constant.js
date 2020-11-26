const path = require('path')

const PROJECT_PATH = path.resolve(__dirname, '../')
const PROJECT_NAME = path.parse(PROJECT_PATH).name

module.exports = {
  PROJECT_PATH,
  PROJECT_NAME,
}

/* PROJECT_PATH ：表示项目的根目录。
PROJECT_NAME ：表示项目名，目前不用，但之后的配置会用到，我们就先定义好吧～ */

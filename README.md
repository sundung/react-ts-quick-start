# react-ts-quick-start

react + typescript

### 创建 .npmrc 设置淘宝源

### 创建 .editorconfig 编辑器代码风格文件

.editorconfig 是跨编辑器维护一致编码风格的配置文件，有的编辑器会默认集成读取该配置文件的功能，但是 vscode 需要安装相应的扩展 EditorConfig For vs Code

### Prettier 就是帮你统一项目风格的

touch .prettierrc 创建 .prettierrc 文件

先安装扩展 Prettier - Code formatter

当安装结束后， 在项目根目录新建一个文件夹 .vscode ，在此文件下再建一个 settings.json 文件

该文件的配置优先于 vscode 全局的 settings.json ，这样别人下载了你的项目进行开发，也不会因为全局 setting.json 的配置不同而导致 Prettier 或之后会说到的 ESLint 、 StyleLint 失效

### ESLint

在上面我们配置了 EditorConfig 和 Prettier 都是为了解决代码风格问题，而 ESLint 是主要为了解决代码质量问题

首先在项目中安装 eslint ：

> npm install eslint -D

安装成功后，执行以下命令

> npx eslint --init

选择完自定义配置后 连接(https://juejin.cn/post/6860129883398668296#heading-11)

项目根目录下多出了新的文件 .eslintrc.js ，这便是我们的 eslint 配置文件了

### 配置 style css 样式规则

安装两个包 npm install stylelint stylelint-config-standard -D

创建 文件 .stylelintrc.js

### ESLint、Stylelint 和 Prettier 的冲突

安装插件 eslint-config-prettier ，这个插件会禁用所有和 prettier 起冲突的规则：

> npm install eslint-config-prettier -D

stylelint 的冲突解决也是一样的，先安装插件 stylelint-config-prettier

> npm install stylelint-config-prettier -D

### commitlint + changelog

首先安装 commitlint 相关依赖：

> npm install @commitlint/cli @commitlint/config-conventional -D

随后在根目录新建文件 .commitlintrc.js ，这就是我们的 commitlint 配置文件

### Webpack 基本配置

想要使用 webpack，这两个包你不得不装：

> npm install webpack webpack-cli -D

创建 webpack 公共文件 webpack.common.js

在 根目录下创建 scripts 文件,其下边创建 config 文件夹 创建 webpack.common.js 文件

配置 打包命令

> "build": "webpack --config ./scripts/config/webpack.common.js",

配置 专门用于存放我们的公用变量 在 scripts 下新建一个 constant.js 文件

安装 webpack-merge 生产和开发 公共配置

npm install webpack-merge -D

cross-env 可跨平台设置和使用环境变量，不同操作系统设置环境变量的方式不一定相同

> npm install cross-env -D

本地服务实时查看页面

html-webpack-plugin ：

    每一个页面是一定要有 html  文件的，而这个插件能帮助我们将打包后的 js 文件自动引进 html  文件中，毕竟你不可能每次更改代码后都手动去引入 js 文件。

webpack-dev-server ：

    可以在本地起一个 http 服务，通过简单的配置还可指定其端口、热更新的开启等。

打包编译前清理 dist 目录

借助 clean-webpack-plugin 可以实现每次打包前先处理掉之前的 dist 目录，以保证每次打出的都是当前最新的，我们先安装它：

> npm install clean-webpack-plugin -D

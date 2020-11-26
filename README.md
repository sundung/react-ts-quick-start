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

样式文件处理

CSS 样式文件处理

处理 .css 文件我们需要安装 style-loader 和 css-loader ：

> npm install style-loader css-loader -D

注意:

```
遇到后缀为 .css 的文件，webpack 先用 css-loader 加载器去解析这个文件，遇到 @import 等语句就将相应样式文件引入（所以如果没有 css-loader ，就没法解析这类语句），计算后生成css字符串，接下来 style-loader 处理此字符串生成一个内容为最终解析完的 css 代码的 style 标签，放到 head 标签里。


loader 是有顺序的，webpack 肯定是先将所有 css 模块依赖解析完得到计算结果再创建 style 标签。因此应该把 style-loader 放在 css-loader 的前面（webpack loader 的执行顺序是从右到左，即从后往前）。


```

LESS 样式文件处理

处理 .less 文件我们需要安装 less 和 less-loader

> npm install less less-loader -D

```
  遇到后缀为 .less 文件， less-loader 会将你写的 less 语法转换为 css 语法，并转为 .css 文件。
less-loader 依赖于 less ，所以必须都安装。

```

SASS 样式文件处理

处理 .scss 文件我们需要安装 node-sass 和 sass-loader

> npm install node-sass sass-loader -D

```
    遇到 .scss 后缀的文件， sass-loader 会将你写的 sass 语法转为 css 语法，并转为 .css 文件。
    同样地， sass-loader 依赖于 node-sass ，所以两个都需要安装。（ node-sass 我不用代理就没有正常安装上过，还好我们一开始就在配置文件里设了淘宝镜像源）

```

PostCSS 处理浏览器兼容问题

postcss 一种对 css 编译的工具，类似 babel 对 js 一样通过各种插件对 css 进行处理，在这里我们主要使用以下插件：

```
postcss-flexbugs-fixes ：用于修复一些和 flex 布局相关的 bug。
postcss-preset-env ：将最新的 CSS 语法转换为目标环境的浏览器能够理解的 CSS 语法，目的是使开发者不用考虑浏览器兼容问题。我们使用 autoprefixer 来自动添加浏览器头。
postcss-normalize ：从 browserslist 中自动导入所需要的 normalize.css 内容。


```

> npm install postcss-loader postcss-flexbugs-fixes postcss-preset-env autoprefixer postcss-normalize -D

图片和字体文件处理

```
      我们可以使用 file-loader 或者 url-loader 来处理本地资源文件，比如图片、字体文件，而 url-loader 具有 file-loader 所有的功能，还能在图片大小限制范围内打包成 base64 图片插入到 js 文件中，这样做的好处是什么呢？别急，我们先安装所需要的包（后者依赖前者，所以都要安装

      [name].[contenthash:8].[ext] 表示输出的文件名为 原来的文件名.哈希值.后缀 ，有了这个 hash 值，可防止图片更换后导致的缓存问题。

      outputPath 是输出到 dist 目录下的路径，即图片目录 dist/assets/images 以及字体相关目录 dist/assets/fonts 下。
      limit 表示如果你这个图片文件大于 10240b ，即 10kb ，那我 url-loader 就不用，转而去使用 file-loader ，把图片正常打包成一个单独的图片文件到设置的目录下，若是小于了 10kb ，就将图片打包成 base64 的图片格式插入到打包之后的文件中，这样做的好处是，减少了 http 请求，但是如果文件过大，js文件也会过大，得不偿失，这是为什么有 limit 的原因！

```

> npm install file-loader url-loader -D

jsx 解析

babel-loader 使用 babel 解析文件；@babel/core 是 babel 的核心模块；@babel/preset-react 转译 jsx 语法。

> npm install babel-loader @babel/core @babel/preset-react -D

创建文件 .babelrc

```
{
  "presets": ["@babel/preset-react"]
}

```

然后再在,webpack.common.js 文件中 配置 babel loader

更多 babel 配置

原因:

```
    之前我们已经使用 babel 去解析 react 语法和 typescript 语法了，但是目前我们所做的也仅仅如此，你在代码中用到的 ES6+ 语法编译之后依然全部保留，然而不是所有浏览器都能支持 ES6+ 语法的，这时候就需要@babel/preset-env 来做这个苦力活了，它会根据设置的目标浏览器环境（browserslist）找出所需的插件去转译 ES6+ 语法。比如 const 或 let 转译为 var 。
但是遇到 Promise 或 .includes 这种新的 es 特性，是没办法转译到 es5 的，除非我们把这中新的语言特性的实现注入到打包后的文件中，不就行了吗？我们借助 @babel/plugin-transform-runtime 这个插件，它和 @babel/preset-env 一样都能提供 ES 新API 的垫片，都可实现按需加载，但前者不会污染原型链。
另外，babel 在编译每一个模块的时候在需要的时候会插入一些辅助函数例如 _extend ，每一个需要的模块都会生成这个辅助函数，显而易见这会增加代码的冗余，@babel/plugin-transform-runtime 这个插件会将所有的辅助函数都从 @babel/runtime-corejs3 导入（我们下面使用 corejs3），从而减少冗余性。

```

> npm install @babel/preset-env @babel/plugin-transform-runtime -D
> npm install @babel/runtime-corejs3 -S

注意： @babel/runtime-corejs3 的安装为生产依赖。

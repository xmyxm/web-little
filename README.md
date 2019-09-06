# web-little
webpack + babel + react + jest + eslint 脚手架

未完，开发中

### 笔记
```text
1. TypeScript 可以像 Babel 那样输出 ES5 了, 使用 ts-loader 即可

2. Babel + TypeScript 的组合套餐依旧会提供更快的编译，这要归功于 Babel 的优秀的缓存和单文件散发架构

3. 使用babel7并且使用@babel/preset-typescript代替ts-loader。一方面，babel7拥有着更快的速度，另一方面，ts-loader默认是会读取ts-config的，于是每次构建的时候ts-loader都会去检查全有业务的类型

4. babel7新增了babel.config.js型的配置，对比.babelrc。.babelrc是从每一个文件向上查找配置的，babel.config.js则不会
 babel.config.js 是以编程的方式创建配置文件，类似一个js模块，非常灵活
 .babelrc 针对只是需要一个简单的并且只用于单个软件包的配置
 全部babel配置说明文档： https://www.babeljs.cn/docs/configuration#babelconfigjs


5. webpack 4 里面使用了 terser-webpack-plugin 插件替代了之前一直使用的 uglifyjs-webpack-plugin 作为它的内置插件，以 4.39.3 这个版本为例，可以看到它的 package.json 文件的依赖包括了terser-webpack-plugin，webpack 4默认支持 ES6 代码的压缩，若使用UglifyJs 压缩ES6代码会抛出错误。经查阅提交历史发现webpack4在 4.26.0 的版本中完成了对uglifyjs-webpack-plugin的替换
```



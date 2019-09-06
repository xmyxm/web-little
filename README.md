# web-little
webpack + babel + react + jest + eslint 脚手架

未完，开发中

### 脚手架具备能力
```text
1. 支持本地开发调试和线上打包配置
2. 支持favicon
3. 自动合并雪碧图icons
4. 支持线上打包图片压缩
```


### 笔记
```text
1. TypeScript 可以像 Babel 那样输出 ES5 了, 使用 ts-loader 即可，ts-loader虽然可以直接打包成es5语法，但不会做polyfill，况且如果项目依赖babel生态中的其他插件，也需要使用babel-loader

2. Babel + TypeScript 的组合套餐依旧会提供更快的编译，这要归功于 Babel 的优秀的缓存和单文件散发架构

3. 使用babel7并且使用@babel/preset-typescript代替ts-loader。一方面，babel7拥有着更快的速度，另一方面，ts-loader默认是会读取ts-config的，于是每次构建的时候ts-loader都会去检查全有业务的类型

4. babel7新增了babel.config.js型的配置，对比.babelrc。.babelrc是从每一个文件向上查找配置的，babel.config.js则不会
 babel.config.js 是以编程的方式创建配置文件，类似一个js模块，非常灵活
 .babelrc 针对只是需要一个简单的并且只用于单个软件包的配置
 全部babel配置说明文档： https://www.babeljs.cn/docs/configuration#babelconfigjs


5. webpack 4 里面使用了 terser-webpack-plugin 插件替代了之前一直使用的 uglifyjs-webpack-plugin 作为它的内置插件，以 4.39.3 这个版本为例，可以看到它的 package.json 文件的依赖包括了terser-webpack-plugin，webpack 4默认支持 ES6 代码的压缩，若使用UglifyJs 压缩ES6代码会抛出错误。经查阅提交历史发现webpack4在 4.26.0 的版本中完成了对uglifyjs-webpack-plugin的替换

6. awesome-typescript-loader 对比 ts-loader 对比 @babel/preset-typescript
在Bable7之前，我们编译ts,tsx文件需要借助Webpack中的类似ts-loader，awesome-typescript-loader来完成。Bable7推出了@babel/preset-typescript的预设，来完成ts,tsx文件的编译。

7. 当从 npm 安装第三方库时，一定要牢记同时安装这个库的类型声明文件。你可以从 TypeSearch[http://microsoft.github.io/TypeSearch/] 中找到并安装这些第三方库的类型声明文件。举个例子，如果想安装 lodash 这个库的类型声明文件，我们可以运行命令：npm install --save-dev @types/lodash

8. 关于在 TypeScript 项目中使用 ESLint 还是 TSLint 做代码检查， 因为 TSLint 官方转投 ESLint (TSLint规则运行方式存在一些架构问题影响了性能。修复TSLint以更有效地运行将需要不同的API，这将破坏现有规则 https://eslint.org/blog/2019/01/future-typescript-eslint )，所以 TSLint 已停止维护。


```

{
    test: /\.tsx?$/,
    loader: 'babel-loader',
    options: {
        presets: ['@babel/preset-typescript'],
        plugins: [
            ['@babel/plugin-transform-typescript', { allowNamespaces: true }],
        ]
    },
},
{
    test: /\.jsx?$/,
    loader: 'babel-loader',
},

{
    test: /\.ts$/,
    use: ["babel-loader", "ts-loader"],
    exclude: [path.resolve(__dirname, "node_modules")]
}





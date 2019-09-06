module.exports = function (api) {
    api.cache(true);

    const presets = [
        [
            "@babel/preset-env",
            {
                "modules": false, // "amd" | "umd" | "systemjs" | "commonjs" | "cjs" | false, defaults to "commonjs". 转换 es6 模块语法到其他 模块规范， false不会转换
                "useBuiltIns": "usage", // false 只做了语法转换， entry 引入了所有的es扩展包，不管用不用得着一股脑都打包进来，只有 usage 会自动检测代码中用到的功能自动引入模块（注：babel默认不会检测第三方依赖包代码，所以使用 usage 时，可能会出现引入第三方的代码包未注入模块而引发bug）
                "loose": false, // 默认值 false， Babel 默认使用 strict 模式；
                "debug": true, //  默认值 false， 调试模式，会打印转换时的一些信息；
                "include": [], // 如果你 使用了某个新特性（如es6.array.from），无论browserslist 如何你都想 转化它， 则 include: ['es6.array.from']
                "exclude": [],
                "corejs": 3 // 针对Babel > 7.4.0, 官方不再推荐使用@babel/polyfill，请选择core-js，根据安装core-js版本在corejs选项填写数字2或3，其实polyfill本身就是stable版本的core-js和regenerator-runtime的合集，所以在针对Babel >= 7.4.0 的情况，我们需要安装 core-js 替代 babel-polyfill,而 regenerator-runtime 会在我们安装 @babel/runtime 时自动安装，所以不必单独安装了
            }
        ],
        "@babel/preset-react"
    ]
    const plugins = [
        [
            "@babel/plugin-proposal-class-properties"
        ],
        [
            "@babel/plugin-transform-runtime",
            {
                //"corejs": 3, // 来决定来决定是否使用 babel/runtime-corejs，以及其对应版本。2和3版本的区别在于出现在 Babel 7.4.0 之后，你可以选择引入 @babel/runtime-corejs3，设置 corejs: 3 来帮助您实现对实例方法(Object.assign, Array.from)的支持, 2的版本默认支持 Promise, Set, Symbol，默认false,
                "regenerator": true, // 默认true, 默认情况下回根据 browserslist 来确认是否转化 generator 函数 或 async 函数，如果 @babel/preset-env -> ignoreBrowserslistConfig = true 则都转换 generator 和 async 语法。
                "helpers": true, // 默认true, 是否将内联的 babel helpers 代码抽离到单独的 module 文件，避免内联的 helper 代码在多个文件重复出现。
                "useESModules": true // 使用 es modules helpers, 减少 commonJS 语法代码
            }
        ]
    ]


    return {
        presets,
        plugins
    };
}


const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const packageFilePath = path.join(__dirname, '../dist');

module.exports = {
    entry: {
        index: ['./src/page/index.tsx']
    },
    output: {
        path: packageFilePath,
        filename: 'js/[name].js'
    },
    cache: true,
    devtool: "source-map",
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: "commons",
                    chunks: "initial",
                    minChunks: 2
                }
            }
        },
        runtimeChunk: {
            // manifest文件用来引导所有模块的交互。manifest文件包含了加载和处理模块的逻辑。
            // 当webpack编译器处理和映射应用代码时，它把模块的详细的信息都记录到了manifest文件中。当模块被打包并运输到浏览器上时，
            name: 'manifest'
        }
    },
    module: {
        rules: [
            {
                test: /\.(es6|jsx|js|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        babelrc: true,// 默认配置使用 .babelrc 文件
                        cacheDirectory: true // 指定的目录将用来缓存 loader 的执行结果。之后的 webpack 构建，将会尝试读取缓存
                    }
                }
            },
            { //html模板加载器，可以处理引用的静态资源，默认配置参数attrs=img:src，处理图片的src引用的资源
                test: /\.html$/,
                loader: "html-loader",
                options: {
                    attrs: ['img:src', 'link:href']
                }
            },
            {
                test: /\.woff|ttf|woff2|eot$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1000
                        }
                    }
                ]
            }]
    },
    plugins: [
        new webpack.BannerPlugin('点评平台研发中心-基础脚手架测试'),
        new HtmlWebpackPlugin({
            template: './src/html/index.html'
            , filename: 'index.html'//可以使用hash命名
            , title: 'index'
            , inject: 'body'//脚本包含到body 也可以写到head里面
            , chunks: ['manifest', 'commons', 'index']//指定当前模板需要打入哪些js模块
            , minify: {//启用代码代码压缩
                removeComments: false,//移除注释
                collapseWhitespace: false//移除空格
            }
        })
    ]
}


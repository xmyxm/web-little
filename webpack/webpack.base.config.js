const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BuildDonePlugin = require('./plugins/builddone')
const packageFilePath = path.join(__dirname, '../dist');

module.exports = {
  entry: {
    index: ['./src/page/index.tsx'],
  },
  output: {
    path: packageFilePath,
    filename: 'js/[name].js',
  },
  cache: true,
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 2,
        },
      },
    },
    runtimeChunk: {
      // manifest文件用来引导所有模块的交互。manifest文件包含了加载和处理模块的逻辑。
      // 当webpack编译器处理和映射应用代码时，它把模块的详细的信息都记录到了manifest文件中。当模块被打包并运输到浏览器上时，
      name: 'manifest',
    },
  },
  module: {
    rules: [
      {
        test: /\.(es6|jsx|js|ts|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader'],
      },
      { // html模板加载器，可以处理引用的静态资源，默认配置参数attrs=img:src，处理图片的src引用的资源
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          attrs: ['img:src', 'link:href'],
        },
      },
      {
        test: /\.woff|ttf|woff2|eot$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1000,
            },
          },
        ],
      }],
  },
  resolve: {
    extensions: ['.ts', '.jsx', '.tsx', '.js'],
    // 别名设置,主要是为了配和webpack.ProvidePlugin设置全局插件;
    alias: {
      // 绝对路径;特别注意这里定义的路径和依赖的包名不能重名
      '@component': path.resolve(__dirname, '../src/component'),
    },
  },
  plugins: [
    // new BuildDonePlugin(),
    new webpack.BannerPlugin('@web-little'),
    new HtmlWebpackPlugin({
      template: './src/html/index.html',
      filename: 'index.html', // 可以使用hash命名
      title: 'index',
      inject: 'body', // 脚本包含到body 也可以写到head里面
      chunks: ['manifest', 'commons', 'index'], // 指定当前模板需要打入哪些js模块
      minify: { // 启用代码代码压缩
        removeComments: false, // 移除注释
        collapseWhitespace: false, // 移除空格
      },
    }),
  ],
};

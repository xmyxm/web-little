### 一、git教程 
```
    实现项目构建时图片的最优图片压缩方案
```

### 二、Demo体验
我们选择常用的webpack插件来完成构建压缩：

[点击查看Github完整Demo](https://github.com/xmyxm/webpack-imgmin.git)

1、安装与启动
```bash
    yarn install
    yarn start
```
2、打包构建
```bash
    yarn build:loader // 采用 image-webpack-loader 方案来打包
    yarn build:plugin // 采用 imagemin-webpack-plugin 方案来打包
```
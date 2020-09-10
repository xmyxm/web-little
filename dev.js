const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const open = require('open');
const portIsOccupied = require('./util/portIsOccupied');
const config = require('./webpack/webpack.beta.config');

const { port } = config.devServer;
const { host } = config.devServer;

// 在热加载时直接返回更新文件名，而不是文件的id。
config.plugins.push(new webpack.NamedModulesPlugin());
// 开发环境热更新配置
config.plugins.push(new webpack.HotModuleReplacementPlugin());
const compiler = webpack(config);
const server = new WebpackDevServer(compiler, config.devServer);

portIsOccupied(port).then((newPort) => {
  server.listen(newPort, host, (err) => {
    if (err) {
      console.log(`启动出错：${err}`);
    }
    // c.exec(`start http://localhost:${newPort}`)
    open(`http://${host}:${port}/bookmark.html`);
  });
});

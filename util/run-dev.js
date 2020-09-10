const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const open = require('open');
const portIsOccupied = require('./portIsOccupied');
const config = require('../webpack/webpack.beta.config');

// 启动函数
function run() {
  const argv = process.argv;
  let serverHost = 4000;
  if (argv.length === 3 && argv[2] === 'dev-server') {
    const { port, host } = config.devServer;
    // 增加代理配置
    Object.assign(config.devServer, {
      publicPath: config.output.publicPath,
      proxy: {
          '/api/*': {
              target: `http://${host}:${serverHost}`
          }
      },
    })
    const compiler = webpack(config);
    const server = new WebpackDevServer(compiler, config.devServer);
    portIsOccupied(port).then((newPort) => {
      server.listen(newPort, host, (err) => {
        serverHost = host;
        if (err) {
          console.error(`启动出错：${err}`);
        }
        open(`http://${host}:${port}/index.html`);
      });
    });
  } else {
    serverHost = 80;
  }
  return serverHost;
}

module.exports = run;
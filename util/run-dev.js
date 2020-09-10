const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const open = require('open');
const portIsOccupied = require('./portIsOccupied');
const config = require('../webpack/webpack.beta.config');
const print = require('./print-log');
const execSync = require('child_process').execSync
const getTime = require('./util');

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
    print.info(`${getTime()} 开始打包`);
    execSync('npm run build')
    print.info(`${getTime()} 打包完成`);
    serverHost = 4000;
  }
  return serverHost;
}

module.exports = run;
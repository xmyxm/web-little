const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const open = require('open');
const portIsOccupied = require('./portIsOccupied');
const config = require('../webpack/webpack.beta.config');
const print = require('./print-log');
const execSync = require('child_process').execSync
const getTime = require('./util');
const { resolve } = require('path');

// 启动函数
async function run() {
  const argv = process.argv;
  let serverPort = 80;
  console.log(argv);
  if (argv.length === 3 && argv[2] === 'dev-server') {
    const { port, host } = config.devServer;
    // 增加代理配置
    Object.assign(config.devServer, {
      publicPath: config.output.publicPath,
      proxy: {
          '/api/*': {
              target: `http://${host}:${serverPort}`
          }
      },
    })
    const compiler = webpack(config);
    const server = new WebpackDevServer(compiler, config.devServer);
    await new Promise(resolve => {
      portIsOccupied(port).then(async (newPort) => {
        server.listen(newPort, host, (err) => {
          if (err) {
            print.err(`${getTime()} 启动出错：${err}`);
          } else {
            serverPort = newPort;
            open(`http://${host}:${port}/index.html`);
          }
          resolve();
        });
      });
    });
  } else {
    print.info(`${getTime()} 开始打包`);
    execSync('npm run build')
    print.info(`${getTime()} 打包完成`);
    serverPort = 80;
  }
  print.info(`${getTime()} 运行端口：${serverPort}`);
  return serverPort;
}

module.exports = run;
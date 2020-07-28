const print = require('../../lib/print-log')
class BuildDonePlugin {
  constructor(options) {
    this.options = { ...options};
  }

  apply(compiler) {
    compiler.hooks.done.tapAsync('BuildDonePlugin', (compilation, callback) => {
      print.info('---- 构建完成 ----');
    });
  }
}

module.exports = BuildDonePlugin;

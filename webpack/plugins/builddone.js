const print = require('../../lib/print-log')
class BuildDonePlugin {
  constructor(options) {
    this.options = { ...options};
  }

  apply(compiler) {
    compiler.hooks.done.tapAsync('CSSTreeShakingPlugin', (compilation, callback) => {
      print.info('---- 编译完成 ----');
    });
  }
}

module.exports = BuildDonePlugin;

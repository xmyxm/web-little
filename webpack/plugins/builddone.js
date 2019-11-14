class BuildDonePlugin {
  constructor(options) {
    this.options = { ...options};
  }

  apply(compiler) {
    compiler.hooks.done.tapAsync('CSSTreeShakingPlugin', (compilation, callback) => {
      console.log('编译完成：', arguments);
    });
  }
}

module.exports = BuildDonePlugin;

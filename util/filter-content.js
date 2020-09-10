const fs = require('fs');
const getTime = require('./util');
const print = require('./print-log');

// 文章读取服务
function content(ctx, next) {
  const filePath = `src/blog/${ctx.params.name}.md`;
  let markdownText = '';
  if (fs.existsSync(filePath)) {
    print.info(`${getTime()} 文件读取`);
    markdownText = fs.readFileSync(filePath, 'utf-8');
  } else {
    print.warn(`${getTime()} 文件不存在`);
  }
  ctx.body = markdownText;
}

module.exports = content;

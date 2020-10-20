const serve = require('koa-static');
const path = require('path');

// 静态资源服务
module.exports = serve(path.resolve(__dirname , '../dist/'), {
  gzip: true,
	maxage: 3000,
})
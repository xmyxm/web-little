const serve = require('koa-static');
// 静态资源服务
module.exports = serve(__dirname + '/dist/', {
  gzip: true,
	maxage: 3000,
})
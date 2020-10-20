const Koa = require('koa');
const Router = require('koa-router');
const content = require('./util/filter-content');
const redirect = require('./util/filter-redirect');
const static = require('./util/filter-static');
const runDev = require('./util/run-dev');

const app = new Koa();
const router = new Router();

// 静态资源服务器
app.use(static);
// 文章内容解析服务
router.get('api', '/api/blog/:name', content);
// 启动路由
app.use(router.routes())
// 重定向路由
app.use(redirect)
// 调试启动
runDev().then(serverPort => { 
  // 启动监听端口
  app.listen(serverPort);
})

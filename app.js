const fs = require('fs');
const Koa = require('koa');
const serve = require('koa-static');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
 
// or use absolute paths
app.use(serve(__dirname + '/dist/', {
	maxage: 3000,
}));
 
router.get('api', '/api/blog/:name', (ctx, next) => {
  const filePath = `src/blog/${ctx.params.name}.md`;
  let markdownText = '';
  if (fs.existsSync(filePath)) {
    console.log('文件读取');
    markdownText = fs.readFileSync(filePath,'utf-8');
  } else {
    console.log('文件不存在');
  }
  ctx.body = markdownText;
});

router.get('/404', ctx => {
  ctx.body = '<h1>404...</h1>'
});

app.use(router.routes())  // 启动路由

app.listen(3000);

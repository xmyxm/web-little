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

app.use(router.routes())  // 启动路由

app.use(async (ctx, next)=>{
  try {
      // 执行后代的代码
      await next();
    if (!ctx.body) {
        // 没有资源
        ctx.status = 302
        ctx.redirect('/bookmark.html');
      }
  }catch(e){
      // 如果后面的代码报错 返回500
      ctx.body = "500"
  }
})

app.listen(3000);

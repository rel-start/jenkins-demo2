const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
  ctx.body = 'hello wolrd'
});

app.listen('1234');

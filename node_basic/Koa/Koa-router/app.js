const koa = require('koa')
const app = new koa()
const router = require('./router/router')

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(8080)

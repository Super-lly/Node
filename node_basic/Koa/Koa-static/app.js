const koa = require('koa')

const app = new koa()

const static = require('koa-static')

app.use(static('./public',{
  index:'index.html'
}))

app.listen(8080)
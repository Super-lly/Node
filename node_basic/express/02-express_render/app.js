const express = require("express")
const router = require('./router/router')
const path = require('path')

const app = express()

// art-template模板
// view engine setup
app.engine('art', require('express-art-template'));
app.set('view options', {
  debug: process.env.NODE_ENV !== 'production',
  escape:false
});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'art');

// 服务端渲染静态资源
app.use(express.static('./public'))

app.use('/', router)

app.listen(8080, () => {
  console.log('localhost:8080');
})
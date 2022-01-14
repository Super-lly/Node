const express = require('express')
// cors
const cors = require('cors')
const router = require('./router/user')
// mysql
const db = require('./db/index')

const app = express()

// 解析req.body获取数据
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});


// 注册全局cors中间件
app.use(cors())
// 解析表单数据中间件，仅仅支持 application/x-www-form-urlencoded 格式
app.use(express.urlencoded({ extended: false }))
// 注册全局路由
app.use('/api',router)


// 服务器端口
app.listen(8080,()=>{
  console.log('api server running at http://127.0.0.1:8080');
})
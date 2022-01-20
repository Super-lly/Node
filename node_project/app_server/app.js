const express = require('express')
// cors
const cors = require('cors')
const userRouter = require('./router/user')
const userInfoRouter = require('./router/userinfo')
const joi = require('joi')
// 导入token key
const config = require('./config')
// 导入token解析模块
const expressJwt = require('express-jwt')

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
// token认证
app.use(expressJwt({ secret: config.jwtKey }).unless({ path: [/^\/api\//] }))

// 注册数据响应中间件
app.use((req, res, next) => {
  res.cc = (err, status = 1) => {
    res.send({
      status,
      message: err instanceof Error ? err.message : err
    })
  }
  next()
})

// 注册全局路由
app.use('/api', userRouter)
app.use('/my', userInfoRouter)

// 错误级别中间件
app.use((err, req, res, next) => {
  if (err instanceof joi.ValidationError) return res.cc(err)
  if (err.name === 'UnauthorizedError') return res.send({
    status:1,
    message:'身份认证失败！'
  })
  res.cc(err)
})


// 服务器端口
app.listen(8080, () => {
  console.log('api server running at http://127.0.0.1:8080');
})
// 引入http模块
const http = require('http')
/*
      req  获取客户端传过来的信息
      res  给浏览器响应信息
*/ 
http.createServer((req,res)=>{
  // 获取url
  console.log(req.url);
  // 状态码：200，文件类型：html，字符集：utf-8
  res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
  // 浏览器将输出的内容
  res.write('app.js by hand 中文')
  // 结束响应
  res.end()
  // 端口号
}).listen(3000)
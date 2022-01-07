const http = require('http');
const routes = require('./module/route.js')
const url = require('url')

http.createServer(function (req, res) {
  // 创建静态web服务器
  const { url } = req
  const { host } = req.headers
  routes.static(req, res,'static')
  let pathname = new URL(url, `http://${host}`).pathname
  if (pathname == '/login') {
    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' })
    res.end('执行登录')
  } else if (pathname == '/register') {
    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' })
    res.end('执行注册')
  } else if (pathname == '/admin') {
    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' })
    res.end('处理后台逻辑业务')
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html;charset=utf-8' })
    res.end('页面不存在')
  }
}).listen(3000);
console.log('Server running at http://127.0.0.1:3000/');
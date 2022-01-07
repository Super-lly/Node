const http = require('http');
const fs = require('fs')
const common = require('./module/commom.js')
const path = require('path')
const url = require('url')

http.createServer(function (req, res) {
  // 获取地址 req.url
  // 通过 url.parse(req.url).pathname 对 json 文件进行解析
  
  let pathname = new URL(req.url, 'http://127.0.0.1:3000').pathname
  // console.log(u1);
  
  pathname = pathname == '/' ? '/index.html' : pathname

  let extname = path.extname(pathname)
  // 使用fs模块读取文件
  if (pathname != '/favicon.ico') {
    fs.readFile('./static' + pathname,async (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/html;charset=utf-8' });
        res.end('Error 你访问的页面不存在');
      }
      // 动态替换文件格式
      let mime = await common.getFileMime(extname)
      res.writeHead(200, { 'Content-Type': ''+ mime +';charset=utf-8' });
      res.end(data);
    })
  }
}).listen(3000);
console.log('Server running at http://127.0.0.1:3000/');
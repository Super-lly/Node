const fs = require('fs')
const path = require('path')
const url = require('url')

function getFileMime(extname) {

  // 同步方法
  var data = fs.readFileSync('./data/mime.json')

  let mimeObj = JSON.parse(data.toString())
  return mimeObj[extname]
}

exports.static = function (req, res, staticPath) {
  let pathname = url.parse(req.url).pathname

  pathname = pathname == '/' ? '/index.html' : pathname

  let extname = path.extname(pathname)
  // 使用fs模块读取文件
  if (pathname != '/favicon.ico') {
    let data = fs.readFileSync('./' + staticPath + pathname)
    try {
      if (data) {
        // 动态替换文件格式
        let mime = getFileMime(extname)
        res.writeHead(200, { 'Content-Type': '' + mime + ';charset=utf-8' });
        res.end(data);
      }
    } catch (error) { }
  }
}
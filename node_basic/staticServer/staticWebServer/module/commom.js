const fs = require('fs')

exports.getMime = function (extname) {
  switch (extname) {
    case './html':
      return 'text/html';
    case './css':
      return 'text/css';
    case './js':
      return 'text/javascript';
    default:
      return 'text/html'
  }
}

exports.getFileMime = function (extname) {
  return new Promise((resolve,reject)=>{
    fs.readFile('./data/mime.json',(err,data)=>{
      if(err){
        console.log(err);
        reject(err)
        return
      }
      let mimeObj = JSON.parse(data.toString())
      resolve(mimeObj[extname])
    })
  })


  // 同步方法 使用需将app.js 中 async 和 await 删除
  /*
  var data = fs.readFileSync('./data/mime.json')

  let mimeObj = JSON.parse(data.toString())
  return mimeObj[extname]

  */
}
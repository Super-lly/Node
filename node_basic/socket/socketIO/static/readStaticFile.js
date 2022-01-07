const path = require("path")
const mime = require("mime")
const fs = require("fs")


function myReadFile(file){
  return new Promise((resolve,reject)=>{
    fs.readFile(file, (err, res)=>{
      if(err){
        resolve("文件夹不含有index.html")
      } else{
        resolve(res)
      }
    })
  })
}
async function readFile(pathName) {
  // console.log(path.parse(pathName));
  let ext = path.parse(pathName).ext
  let mimeType = mime.getType(ext) || 'text/html'
  // console.log(mimeType);
  let data
  if (fs.existsSync(pathName)) {
    if(ext){
      data = await myReadFile(pathName)
    }else{
      data = await myReadFile(path.join(pathName,'/index.html'))
    }
  } else {
    data = "file is not found"
  }
  return {
    mimeType,
    data
  }
}

module.exports = readFile
// 1、判断服务器上有没有upload目录，如果没有创建这个目录，如果有不做操作
const fs = require('fs')
var path = './upload'
var path1 = './wwwroot'
function mkdir(dir) {
  fs.mkdir(dir, (err) => {
    if (err) {
      console.log(err);
    }
    return
  })
}

fs.stat(path, (err, data) => {
  if (err) {
    mkdir(path)
    console.log('目录创建成功');
    return
  }
  if (data.isDirectory()) {
    console.log('目录已存在');
  } else {
    fs.unlink(path, (err) => {
      if (!err) {
        mkdir(path)
        console.log('目录创建成功');
      } else {
        console.log('删除文件失败');
      }
    })

  }
})


// 2、wwwroot文件夹下面有images、css、js以及index.html,找出wwwroot目录下面的所有目录，然后放在一个数组中
// 方法一： 
var arr = []
fs.readdir(path1, (err, data) => {
  if (err) {
    console.log(err);
    return
  }
  (function getArr(i){
    if(i == data.length){
      console.log(arr);
      return
    }
    fs.stat(path1 + '/' + data[i],(error,state)=>{
      if(state.isDirectory()){
        arr.push(data[i])
      }
      getArr(i+1)
    })
  })(0)
})

// 方法二：
// 判断资源是文件还是目录
async function isDir(path){
  return new Promise((resolve, reject)=>{
    fs.stat(path,(err,data)=>{
      if(err){
        console.log(err);
        reject(err)
        return
      }
      if(data.isDirectory()){
        resolve(true)
      } else{
        resolve(false)
      }
    })
  })
}

(function main(){
  var path2 = './wwwroot'
  var newArr = []
  fs.readdir(path2, async (err,data)=>{
    if(err){
      console.log(err);
      return 
    }
    for(let i = 0; i <data.length; i++){
      if(await isDir(path2+'/'+data[i])){
        newArr.push(data[i])
      }
    }
    console.log(newArr);
  })
})()

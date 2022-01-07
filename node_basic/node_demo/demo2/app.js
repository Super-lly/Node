const fs = require('fs')
// fs中方法全是异步
// 1、fs.stat 检测是文件还是目录

fs.stat('./1.html', (err, data) => {
  if (err) {
    console.log(err);
    return
  }
  console.log(`文件：${data.isFile()}`);
  console.log(`目录：${data.isDirectory()}`);
})

// 2、fs.mkdir 创建目录
/*
  path        创建的目录路径
  mode        目录权限（读写权限），默认777
  callback    回调，传递异常参数err
*/

fs.mkdir('./css', (err) => {
  if (err) {
    console.log(err);
    return
  }
  console.log('创建成功');
})

// 3、fs.writeFile 创建写入文件
/*
  fliename  文件名称
  data      要写入的内容，可以使用字符串或者buffer数据
  options   数组对象，可选参数：
    - encoding   可选值，默认为'utf-8'
    - mode       读写权限，默认值为 438
    - flag       默认值 'w'
  callback  回调函数
*/

fs.writeFile('./html/index.html', '文件写入内容', (err) => {
  if (err) {
    console.log(err);
  }
  console.log('创建写入文件成功');
})

// 4、fs.appendFile 追加文件

fs.appendFile('./css/base.css', 'body{color:red}', (err) => {
  if (err) {
    console.log(err);
  }
  console.log('追加文件成功');
})

// 5、fs.readFile 读取文件

fs.readFile('./html/index.html', 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
})

// 6、fs.readdir 读取目录

fs.readdir('../demo2', (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
})

// 7、fs.rename 重命名或移动文件
// 重命名

fs.rename('./css/text.css', './css/index.css', (err) => {
  if (err) {
    console.log(err);
  }
  console.log('重命名成功');
})

// 移动

fs.rename('.css/text.css', './html/text.css', (err) => {
  if (err) {
    console.log(err);
  }
  console.log('移动文件成功');
})

// 8、fs.rmdir 删除目录（仅空目录）

fs.rmdir('./beRemoved', (err) => {
  if (err) {
    console.log(err);
  }
  console.log('删除目录成功');
})

// 9、fs.unlink 删除文件

fs.unlink('./beRemoved/remove.html',(err)=>{
  if (err) {
    console.log(err);
  }
  console.log('删除文件成功');
})
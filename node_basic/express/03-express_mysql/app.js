// 导入mysql模块
const mysql = require('mysql')


// 连接数据库
const db = mysql.createPool({
  host: '127.0.0.1',     //数据库ip地址
  user: 'root',          //用户名
  password: '843182',    //密码
  database: 'user_db'    //要连接的数据库
})

// 查询
const search = 'select * from users where status=0'

/*
// 通过db.query拿到数据库中指定数据
db.query(search,(err,results)=>{
  // 错误处理
  if(err) return console.log(err.message);
  // 结果处理
  console.log(results);
})
*/

// 插入数据
const user = { username: 'newUser', password: '963852' }
const insert = 'insert into users (username,password) values (?,?)'        //?表示占位符
// 插入数据优化写法
const insert1 = 'insert into users set ?'
// db.query(insert,[user.username,user.password],(err,results)=>{
// 优化后语句
db.query(insert1,user,(err,results)=>{
  if(err) return console.log(err.message);
  // 判断影响的行数
  if(results.affectedRows === 1){
    console.log('ok');
  }
})



// 更新数据
// const updateStr = 'update users set username=?,password=? where id = ?'
const updateStr = 'update users set ? where id = ?'
const updateUser = { id: 6, username: 'user2', password: '753159' }

/*
// db.query(updateStr,[updateUser.username,updateUser.password,updateUser.id],(err,results)=>{
  // 优化
db.query(updateStr,[updateUser,updateUser.id],(err,results)=>{
  if(err) return console.log(err.message);
  if(results.affectedRows === 1){
    console.log('ok');
  }
})
*/

// 删除数据
const del = 'delete from users where id = ?'

/* 
db.query(del, 5, (err, results) => {
  if (err) return console.log(err.message);
  if (results.affectedRows === 1) {
    console.log('ok');
  }
})
*/ 

// 标记删除
const markdel = 'update users set ? where id = ?'
const muser = {id : 6, status : 1}

/*
db.query(markdel,[muser,muser.id],(err,results)=>{
  if (err) return console.log(err.message);
  if (results.affectedRows === 1) {
    console.log('ok');
  }
})
*/ 
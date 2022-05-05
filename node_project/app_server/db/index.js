// mysql
const mysql = require('mysql')

// 创建数据库连接
const db = mysql.createPool({
  host:'120.25.224.155',
  user:'root',
  password:'843182',
  database:'my_db_01'
})

module.exports = db
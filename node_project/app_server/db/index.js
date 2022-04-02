// mysql
const mysql = require('mysql')

// 创建数据库连接
const db = mysql.createPool({
  host:'47.112.187.95',
  user:'root',
  password:'843182',
  database:'my_db_01'
})

module.exports = db
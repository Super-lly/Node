// 用户路由处理函数
// 导入数据库
const db = require('../db/index')

// 注册
register = (req, res) => {
  // 获取表单数据
  let userinfo = req.body
  // 判断表单数据是否为空
  if (!userinfo.username || !userinfo.password) {
    return res.send({ status: 1, message: '用户名或密码不正确！' })
  } else {
    const sql = 'select * from ev_users where username = ?'
    const insert = 'insert into ev_users set ?'
    // 查询用户是否存在
    db.query(sql, [userinfo.username], (err, results) => {
      if (err) {
        return res.send({ status: 1, message: err.message })
      }
      if (results.length > 0) {
        return res.send({ status: 1, message: '用户已存在' })
      } else {
        // 若用户不存在 添加用户
        db.query(insert, userinfo, (err, results) => {
          if (err) {
            return res.send({ status: 1, message: err.message })
          } else {
            res.send('register ok')
          }
        })
      }
    })
  }
}
// 登录
login = (req, res) => {
  res.send('login ok')
}

module.exports = { register, login }
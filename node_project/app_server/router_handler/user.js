// 用户路由处理函数
// 导入数据库
const db = require('../db/index')
// 导入加密模块
const bcrypt = require('bcryptjs')

// 注册
register = (req, res) => {
  // 获取表单数据
  let userinfo = req.body
  // 判断表单数据是否为空
  if (!userinfo.username || !userinfo.password) {
    return res.send({ status: 1, message: '用户名或密码不合法！' })
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
        // 对用户密码进行加密存储
        userinfo.password = bcrypt.hashSync(userinfo.password, 10)
        // 若用户不存在 添加用户
        db.query(insert, userinfo, (err, results) => {
          if (err) {
            return res.send({ status: 1, message: err.message })
          } else if (results.affectedRows != 1) {
            return res.send({ status: 1, message: '注册失败，请稍后重试' })
          } else {
            res.send({status:0,message:'register ok'})
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
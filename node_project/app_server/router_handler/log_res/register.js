// 用户注册路由处理函数
// 导入数据库
const db = require('../../db/index')
// 导入加密模块
const bcrypt = require('bcryptjs')

// 注册
register = (req, res) => {
  // 获取表单数据
  let userinfo = req.body
  // 判断表单数据是否为空
  // if (!userinfo.username || !userinfo.password) {
  // return res.send({ status: 1, message: '用户名或密码不合法！' })
  // return res.cc('用户名或密码不合法！')
  const sql = 'select * from ev_users where username = ?'
  const insert = 'insert into ev_users set ?'
  // 查询用户是否存在
  db.query(sql, [userinfo.username], (err, results) => {
    if (err) {
      // return res.send({ status: 1, message: err.message })
      return res.cc(err)
    }
    if (results.length > 0) {
      // return res.send({ status: 1, message: '用户已存在' })
      return res.cc('用户已存在')
    } else {
      // 对用户密码进行加密存储
      userinfo.password = bcrypt.hashSync(userinfo.password, 10)
      // 若用户不存在且影响数据行数为1 添加用户
      db.query(insert, userinfo, (err, results) => {
        if (err) {
          // return res.send({ status: 1, message: err.message })
          return res.cc(err)
        } else if (results.affectedRows != 1) {
          // return res.send({ status: 1, message: '注册失败，请稍后重试' })
          return res.cc('注册失败，请稍后重试')
        } else {
          // res.send({status:0,message:'register ok'})
          return res.cc('注册成功', 0)
        }
      })
    }
  })
}

module.exports = register
// 新增用户
const db = require('../../db/index')
// 导入加密模块
const bcrypt = require('bcryptjs')

adduser = (req, res) => {

  let userinfo = req.body

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
          return res.cc('新增用户失败，请稍后重试')
        } else {
          // res.send({status:0,message:'register ok'})
          return res.cc('添加成功', 0)
        }
      })
    }
  })

}

module.exports = adduser
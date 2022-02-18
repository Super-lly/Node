// 用户登录路由处理函数
// 导入数据库
const db = require('../db/index')
// 导入加密模块
const bcrypt = require('bcryptjs')
// 导入生成token模块
const jwt = require('jsonwebtoken')
const config = require('../config')

// 登录
login = (req, res) => {
  const userinfo = req.body

  const sql = 'select * from ev_users where username = ?'

  db.query(sql, userinfo.username, (err, results) => {
    if (err) return res.cc(err)
    if (results.length !== 1) return res.cc('登陆失败')

    const compareResult = bcrypt.compareSync(userinfo.password, results[0].password)
    if (!compareResult) {
      return res.cc('登陆失败')
    } else {
      const user = { ...results[0], password: '', user_pic: '' }
      const tokenStr = jwt.sign(user, config.jwtKey,{
        expiresIn : '3h'
      })
      res.send({
        status:0,
        id: results[0].id,
        message:'登陆成功',
        token:'Bearer' + tokenStr
      })
    }
  })
}

module.exports = login
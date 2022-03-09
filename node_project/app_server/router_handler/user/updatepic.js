// 用户头像更新处理函数

const db = require('../../db/index')

updatepic = (req, res) => {
  const sql = 'update ev_users set user_pic=? where id=?'

  db.query(sql, [req.body.user_pic, req.user.id], (err, results) => {
    if (err) {
      res.send({
        status:1,
        message:err
      })
    }
    if (results.affectedRows != 1) {
      res.send({
        status:1,
        message:'更换头像失败'
      })
    }
    res.send({
      status:0,
      message:'更换头像成功'
    })
  })
}

module.exports = updatepic
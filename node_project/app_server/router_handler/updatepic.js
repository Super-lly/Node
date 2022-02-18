// 用户头像更新处理函数

const db = require('../db/index')

updatepic = (req, res) => {
  console.log(req.body);
  const sql = 'update ev_users set user_pic=? where id=?'

  db.query(sql, [req.body.user_pic, req.user.id], (err, results) => {
    if (err) return res.cc(err)
    if (results.affectedRows != 1) return res.cc('更换头像失败')
    res.cc('更换成功', 0)
  })
}

module.exports = updatepic
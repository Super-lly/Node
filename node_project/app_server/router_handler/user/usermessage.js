// 用户留言信息
// 连接数据库
const db = require('../../db/index')

getMessage = (req, res) => {
  // console.log(req);
  let id = req.body.id
  const sql1 = 'select username,nickname,user_pic from ev_users where id = ?'
  const sql2 = 'insert into ev_userMessage set ?'
  const sql3 = 'update ev_userMessage set user_pic=? where id=?'

  db.query(sql1, id, (err, result) => {
    if (err) return res.cc(err)
    if (result.length != 1) return res.cc('请检查用户id')
    let usermessage = {
      ...req.body,
      ...result[0]
    }
    if (req.body.msgpic) {
      usermessage.msgpic = JSON.stringify(usermessage.msgpic)
    }

    db.query(sql3, [result[0].user_pic, id], (err3, result3) => {
      if (err3) return res.cc(err3)
      if (result3.affectedRows == 0) return res.cc('修改数据0条')
      db.query(sql2, usermessage, (err2, result2) => {
        if (err2) return res.cc(err2)
        if (result2.affectedRows != 1) return res.cc('存入数据失败')
        res.send({
          status: 0,
          message: '数据存入成功'
        })
      })
    })
  })
}

module.exports = getMessage
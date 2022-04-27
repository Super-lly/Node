// 用户留言信息
// 连接数据库
const db = require('../../db/index')

getMessage = (req,res) => {
  // console.log(req);
  let id = req.body.id
  let sql1 = 'select username,nickname,user_pic from ev_users where id = ?'
  let sql2 = 'insert into ev_userMessage set ?'

  db.query(sql1,id,(err,result)=>{
    if(err) return res.cc(err)
    if(result.length != 1) return res.cc('请检查用户id')
    let usermessage = {
      ...req.body,
      ...result[0]
    }
    db.query(sql2,usermessage,(err2,result2)=>{
      if(err2) return res.cc(err2)
      if(result2.affectedRows != 1) return res.cc('存入数据失败')
      res.send({
        status:0,
        message:'数据存入成功'
      })
    })
  })
}

module.exports = getMessage
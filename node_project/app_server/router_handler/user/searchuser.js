// 搜索用户

const db = require('../../db/index')

searchuser = (req,res) =>{
  const sql = 'select id, username, nickname, email, user_pic, userroot from ev_users where id=?'

  db.query(sql,req.body.id,(err,results)=>{
    if(err) return res.cc(err)
    if(results.length !== 1) return res.cc('查询失败，请稍后再试')
    res.send({
      status:0,
      message:'查询成功',
      data:results
    })
  })
}

module.exports = searchuser
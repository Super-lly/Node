// 用户信息获取函数
// userinfo 路由处理函数

const db = require('../../db/index')

userinfo = (req,res) =>{
  // console.log(req.query);
  
  const sql = 'select id, username, nickname, email, user_pic from ev_users where id=?'

  db.query(sql,req.query.id,(err,results)=>{
    if(err) return res.cc(err)
    if(results.length !== 1) return res.cc(err)
    res.send({
      status:0,
      message:'获取用户信息成功',
      data:results[0]
    })
  })

}

module.exports = userinfo
// 获取所有用户信息
const db = require('../../db/index')

getallinfo = (req,res) =>{
  // console.log(req.query);
  
  const sql = 'select id,email,nickname,status,user_pic,username,userroot from ev_users'
  db.query(sql,(err,results)=>{
    if(err) return res.cc(err)
    res.send({
      status:0,
      message:'获取用户信息成功',
      data:results
    })
  })

}

module.exports = getallinfo
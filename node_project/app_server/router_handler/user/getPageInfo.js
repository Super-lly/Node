// 分页请求接口

const db = require('../../db/index')

getPageInfo = (req,res) =>{
  
  const pageNum = Number((req.body.pageNum - 1) * 10)
  const pageSize = Number(req.body.pageSize)

  const sql = 'select id,email,nickname,status,user_pic,username,userroot from ev_users limit ' + pageNum + ',' + pageSize

  db.query(sql,(err,results)=>{
    if(err) return res.cc(err)
    res.send({
      status:0,
      message:'获取用户信息成功',
      data:results,
      count:results.length
    })
  })
}

module.exports = getPageInfo
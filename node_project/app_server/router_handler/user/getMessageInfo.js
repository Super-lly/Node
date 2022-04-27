// 获取留言信息
const db = require('../../db/index')

getMessageInfo = (req,res)=>{
  let pageNum = req.body.pageNum ? req.body.pageNum : 1
  let pageSize = req.body.pageSize ? req.body.pageSize : 20
  let num = Number(pageNum - 1) * 10
  let size = Number(pageSize)
  const sql = 'select * from ev_userMessage limit ' + num + ',' + size
  // const sql = 'select * from ev_userMessage'
  db.query(sql,(err,result)=>{
    if(err) return res.cc(err)
    if(result.length === 0) return res.cc('暂无数据')
    result.forEach(v=>{
      if(v.msgpic){
        v.msgpic = JSON.parse(v.msgpic)
      }
    })
    res.send({
      status:0,
      message:'获取数据成功',
      count:result.length,
      data:result,
      pageNum,
      pageSize
    })
  })
}

module.exports = getMessageInfo
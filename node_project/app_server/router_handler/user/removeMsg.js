// 删除用户留言
const db = require('../../db/index')

removeMsg = (req,res) =>{
  const sql = 'delete from ev_userMessage where standnum = ?'
  db.query(sql,req.body.standnum,(err, result)=>{
    if(err) return res.cc(err)
    if(result.affectedRows != 1) return res.cc('操作失败')
    res.send({
      status:0,
      message:'操作成功',
    })
  })
}

module.exports = removeMsg
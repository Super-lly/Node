// 删除指定用户
const db = require('../../db/index')

removeuser = (req,res)=>{
  const sql = 'delete from ev_users where id = ?'


  db.query(sql,req.body.id,(err, results)=>{
    if(err) return res.cc(err)
    if(results.affectedRows != 1) return res.cc('操作失败')
    res.send({
      status:0,
      message:'操作成功',
    })
  })
}

module.exports = removeuser
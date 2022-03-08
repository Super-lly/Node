// 修改权限
const db = require('../../db/index')

changeroot = (req, res)=>{

  const sql = 'update ev_users set userroot = ? where id = ?'

  db.query(sql,[req.body.userroot,req.body.id],(err, results)=>{
    if(err) return res.cc(err)
    if(results.affectedRows != 1) return res.cc('权限更改失败')
    return res.send({
      status:0,
      message:'权限修改成功'
    })
  })


}

module.exports = changeroot




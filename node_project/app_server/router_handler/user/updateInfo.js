// 用户信息更新处理函数

const db = require('../db/index')

updateInfo = (req, res) => {

  const sql = 'update ev_users set ? where id = ?'

  db.query(sql,[req.body,req.user.id],(err, results)=>{
    if(err) return res.cc(err)
    if(results.affectedRows != 1) return res.cc('更改用户信息失败')
    return res.cc('更新成功', 0)
  })
}

module.exports = updateInfo
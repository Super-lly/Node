// 修改密码处理函数

const db = require('../db/index')
// 密码加密及验证
const bcrypt = require('bcryptjs')

updatepwd = (req,res)=> {

  const sql = 'select * from ev_users where id = ?'
  const updateSql = 'update ev_users set password = ? where id = ?'
  // 对新密码进行加密
  const newpwd = bcrypt.hashSync(req.body.newpwd, 10)

  db.query(sql,req.user.id,(err,results)=>{
    if(err) return res.cc(err)
    if(results.length != 1) return res.cc('用户不存在')
   
    // 验证原密码是否正确
    const compareResult = bcrypt.compareSync(req.body.oldpwd,results[0].password)
    if(!compareResult) return res.cc('原密码错误')

    db.query(updateSql,[newpwd,req.user.id],(err2, results2)=>{
      if(err2) return res.cc(err2)
      if(results2.affectedRows != 1) return res.cc('更新密码失败')
      res.cc('更新成功',0)
    })
  })
}

module.exports = updatepwd
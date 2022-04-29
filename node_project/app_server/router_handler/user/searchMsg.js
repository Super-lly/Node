// 查询用户及消息
const db = require('../../db/index')

messageList = (req, res) => {
  let pageNum = req.body.pageNum ? req.body.pageNum : 1
  let pageSize = req.body.pageSize ? req.body.pageSize : 10
  let num = Number(pageNum - 1) * 10
  let size = Number(pageSize)
  const sql = 'select * from ev_userMessage where nickname = ? order by time DESC limit ' + num + ',' + size
  db.query(sql, req.body.nickname, (err, result) => {
    if (err) return res.cc(err)
    if (result.length === 0) return res.cc('暂无该用户留言信息')
    result.forEach(v=>{
      v.msgpic = JSON.parse(String(v.msgpic))
    })
    res.send({
      status: 0,
      message: '获取数据成功',
      count: result.length,
      data: result,
      pageNum,
      pageSize
    })
  })
}

module.exports = messageList
// 增加商品处理函数

const db = require('../../db/index')

goodsAdd = (req, res) => {

  const goodsinfo = req.body
  // 临时sql语句 按需要改写
  const sql = 'insert into ev_goods set ?'

  db.query(sql, goodsinfo, (err,result) => {
    if(err) return res.cc(err)
    if(result.affectedRows != 1 ) return res.cc('添加商品失败，请稍后再试')
    res.send({
      status:0,
      message:'添加商品成功'
    })
  })
}
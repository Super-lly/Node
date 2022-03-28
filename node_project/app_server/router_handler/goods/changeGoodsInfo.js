// 商品编辑处理
const db = require('../../db/index')

changeGoodsInfo = (req, res) => {
  const sql = 'update ev_goods set ? where goods_id = ?'
  req.body.goods_pic = JSON.stringify(req.body.goods_pic)
  db.query(sql, [req.body, req.body.goods_id], (err, result) => {
    if (err) return res.cc(err)
    if (result.affectedRows !== 1) return res.cc('更改失败')
    res.send({
      status: 0,
      message: '更新成功'
    })
  })
}

module.exports = changeGoodsInfo
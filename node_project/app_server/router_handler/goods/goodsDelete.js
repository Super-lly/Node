// 删除商品处理函数

const db = require('../../db/index')

goodsDelete = (res,req) => {

  const sql = 'delete from ev_goods where goods_id = ?'
  // req.body.id 不一定为商品id，需根据实际修改
  db.query(sql, req.body.id, (err,result)=>{
    if(err) return res.cc(err)
    if(result.affectedRows != 1) return res.cc('删除商品失败，请重试')
    res.send({
      status:0,
      message:'删除商品成功'
    })
  })
}

module.exports = goodsDelete
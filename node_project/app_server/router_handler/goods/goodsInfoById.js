// 获取商品详细信息

const db = require('../../db/index')

goodsDetail = (req,res) =>{
  console.log(req.body);
  const sql = 'select * from ev_goods where goods_id = ?'
  db.query(sql,req.body.goods_id,(err, result)=>{
    if (err) return res.cc(err)
    if (result.length === 0) return res.cc('暂无数据')
    result.forEach(v=>{
      v.goods_pic = JSON.parse(v.goods_pic)
    })
    res.send({
      status:0,
      message:'查询成功',
      data:result,
    })
  })
}

module.exports = goodsDetail
// 商品信息查询处理函数

const db = require('../db/index')

goodsInfo = (req,res) => {
  // 临时sql语句 按需要改写
  const sql = 'select * from ev_goods'

  db.query(sql,(err,result)=>{
    if(err) return res.cc(err)
    if(result.length === 0) return res.cc('暂无数据') 
    res.send({
      status:0,
      message:'获取商品信息成功',
      data:result
    })
  })

}

module.exports = goodsInfo
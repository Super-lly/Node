// 查询商品
const db = require('../../db/index')

searchgoods = (req,res) =>{
  const sql = 'select * from ev_goods where goods_name = ?'
  db.query(sql,req.body.goods_name,(err,result)=>{
    if(err) return res.cc(err)
    if(!req.body.goods_name) return res.cc('请输入有效查询条件')
    if(result.length > 10 && req.body.pageSize && req.body.pageNum){
      const pageNum = Number((req.body.pageNum - 1) * 10)
      const pageSize = Number(req.body.pageSize)
      let data = result.slice(pageNum,pageSize)
      res.send({
        status:0,
        message:'查询成功',
        data:data,
        count:result.length
      })
    } else{
      res.send({
        status:0,
        message:'查询成功',
        data:result,
        count:result.length
      })
    }
  })
}

module.exports = searchgoods
// 增加商品处理函数

const db = require('../../db/index')

goodsAdd = (req, res) => {


  // const goodsinfo = req.body
  // console.log(goodsinfo);
  // 临时sql语句 按需要改写
  const sql = 'insert into ev_goods set ?'

  // 按id查询最后一条数据
  const sql2 = 'select * from ev_goods order by goods_id DESC limit 1'

  db.query(sql2, (err, results) => {
    if (err) return res.cc(err)
    if (results.length !== 1) return res.cc('查询异常')
    // console.log(results);
    let id = results[0].goods_id + 1
    const goodsinfo = {
      ...req.body,
      goods_code: 'GDCE' + (10000 + id)
    }
    goodsinfo.goods_pic = JSON.stringify(goodsinfo.goods_pic)
    db.query(sql, goodsinfo, (err, result) => {
      if (err) return res.cc(err)
      if (result.affectedRows != 1) return res.cc('添加商品失败，请稍后再试')
      // if(result.length === 1) return res.cc('最少保留一条数据')
      res.send({
        status: 0,
        message: '添加商品成功'
      })
    })
  })


}

module.exports = goodsAdd
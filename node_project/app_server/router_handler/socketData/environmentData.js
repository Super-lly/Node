// 终端信息获取处理函数
const db = require('../../db/index')

environmentData = (req, res) => {
  // 临时sql语句 按需要改写
  const sql = 'select * from ev_endata order by time DESC limit 10'

  db.query(sql, (err, result) => {
    if (err) return res.cc(err)
    if (result.length === 0) return res.cc('暂无数据')

    result.forEach(v => {
      // 处理时间戳
      function formatDate(now) {
        var year = now.getFullYear();  //取得4位数的年份
        var month = now.getMonth() + 1;  //取得日期中的月份，其中0表示1月，11表示12月
        var date = now.getDate();      //返回日期月份中的天数（1到31）
        var hour = now.getHours();     //返回日期中的小时数（0到23）
        var minute = now.getMinutes(); //返回日期中的分钟数（0到59）
        var second = now.getSeconds(); //返回日期中的秒数（0到59）
        return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
      }
      var time = new Date(Number(v.time));   //创建一个指定的日期对象
      v.time = formatDate(time)
    })
    res.send({
      status: 0,
      message: '获取数据成功',
      data: result
    })
  })

}

module.exports = environmentData
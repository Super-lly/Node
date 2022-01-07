const express = require("express")

const router = express.Router()

router.get('/list', (req, res, next) => {

  let dataArr = []
  for (let i = 0; i < 100; i++) {
    dataArr.push('line' + i)
  }

  res.set('content-type', 'application/json;chartset = utf-8')

  // 通过art-template中间件在页面中渲染views文件中list内容
  res.render('list', {
    data:JSON.stringify(dataArr)
  })
})

module.exports = router
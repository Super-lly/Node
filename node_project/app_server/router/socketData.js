// 导入 express
const express = require('express')
// 创建路由对象
const router = express.Router()
// 导入路由处理函数

const data = require('../router_handler/socketData/environmentData')

// 获取终端数据
router.get('/data/socketData',data)

module.exports = router
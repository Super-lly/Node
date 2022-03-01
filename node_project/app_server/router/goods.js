// 导入 express
const express = require('express')
// 创建路由对象
const router = express.Router()
// 导入路由处理函数
const goodsInfo = require('../router_handler/goods/goodsList')
const goodsAdd = require('../router_handler/goods/goodsAdd')
const goodsDelete = require('../router_handler/goods/goodsDelete')

// 获取商品信息
router.get('/goodsinfo',goodsInfo)

// 增加商品
router.post('/goodsadd',goodsAdd)

// 删除商品
router.post('/goodsdelete',goodsDelete)

module.exports = router
// 导入 express
const express = require('express')
// 创建路由对象
const router = express.Router()
// 导入路由处理函数
const goodsInfo = require('../router_handler/goods/goodsList')
const goodsAdd = require('../router_handler/goods/goodsAdd')
const goodsDelete = require('../router_handler/goods/goodsDelete')
const searchgoods = require('../router_handler/goods/searchgoods')
const changeGoodsInfo = require('../router_handler/goods/changeGoodsInfo')

// 获取商品信息
router.get('/goodsinfo',goodsInfo)

// 增加商品
router.post('/goodsadd',goodsAdd)

// 删除商品
router.post('/goodsdelete',goodsDelete)

// 查询商品
router.post('/goodssearch',searchgoods)

// 编辑商品信息
router.post('/changeGoodsInfo',changeGoodsInfo)

module.exports = router
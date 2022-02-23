// 导入 express
const express = require('express')
// 创建路由对象
const router = express.Router()
// 导入路由处理函数
const userinfo = require('../router_handler/userinfo')
const updateInfo = require('../router_handler/updateInfo')
const updatepwd = require('../router_handler/updatepwd')
const updatepic = require('../router_handler/user/updatepic')

const expressJoi = require('@escook/express-joi')
const { update_userInfo_schema } = require('../schema/userinfo')
const { update_password_schema, update_userpic_schema } = require('../schema/user')

// 获取用户的基本信息
router.get('/userinfo', userinfo)

// 用户信息更新
router.post('/userinfo', expressJoi(update_userInfo_schema), updateInfo)

// 修改密码
router.post('/updatepwd', expressJoi(update_password_schema), updatepwd)

// 修改用户头像
router.post('/updatepic', expressJoi(update_userpic_schema), updatepic)

// 向外共享路由对象
module.exports = router

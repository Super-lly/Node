// 用户路由模块

const express = require('express')
const routerHandle = require('../router_handler/user')
const expressJoi = require('@escook/express-joi')
const {reg_login_schema} = require('../schema/user')
// 创建路由对象
const router = express.Router()

// 注册
router.post('/register', expressJoi(reg_login_schema),routerHandle.register)
// 登录
router.post('/login',routerHandle.login)


module.exports = router
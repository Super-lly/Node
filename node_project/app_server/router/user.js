// 用户路由模块

const express = require('express')
const router_register = require('../router_handler/log_res/register')
const router_login = require('../router_handler/log_res/login')
const expressJoi = require('@escook/express-joi')
const { register_schema, login_schema } = require('../schema/user')
// 创建路由对象
const router = express.Router()

// 注册
router.post('/register', expressJoi(register_schema), router_register)
// 登录
router.post('/login', expressJoi(login_schema), router_login)


module.exports = router
// 导入 express
const express = require('express')
// 创建路由对象
const router = express.Router()
// 导入路由处理函数
const userinfo = require('../router_handler/user/userinfo')
const updateInfo = require('../router_handler/user/updateInfo')
const updatepwd = require('../router_handler/user/updatepwd')
const updatepic = require('../router_handler/user/updatepic')
const getallinfo = require('../router_handler/user/getAllinfo')
const removeuser = require('../router_handler/user/removeuser')
const adduser = require('../router_handler/user/adduser')
const changeroot = require('../router_handler/user/changeRoot')
const searchuser = require('../router_handler/user/searchuser')
const getPageInfo = require('../router_handler/user/getPageInfo')
const userMessage = require('../router_handler/user/usermessage')
const getMessageInfo = require('../router_handler/user/getMessageInfo')
const searchMessage = require('../router_handler/user/searchMsg')
const removeMessage = require('../router_handler/user/removeMsg')

const expressJoi = require('@escook/express-joi')
const { update_userInfo_schema } = require('../schema/userinfo')
const { update_password_schema, update_userpic_schema } = require('../schema/user')

// 获取用户的基本信息
router.get('/userinfo', userinfo)

// 获取所有用户所有信息
router.get('/getallinfo',getallinfo)

// 用户信息更新
router.post('/userinfo', expressJoi(update_userInfo_schema), updateInfo)

// 修改密码
router.post('/updatepwd', expressJoi(update_password_schema), updatepwd)

// 修改用户头像
router.post('/updatepic', updatepic)

// 删除指定用户
router.post('/removeuser',removeuser)

// 新增用户
router.post('/adduser',adduser)

// 修改权限
router.post('/changeroot',changeroot)

// 查询用户
router.post('/searchuser',searchuser)

// 分页请求用户数据
router.post('/getPageInfo',getPageInfo)

// 存入用户留言信息
router.post('/user/add/message',userMessage)

// 获取用户留言信息
router.post('/user/message/list',getMessageInfo)

// 查询用户留言
router.post('/user/search/message',searchMessage)

// 删除用户留言
router.post('/user/remove/message',removeMessage)

// 向外共享路由对象
module.exports = router

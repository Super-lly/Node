// 表单验证

const joi = require('joi')

/**
 * string() 值必须是字符串
 * alphanum() 值只能是包含 a-zA-Z0-9 的字符串
 * min(length) 最小长度
 * max(length) 最大长度
 * required() 值是必填项，不能为 undefined
 * pattern(正则表达式) 值必须符合正则表达式的规则
 */

const username = joi.string().alphanum().min(1).max(10).required()
const password = joi.string().pattern(/^[\S]{6,12}$/).required()
const nickname = joi.string().min(1).max(10)
const email = joi.string().pattern(/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/).required()
// 头像验证
// dataUri()格式 -> data:image/png;base64,VE9PTUFOWVNFQ1JFVFM=
const avatar = joi.string().dataUri().required()
// 注册验证
exports.register_schema = {
  body:{
    username,
    password,
    nickname,
    email
  }
}
// 登录验证
exports.login_schema = {
  body:{
    username,
    password
  }
}

exports.update_password_schema = {
  body:{
    oldpwd:password,
    newpwd:joi.not(joi.ref('oldpwd')).concat(password)
  }
}

exports.update_userpic_schema = {
  body:{
    avatar
  }
}
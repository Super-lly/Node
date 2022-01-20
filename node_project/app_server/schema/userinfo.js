const joi = require('joi')

// const nickname = joi.string().required()
const nickname = joi.string()
// const email = joi.string().email().required()
const email = joi.string().email()

exports.update_userInfo_schema ={
  body:{
    nickname,
    email
  }
}
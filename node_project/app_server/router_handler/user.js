// 用户路由处理函数
// 注册
register = (req,res)=>{
  console.log(req.body);
  res.send('register ok')
}
// 登录
login = (req,res)=>{
  res.send('login ok')
}

module.exports = {register, login}
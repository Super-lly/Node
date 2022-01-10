const Router = require('@koa/router')
const router = new Router()

router.get(
  '/users/:id', (cxt, next) => {
    console.log(cxt.params.id);
    next();
  });

// router.get('/',(cxt, next)=>{
//   cxt.body = 1
// })

module.exports = router

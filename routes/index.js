const router = require('koa-router')();
const snail = require('./snail');



router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.use('/',snail.routes(),snail.allowedMethods());

module.exports = router

const router = require('koa-router')();
const snail = require('./snail');
const source = require('./source');
const cfg = require('../config');
const sc = require('../static/statusCode');

router.post(/^\/snail\//,async (ctx, next)=>{
    let collectionName = ctx.request.url.split('/')[2]; // 表名
    if(!cfg.collections.includes(collectionName)){ // 如果不存在改表名，则返回404
        ctx.body = {status:sc.NOT_FOUND}; // 执行完ctx.body后仍然往下执行
        return;
    }
    await next();
})

router.use('',snail.routes(),snail.allowedMethods());
router.use('/',source.routes(),source.allowedMethods());

module.exports = router

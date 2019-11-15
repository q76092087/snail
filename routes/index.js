const router = require('koa-router')();
const snail = require('./snail');


router.use('/',snail.routes(),snail.allowedMethods());

module.exports = router

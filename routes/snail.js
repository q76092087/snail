const router = require('koa-router')();
const school = require('../db/school');

module.exports = router.post('snail/school/insert', async (ctx, next) => {
    let body = JSON.parse(ctx.request.body);
    let r = [];
    try {
        r = await school.add(body);
        ctx.body = r;
    } catch (error) {
        ctx.body = r;
    }
});
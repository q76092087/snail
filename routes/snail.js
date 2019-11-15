const router = require('koa-router')();
const school = require('../db/school');
const sc = require('../static/statusCode');

// ==========school===========
module.exports = router.post('snail/school/insert', async (ctx, next) => {
    let body = ctx.request.body;
    let r = {};
    try {
        r = await school.add(body);
        ctx.body = r;
    } catch (error) {
        ctx.body = error;
    }
});
module.exports = router.post('snail/school/insertMany', async (ctx, next) => {
    let body = ctx.request.body;
    let r = {};
    try {
        r = await school.insertMany(body);
        ctx.body = r;
    } catch (error) {
        ctx.body = error;
    }
});
module.exports = router.post('snail/school/delete',async (ctx,next)=>{
    let body = ctx.request.body;
    try {
        r = await school.delete(body.id);
        ctx.body = r;
    } catch (error) {
        ctx.body = error;
    }
})
module.exports = router.post('snail/school/deleteMany',async (ctx,next)=>{
    let body = ctx.request.body;
    try {
        r = await school.deleteMany(body);
        ctx.body = r;
    } catch (error) {
        ctx.body = error;
    }
})

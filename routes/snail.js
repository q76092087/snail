const router = require('koa-router')();
const school = require('../db/snail/school');
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
module.exports = router.post('snail/school/update',async (ctx,next)=>{
    let body = ctx.request.body;
    try {
        r = await school.update(body);
        ctx.body = r;
    } catch (error) {
        ctx.body = error;
    }
})
module.exports = router.post('snail/school/updateMany',async (ctx,next)=>{
    let body = ctx.request.body;
    let data = body.data;
    let ids = body.ids;
    try {
        r = await school.updateMany(ids,data);
        ctx.body = r;
    } catch (error) {
        ctx.body = error;
    }
})
module.exports = router.post('snail/school/find',async (ctx,next)=>{
    let body = ctx.request.body;
    let query = body.query;
    let order = body.order;
    try {
        r = await school.find(query,order);
        ctx.body = r;
    } catch (error) {
        ctx.body = error;
    }
})
module.exports = router.post('snail/school/findPage',async (ctx,next)=>{
    let body = ctx.request.body;
    let query = body.query;
    let order = body.order;
    let pageIndex = body.pageIndex;
    let pageSize = body.pageSize;
    try {
        r = await school.findAndCount(query,order,pageIndex,pageSize);
        ctx.body = r;
    } catch (error) {
        ctx.body = error;
    }
})

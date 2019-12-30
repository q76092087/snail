const router = require('koa-router')();
const school = require('../db/snail/school');
const sc = require('../static/statusCode');
const cfg = require('../config');



// ==========school===========
router.post(/^\/snail.+\/insert$/, async (ctx, next) => {
    let body = ctx.request.body;
    let r = {};
    try {
        console.log('表名',ctx.request.url.split('/')[2])
        // r = await school.add(body);
        ctx.body = r;
    } catch (error) {
        ctx.body = error;
    }
});
router.post(/^\/snail.+\/insertMany$/, async (ctx, next) => {
    let body = ctx.request.body;
    let r = {};
    try {
        r = await school.insertMany(body);
        ctx.body = r;
    } catch (error) {
        ctx.body = error;
    }
});
router.post(/^\/snail.+\/delete$/,async (ctx,next)=>{
    let body = ctx.request.body;
    try {
        r = await school.delete(body.id);
        ctx.body = r;
    } catch (error) {
        ctx.body = error;
    }
})
router.post(/^\/snail.+\/deleteMany$/,async (ctx,next)=>{
    let body = ctx.request.body;
    try {
        r = await school.deleteMany(body);
        ctx.body = r;
    } catch (error) {
        ctx.body = error;
    }
})
router.post(/^\/snail.+\/update$/,async (ctx,next)=>{
    let body = ctx.request.body;
    try {
        r = await school.update(body);
        ctx.body = r;
    } catch (error) {
        ctx.body = error;
    }
})
router.post(/^\/snail.+\/updateMany$/,async (ctx,next)=>{
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
router.post(/^\/snail.+\/find$/,async (ctx,next)=>{
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
router.post(/^\/snail.+\/findPage$/,async (ctx,next)=>{
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
router.post(/^\/snail.+\/group$/,async (ctx,next)=>{
    let body = ctx.request.body;
    try {
        r = await school.aggregate(body);
        ctx.body = r;
    } catch (error) {
        ctx.body = error;
    }
})
module.exports = router

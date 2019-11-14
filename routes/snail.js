const router = require('koa-router')();
const school = require('../db/school');
const sc = require('../static/statusCode');

module.exports = router.post('snail/school/insert', async (ctx, next) => {
    let body = ctx.request.body;
    let r = {};
    // let result = {};
    try {
        r = await school.add(body);
        // result.data = r.data;
        // result.status = r.status;
        ctx.body = r;
    } catch (error) {
        ctx.body = error;
    }
});

module.exports = router.post('snail/school/insertMany', async (ctx, next) => {
    let body = ctx.request.body;
    let r = {};
    // let result = {};
    try {
        r = await school.insertMany(body);
        // result.data = r.data;
        // result.status = r.status;
        ctx.body = r;
    } catch (error) {
        ctx.body = error;
    }
});
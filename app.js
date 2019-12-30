const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const index = require('./routes/index')
const snail = require('./routes/snail')

const cors = require('koa2-cors'); // 跨域库
const koa_static = require('koa-static'); // 配置静态资源库

const MongoBase = require('./repository/mongoBase'); // 数据库操作类

const cfg = require('./config'); // 自行配置文件


// =======定义全局变量=========
global.client = null;

// =======静态资源文件夹=========
app.use(koa_static(__dirname + '/public'))

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())


app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
// console.log('这个index',index)
app.use(index.routes(), index.allowedMethods())
// app.use(snail.routes(), snail.allowedMethods())

// 跨域
app.use(cors());

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

// 服务器启动连接数据库
// let mb = new MongoBase();
// mb.createConnection();

module.exports = app

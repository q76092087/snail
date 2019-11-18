const router = require('koa-router')();
const multer = require('koa-multer'); // 文件上传
const file = require('../db/source/file');

// =======文件上传配置=========
const storage = multer.diskStorage({
  //文件保存路径
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/')
  },
  //修改文件名称
  filename: function (req, file, cb) {
    var fileFormat = (file.originalname).split(".");  //以点分割成数组，数组的最后一项就是后缀名
    cb(null,Date.now() + "." + fileFormat[fileFormat.length - 1]);
  }
})
const upload = multer({ storage: storage });


module.exports = router.post('up',upload.single('file'), async (ctx, next) => {
  let reg = /public/;
  let f = ctx.req.file;
  let temp = f.filename.split('.');
  let data = {
    url:f.path.replace(reg,''),
    name:f.filename,
    size:f.size,
    extension:temp[temp.length-1],
    category:f.mimetype
  }
  try {
    let r = await file.add(data);
    ctx.body = r;
  } catch (error) {
    ctx.body = error;
  }
});
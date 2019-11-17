const router = require('koa-router')();
const multer = require('koa-multer'); // 文件上传

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
  
  ctx.body = {
      filename: ctx.req.file//返回文件名
    }
});
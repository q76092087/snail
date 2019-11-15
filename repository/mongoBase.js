const cfg = require('../config');
const MongoClient = require('mongodb').MongoClient;
class mongoBase{
    constructor(db,collection){
        this.dbName = db;
        this.collectionName = collection;
    }
    
    createConnection(){
        const opt = {
            useNewUrlParser: true
        }
        MongoClient.connect(cfg.mongodbUrl,opt,(err,client)=>{
            if (err) {
              console.error("数据库连接出错：" + err.message);
              return;
            }
            console.log("数据库连接成功!");
            global.client = client;
        })
    }

    async insert(item){
        try{
            const db = global.client.db(this.dbName);
            let ret = await db.collection(this.collectionName).insertOne(item);
            console.log("这个ret是什么",ret);
            return ret.ops[0];
        }catch(err){
            console.log(err.stack);
            return null;
        }
    }
}
module.exports = mongoBase;
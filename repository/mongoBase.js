const cfg = require('../config');
const MongoClient = require('mongodb').MongoClient;
const sc = require('../static/statusCode');
class mongoBase{
    constructor(db,collection){
        this.dbName = db;
        this.collectionName = collection;
    }
    
    createConnection(){
        const opt = {
            useNewUrlParser: true,
            useUnifiedTopology: true
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
            return {data:ret.ops,status:sc.OK};
        }catch(err){
            console.log(err.stack);
            return {status:sc.BAD_REQUEST};
        }
    }

    async insertMany(item) {
        try {
            const db = global.client.db(this.dbName);
            let ret = await db.collection(this.collectionName).insertMany(item);
            return {data:ret.ops,status:sc.OK};
        } catch (err) {
            console.log(err.stack);
            return {status:sc.BAD_REQUEST};
        } 
    }

    async delete(id) {
        try {
            const db = global.client.db(this.dbName);
            let ret =  await db.collection(this.collectionName).deleteOne({
                _id: id
            });
            let status = '';
            ret.result.n>0?(status=sc.OK):(status=sc.NO_CONTENT);
            return {status:status}
        } catch (err) {
            console.log(err.stack);
            return {status:sc.BAD_REQUEST};
        } 
    }

    async deleteMany(idArr) {
        try {
            const db = global.client.db(this.dbName);
            let ret = await db.collection(this.collectionName).deleteMany({
                _id:{$in:idArr}
            });
            let status = '';
            ret.result.n>0?(status=sc.OK):(status=sc.NO_CONTENT);
            return {status:status}
        } catch (err) {
            console.log(err.stack);
            return {status:sc.BAD_REQUEST};
        }
    }

    async update(item) {
        try {
            const db = global.client.db(this.dbName);
            let id = item._id;
            delete item._id;
            let ret =  await db.collection(this.collectionName).updateOne({
                _id: id
            }, {
                $set: item
            });
            let status = '';
            ret.result.n>0?(status=sc.OK):(status=sc.NO_CONTENT);
            return {status:status}
        } catch (err) {
            console.log(err.stack);
            return {status:sc.BAD_REQUEST};
        }
    }

    async updateMany(idArr,item) {
        try {
            const db = global.client.db(this.dbName);
            let ret =  await db.collection(this.collectionName).updateMany({
                _id: {$in:idArr}
            }, {
                $set: item
            });
            let status = '';
            ret.result.n>0?(status=sc.OK):(status=sc.NO_CONTENT);
            return {status:status}
        } catch (err) {
            console.log(err.stack);
            return {status:sc.BAD_REQUEST};
        }
    }

    async find(query,order) {
        try {
            let status = '';
            const db = global.client.db(this.dbName);
            let ret = await db.collection(this.collectionName).find(query).sort(order).toArray();
            return ret;
        } catch (err) {
            console.log(err.stack);
            return {status:sc.BAD_REQUEST};
        }
    }

    async findAndCount(query,order,pageIndex,pageSize) {
        try {
            let status = '';
            const db = global.client.db(this.dbName);
            let ret = await db.collection(this.collectionName).find(query).skip((pageIndex-1)*pageSize).limit(pageSize).sort(order).toArray();
            let count = await db.collection(this.collectionName).count(query);
            return {
                list:ret,
                count:count
            };
        } catch (err) {
            console.log(err.stack);
            return {status:sc.BAD_REQUEST};
        }
    }




}
module.exports = mongoBase;
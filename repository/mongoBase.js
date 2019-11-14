const sc = require('../static/statusCode');
class mongoBase{
    constructor(db,collection){
        this.dbName = db;
        this.collectionName = collection;
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



}
module.exports = mongoBase;
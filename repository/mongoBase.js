class mongoBase{
    constructor(db,collection){
        this.dbName = db;
        this.collectionName = collection;
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
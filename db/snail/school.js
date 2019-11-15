const uuid = require('uuid-v4');
const Mb = require('../../repository/mongoBase');
const cfg = require('../../config');
const collectionName = "school";
const dbName = cfg.test+"snail";


class school{
    static async add(item){
        if (!item.hasOwnProperty("_id")) {
            item._id = uuid();
        }
        let tb = new Mb(dbName, collectionName);
        let r = tb.insert(item);
        return r;
    }

    static async insertMany(data){
        data = data.map(item=>{
            if(!item.hasOwnProperty("_id")){
                item._id = uuid();
            }
            return item;
        });
        let tb = new Mb(dbName, collectionName);
        let r = tb.insertMany(data);
        return r;
    }

    static async delete(id){
        let tb = new Mb(dbName,collectionName);
        let r = tb.delete(id);
        return r;
    }

    static async deleteMany(idArr){
        let tb = new Mb(dbName,collectionName);
        let r = tb.deleteMany(idArr);
        return r;
    }

    static async update(item){
        let tb = new Mb(dbName,collectionName);
        let r = tb.update(item);
        return r;
    }

    static async updateMany(idArr,item){
        let tb = new Mb(dbName,collectionName);
        let r = tb.updateMany(idArr,item);
        return r;
    }

    static async find(query,order){
        let tb = new Mb(dbName,collectionName);
        let r = tb.find(query,order);
        return r;
    }

    static async findAndCount(query,order,pageIndex,pageSize){
        let tb = new Mb(dbName,collectionName);
        let r = tb.findAndCount(query,order,pageIndex,pageSize);
        return r;
    }
}
module.exports = school

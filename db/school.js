const uuid = require('uuid-v4');
const mb = require('../repository/mongoBase');
const collectionName = "school";
const dbName = "testsnail";


class school{
    static async add(item){
        if (!item.hasOwnProperty("_id")) {
            item._id = uuid();
        }
        let tb = new mb(dbName, collectionName);
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
        let tb = new mb(dbName, collectionName);
        let r = tb.insertMany(data);
        return r;
    }
}
module.exports = school

const uuid = require('uuid-v4');
const Mb = require('../../repository/mongoBase');
const cfg = require('../../config');
const collectionName = "file";
const dbName = cfg.test+"source";

class file{
    static async add(item){
        if(!item.hasOwnProperty("_id")){
            item._id = uuid();
        }
        let tb = new Mb(dbName, collectionName);
        let r = tb.insert(item);
        return r;
    }
}
module.exports = file
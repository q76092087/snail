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
        // url name size extension category
    }
}
module.exports = file
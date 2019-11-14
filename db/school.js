const uuid = require('uuid-v4');
const mb = require('../repository/mongoBase');
const collectionName = "school";
const dbName = "testyaohao";


class school{
    static async add(item){
        if (!item.hasOwnProperty("_id")) {
            item.fri = uuid();
        }
        let data = {
            _id:uuid(),
            name:item.name,
            class:item.class,
            age:item.age
        };
        let tb = new mb(dbName, collectionName);
        
        let r = tb.insert(data);
        return r;
    }
}
module.exports = school

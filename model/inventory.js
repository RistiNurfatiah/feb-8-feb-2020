const db = require('../database/db.js');
const store = (body, callback)=>{
    console.log(body)
    db.query({
        sql: 'INSERT INTO inventory SET ?',
        timeout: 4000,
        values: {...body},
    }, (err, result)=> {
        return callback(err, result);
    });
};
module.exports={
    store,
};
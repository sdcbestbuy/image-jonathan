const queries = require('./database/queries');
const mysqlConfig = require('./config.js');

const getProductInfo= function(id, callback){
  connection.query('SELECT * FROM products WHERE id = ?', [id], (err, productInfo)=> {
    if (err) {
      console.log('could not find', err);
      callback(err, null);
    }
    callback(null,productInfo);
  })
}

module.exports.getProductInfo = getProductInfo;

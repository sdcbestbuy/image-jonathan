const mysql = require('mysql');
const mysqlConfig = require('./sqlconfig.js');

const connection = mysql.createConnection(mysqlConfig);
const getProductInfo= (callback)=>{
  connection.query('SELECT * FROM product', (err, productInfo)=> {
    if (err) {
      console.log('could not find', err);
      callback(err, null);
    }else{
    callback(null,productInfo);
  }
})
};
module.exports.getProductInfo = getProductInfo;

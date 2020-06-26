const mysql = require('mysql');
const connection = mysql.createConnection({
  host: process.env.RDS_HOSTNAME,
  user: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  database: process.env.RDS_DB_NAME,
  port: process.env.RDS_PORT,
});
connection.connect((err)=>{
  if (err){
    console.log('DB CONNECTION FAILED',err)
    return;
  }
  console.log('Connected to DB')
});
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

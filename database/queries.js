const mysql = require("mysql");
const connection = mysql.createConnection({
  host: process.env.RDS_HOSTNAME || "localhost",
  user: process.env.RDS_USERNAME || "root",
  password: process.env.RDS_PASSWORD || "Bruins2011!",
  database: process.env.RDS_DB_NAME || "bestbuy",
  port: process.env.RDS_PORT
});


connection.connect((err) => {
  if (err) {
    console.log("DB CONNECTION FAILED", err);
    return;
  }
  console.log("Connected to DB");
});
const getImages = (id, cb) => {
  console.log("id",id)
  console.log("cb",cb)
  connection.query(`SELECT * FROM images WHERE product_id = ${id}`, (error, results)=>{
    if (error) {
      cb (error, null);
    } else {
      cb (null, results);
    }
  })
}

const getProductInfo = (callback) => {
  connection.query("SELECT * FROM product", (err, productInfo) => {
    if (err) {
      console.log("could not find", err);
      callback(err, null);
    } else {
      callback(null, productInfo);
    }
  });
};

module.exports = { getProductInfo, getImages };

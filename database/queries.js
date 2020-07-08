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
const postImage = (data, cb) => {
  connection.query('INSERT INTO images (product_id, url)\
   VALUES (?,?)', data, (err, results) => {
    if(err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  })
}

const deleteData = (id, cb) => {
  connection.query('DELETE FROM images WHERE id=(?)', id, (err, results) => {
    if(err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  })
}

const putData = (id, cb) => {
  connection.query("UPDATE product SET product_name='yassss queeennn' where id=(?)"
  , id, (err, results) => {
    if(err) {
      cb(err, null);
    } else {
      cb(null, results);
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

module.exports = { getProductInfo, getImages, putData, deleteData, postImage };

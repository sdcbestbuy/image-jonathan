const { Client } = require('pg');
require('dotenv').config();


const connection = new Client({
  user: `${process.env.DB_USER}`,
  host: `${process.env.DB_HOST}`,
  database: `${process.env.DB_DBNAME}`,
  password: `${process.env.DB_PASS}`
})

connection.connect((err) => {
    if (err) {
      console.log("DB CONNECTION FAILED", err);
      return; 
    }
    console.log("Connected t0 postgreSQL");
  });
const getImages = (id, cb) => {
  console.log("id",id)
  console.log("cb",cb)
  connection.query(`SELECT * FROM images WHERE  = ${id}`, (error, results)=>{
    if (error) {
      cb (error, null);
    } else {
      cb (null, results);
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

const putData = (cb) => {
  connection.query(`UPDATE products SET "product_name"\
   = 'yassss queeennn' WHERE "product_id" = 9977797`
  , (err, results) => {
    if(err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  })
}
var x = 9999999;
var y = 8999999;
var z = 9576059;
// var f =  `product_url = ('"http://lorempixel.com/640/480/food"')`;
// var l = '("product_name", "regularPrice") ('Soap', 73252)';

// "product_name": "Soap",
// "regularPrice": 73252,

const getProductInfo = (callback) => {
  connection.query(`SELECT "product_id","customer_review_AVG","customerReviewCount",\
  product_image,product_name,"regularPrice","shortDescription","thumbnailImage",product_url \
  FROM products where product_id = 9977756`,
   (err, results) => {
    if (err) {
      console.log("could not find", err);
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};
//***********************ADD BACK getProductInfo  **************
module.exports = {  getProductInfo, getImages, putData, deleteData };



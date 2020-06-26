module.exports = {
  host     : process.env.RDS_HOSTNAME||'localhost',
  user     : process.env.RDS_USERNAME||'root',
  password : process.env.RDS_PASSWORD||'Bruins2011!',
  port     : process.env.RDS_PORT||3306,
  database : process.env.RDS_DB_NAME||'bestbuy',
};


require('dotenv').config();

module.exports = {
    development: {
        client: "pg", 
        connection: {//specify your particular client here
            user: `${process.env.DB_USER}`,
            host: `${process.env.DB_HOST}`,
            database: `${process.env.DB_DBNAME}`,
            password: `${process.env.DB_PASS}`
        }, //use specific database connection here
        migrations: {
            directory: __dirname + "/migrations"
        },
        seeds: {
            directory: __dirname + "/seeds"
        },
    },
}
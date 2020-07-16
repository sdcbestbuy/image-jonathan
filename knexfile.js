
require('dotenv').config();

module.exports = {
    development: {
        client: "pg", 
        connection: {//specify your particular client here
            user: `postgres`,
            host: `34.229.224.145`,
            database: `test`,
            password: `password`
        }, //use specific database connection here
        migrations: {
            directory: __dirname + "/migrations"
        },
        seeds: {
            directory: __dirname + "/seeds"
        },
    },
}
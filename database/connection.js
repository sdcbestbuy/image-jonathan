const {MongoClient} = require('mongodb');


async function main() {

    const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-rpfcm.mongodb.net/${process.env.DB_DBNAME}?retryWrites=true&w=majority`;

    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


    try {
        await client.connect();

        await listDatabases(client);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function listDatabases(client){

    databasesList = await client.db().admin().listDatabases();
    //shows databases on local console
    console.log('Databases:');
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};
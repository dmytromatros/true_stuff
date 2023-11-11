
exports = module.exports = (app) => {
    const { MongoClient, ServerApiVersion } = require('mongodb');
    const uri = "";
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });


    async function run() {
        try {
            await client.connect();
            await client.db("admin").command({ ping: 1 });
            const db = client.db("true_stuff"); // Replace "yourDatabaseName" with your actual database name

            app.db = db;
            console.log("Connected to MongoDB!");
        } catch (error) {
            console.log(error)
        }

    }
    run().catch(console.dir);
}
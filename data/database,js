import { MongoClient} from 'mongodb';

const clusterAddress = process.env.MONGODB_CLUSTER_ADDRESS;
const dbUser = process.env.MONGODB_USERNAME;
const dbPassword = process.env.MONGODB_PASSWORD;
const dbName = process.env.MONGODB_DB_NAME;

const uri = `mongodb+srv://${dbUser}:${dbPassword}@${clusterAddress}/${dbName}?retryWrites=true&w=majority`;
const client = new MongoClient(uri);

console.log('trying to connect to database');

try {
    await client.connect();
    await client.db(dbName).command({ ping: 1 });
    console.log('Connected successfully to database');
} catch (e) {
    console.log('Connection failed.');
    await client.close();
    console.log('Connection closed.');
}

const database = client.db(dbName);

export default database;

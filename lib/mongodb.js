import { MongoClient } from 'mongodb'

let cachedDb = null

async function connectToDatabase(uri) {
    if (cachedDb) {
        return cachedDb
    }
    const client = await MongoClient.connect(uri)

    const db = client.db('Cluster0')
    cachedDb = db

    return db
}

export default connectToDatabase

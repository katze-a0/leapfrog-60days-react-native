

// backend/config/database.js - MongoDB connection module
const {MongoClient, ServerApiVersion} = require('mongodb');

const uri = 'mongodb+srv://ayusha01:Hellobunny10@cluster0.krr37su.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let db = null;

async function connectDB() {
  if (!db) {
    await client.connect();
    db = client.db('my_expense_tracker');
    console.log('Connected to MongoDB!');
  }
  return db;
}

module.exports = { connectDB };
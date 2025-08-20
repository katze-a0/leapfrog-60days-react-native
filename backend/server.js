// const {MongoClient, ServerApiVersion} = require('mongodb');
// const uri =
//   'mongodb+srv://ayusha01:Hellobunny10@cluster0.krr37su.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db('admin').command({ping: 1});
//     console.log(
//       'Pinged your deployment. You successfully connected to MongoDB!',
//     );
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
// backend/server.js - Main server file
const express = require('express');
const {connectDB} = require('./config/database');

const app = express();
app.use(express.json());

// Routes
app.use('/api/income', require('./routes/income'));
app.use('/api/expenses', require('./routes/expense'));

// Start server
connectDB().then(() => {
  app.listen(3000, () => console.log('Server running on port 3000'));
});

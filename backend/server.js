// backend/server.js - Main server file
//file2
// const express = require('express');
// const {connectDB} = require('./config/database');

// const app = express();
// app.use(express.json());

// // Routes
// app.use('/api/income', require('./routes/income'));
// app.use('/api/expenses', require('./routes/expense'));

// // Start server
// connectDB().then(() => {
//   app.listen(3000, () => console.log('Server running on port 3000'));
// });

const express = require('express');
const cors = require('cors');
const {connectDB} = require('./config/database');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(
  cors({
    origin: '*', // Allow all origins for development
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }),
);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Test route
app.get('/api/test', (req, res) => {
  res.json({message: 'Backend server is running!'});
});

// Income routes
app.use('/api/income', require('./routes/income'));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({error: 'Something went wrong!'});
});

// Start server
app.listen(PORT, '0.0.0.0', async () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);

  // Test database connection
  try {
    await connectDB();
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection failed:', error);
  }
});

module.exports = app;

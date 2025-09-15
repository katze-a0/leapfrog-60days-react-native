// backend/routes/income.js - Income routes
const express = require('express');
const {connectDB} = require('../config/database');
const router = express.Router();

// POST /api/income - Add income
router.post('/', async (req, res) => {
  try {
    const {source, amount, date} = req.body;
    const db = await connectDB();

    const incomeData = {
      source: source.trim(),
      amount: parseFloat(amount),
      date: date,
      createdAt: new Date().toISOString(),
    };

    await db.collection('income').insertOne(incomeData);
    res.status(201).json({message: 'Income added successfully'});
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Failed to add income'});
  }
});

// GET /api/income - Get all income
router.get('/', async (req, res) => {
  try {
    const db = await connectDB();
    const incomes = await db.collection('income').find({}).toArray();
    res.json(incomes);
  } catch (error) {
    res.status(500).json({error: 'Failed to fetch income'});
  }
});

module.exports = router;

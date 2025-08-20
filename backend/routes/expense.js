// backend/routes/expense.js - Expense routes
const express = require('express');
const {connectDB} = require('../config/database');
const router = express.Router();

// POST /api/expenses - Add expense
router.post('/', async (req, res) => {
  try {
    const {category, amount, date} = req.body;
    const db = await connectDB();

    const expenseData = {
      category: category.trim(),
      amount: parseFloat(amount),
      date: date,
      createdAt: new Date().toISOString(),
    };

    await db.collection('expenses').insertOne(expenseData);
    res.status(201).json({message: 'Expense added successfully'});
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Failed to add expense'});
  }
});

// GET /api/expenses - Get all expenses
router.get('/', async (req, res) => {
  try {
    const db = await connectDB();
    const expenses = await db.collection('expenses').find({}).toArray();
    res.json(expenses);
  } catch (error) {
    res.status(500).json({error: 'Failed to fetch expenses'});
  }
});

module.exports = router;

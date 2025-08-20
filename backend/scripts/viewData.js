// backend/scripts/viewData.js - View stored data
const {connectDB} = require('../config/database');

async function viewData() {
  try {
    const db = await connectDB();

    console.log('=== INCOME DATA ===');
    const incomes = await db.collection('income').find({}).toArray();
    incomes.forEach(income => {
      console.log(`${income.source}: $${income.amount} (${income.date})`);
    });

    console.log('\n=== EXPENSE DATA ===');
    const expenses = await db.collection('expense').find({}).toArray();
    expenses.forEach(expense => {
      console.log(`${expense.category}: $${expense.amount} (${expense.date})`);
    });
  } catch (error) {
    console.error(error);
  }
}

viewData();

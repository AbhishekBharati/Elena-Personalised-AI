const express = require('express');
const { addItem, viewItems, totalExpenseByDate } = require('../controllers/expense');
const router = express.Router();

router.post('/addItem', addItem);
router.get('/viewAllItems', viewItems);
router.get('/totalExpensesByDate', totalExpenseByDate);

module.exports = router;
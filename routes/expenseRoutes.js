const express = require('express');
const { addItem, viewItems } = require('../controllers/expense');
const router = express.Router();

router.post('/addItem', addItem);
router.get('/viewAllItems', viewItems);

module.exports = router;
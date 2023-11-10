const Expense = require('../models/expense');

const addItem = async (req, res) => {
    try {
        const {item, amount} = req.body;
        
        const newItem = await Expense.create({
            item,
            amount
        })
        res.status(200).json(newItem);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}

const viewItems = async (req, res) => {
    try {
        const Items = await Expense.find()
        res.status(200).json(Items);
    } catch (err){
        console.error(err);
        res.status(500).send('Internal server Error');
    }
}

module.exports = {
    addItem,
    viewItems
}
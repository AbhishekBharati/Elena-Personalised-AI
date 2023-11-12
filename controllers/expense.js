const Expense = require('../models/expense');
const moment = require('moment-timezone');

const addItem = async (req, res) => {
    try {
        const {item, amount} = req.body;
         
        const newItem = await Expense.create({
            item,
            amount,
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
        
        const IstStandards = Items.map(item => {
           return {
            ...item._doc,
            createdAt : moment(item.createdAt).tz('Asia/Kolkata').format()
           }
        });

        res.status(200).json(IstStandards);
    } catch (err){
        console.error(err);
        res.status(500).send('Internal server Error');
    }
}

const totalExpenseByDate = async (req, res) => {
    try {
        const expenses = await Expense.find(); 

        var istDates = expenses.map(item => {
            return {
                ...item,
                date : moment(item.createdAt).tz('Asia/Kolkata').format(),
                amount : item.amount
            }
        })
        
        
        const totalByDate = istDates.reduce((acc, expense) => {
            const date = expense.date.split('T')[0];
             
            // Find if there's already an entry for this date :-
            const existingEntry = acc.find(entry => entry.date === date);
            
            if (existingEntry){
                // If entry exists the increment it's amount
                existingEntry.amount += expense.amount
            } else {
                // Otherwise, create a new entry 
                acc.push({ date : date, amount : expense.amount})
            }

            return acc;
        }, []);

        res.json(totalByDate);
    } catch(err) {
        console.log(err);
        res.status(500).json({
            message : 'Internal Server Error'
        })
    }
}

module.exports = {
    addItem,
    viewItems,
    totalExpenseByDate
}
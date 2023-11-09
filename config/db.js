// MongoDB Configuration :-
const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        // Reading the connection string from env Variable :-
        const dbURI = process.env.MONGODB_URI;
        
        // Connect to MongoDB
        await mongoose.connect(dbURI);
        
        console.log('MongoDB Connected Successfully.');
    } catch (err) {
        console.error("Mongo Connection Failed :-", err.message);
    }
}

module.exports = connectDB;
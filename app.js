const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

// Initialising app
const app = express();

// Enable CORS Middlewares :-
app.use(cors());

// MongoDB Connection :-
connectDB();

app.use(express.json());
port = process.env.PORT;

app.listen(port, () => {
    console.log('Server is Running on ' + port);
})

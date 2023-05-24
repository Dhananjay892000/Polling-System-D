// configuration for creating database connection
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Dhananjay:Dhanu@123@cluster0.s1jdgq3.mongodb.net/polling_system?retryWrites=true&w=majority");

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;

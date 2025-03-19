// config/mongoDBConnection.js
const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGODB_URI;

async function connectMongoDB() {
    try {
        await mongoose.connect(uri);
        console.log('Mongo DB connection success!👾');
    } catch (error) {
        console.error('Mongo DB connection failed! ❌', error);
        throw error; 
    }
}

module.exports = {
    connectMongoDB
};
// index.js
const express = require('express');
const { connectMongoDB } = require('./config/mongoDBConnection');
const { authenticateToken } = require('./middlewares/authenticateToken.js');
const authController = require('./controllers/authController.js');
const postController = require('./controllers/postController.js');
require('dotenv').config();
const app = express();


const PORT = process.env.PORT;

app.use(express.json());

connectMongoDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Failed to start server:', error);
        process.exit(1); 
    });


app.use('/api/', authController);
app.use('/api/post', authenticateToken, postController);
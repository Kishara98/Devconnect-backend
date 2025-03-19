const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController.js'); 
const router = express.Router();

router.post('/signUp', registerUser);  
router.post('/login', loginUser);     

module.exports = router;

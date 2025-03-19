const express = require('express');
const { validateSignUpRequestFields, validateLoginRequestFields } = require('../utils/validate');
const { userRegister, userLogin } = require('../services/authService.js');

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json('Testing..........');
})

router.post('/signUp', async(req, res) => {
    const body = req.body;
    validateSignUpRequestFields(body);
    
    const responseObj = await userRegister(body);
    if(responseObj.status === 'success') {
        res.status(201).json(responseObj.message);
    } else {
        res.status(500);
    }
})
router.post('/login', async(req, res) => {
    const body = req.body;
    validateLoginRequestFields(body);

    const responseObj = await userLogin(req);
    if(responseObj.status === 'success') {
        res.status(200).json(responseObj.message);
    } else {
        res.status(responseObj.statusCode).json(responseObj.message);
    }
})

module.exports = router;
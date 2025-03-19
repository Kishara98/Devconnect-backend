const express = require('express');
const { getPosts } = require('../controllers/postController.js');

const router = express.Router();

router.get('/', getPosts);  

module.exports = router;

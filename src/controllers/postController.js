const express = require('express');
const router = express.Router();

async function getPosts(req, res) {
    return res.status(200).json({
        message: "Fetched all posts!!"
    })
}

module.exports = {
    getPosts
}
/*
    Route: host + /api/posts
 */
const express = require('express');
const router = express.Router();

// Controllers
const { add } = require('../controllers/posts');

router.post('/', add);

module.exports = router;

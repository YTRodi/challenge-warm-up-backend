/*
    Route: host + /api/posts
 */
const express = require('express');
const router = express.Router();

// Controllers
const { add, list, getPostById, update, deletePost } = require('../controllers/posts');

router.post('/', add);
router.get('/', list);
router.get('/:id', getPostById);
router.patch('/:id', update);
router.delete('/:id', deletePost);

module.exports = router;

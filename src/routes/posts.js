/*
    Route: host + /api/posts
 */
const express = require('express');
const router = express.Router();

// Middlewares
const { check } = require('express-validator');
const { fieldsValidator } = require('../middlewares/fieldsValidator');

// Controllers
const { add, list, getPostById, update, deletePost } = require('../controllers/posts');

router.post(
	'/',
	[
		check('title', 'The title is requiered').not().isEmpty(),
		check('content', 'The content is requiered').not().isEmpty(),
		check('image', 'The image is requiered').not().isEmpty(),
		check('category', 'The category is requiered').not().isEmpty(),
		fieldsValidator,
	],
	add
);

router.get('/', list);

router.get('/:id', getPostById);

router.patch('/:id', update);

router.delete('/:id', deletePost);

module.exports = router;

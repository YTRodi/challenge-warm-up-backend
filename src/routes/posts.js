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
		check('title', 'The title must be more than 4 characters').isLength({ min: 4 }),
		check('content', 'The content is requiered').not().isEmpty(),
		check('content', 'The content must be more than 4 characters').isLength({ min: 4 }),
		check('image', 'The image is requiered').not().isEmpty(),
		check('image', 'The image must be more than 4 characters').isLength({ min: 4 }),
		check('category', 'The category is requiered').not().isEmpty(),
		check('category', 'The category must be more than 4 characters').isLength({ min: 4 }),
		fieldsValidator,
	],
	add
);

router.get('/', list);

router.get('/:id', getPostById);

router.patch(
	'/:id',
	[
		check('title', 'The title is requiered').not().isEmpty(),
		check('title', 'The title must be more than 4 characters').isLength({ min: 4 }),
		check('content', 'The content is requiered').not().isEmpty(),
		check('content', 'The content must be more than 4 characters').isLength({ min: 4 }),
		check('image', 'The image is requiered').not().isEmpty(),
		check('image', 'The image must be more than 4 characters').isLength({ min: 4 }),
		check('category', 'The category is requiered').not().isEmpty(),
		check('category', 'The category must be more than 4 characters').isLength({ min: 4 }),
		fieldsValidator,
	],
	update
);

router.delete('/:id', deletePost);

module.exports = router;

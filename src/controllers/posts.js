const { response } = require('express');
const chalk = require('chalk');

const { Post } = require('../database/database');
const { handleArrayOfPosts } = require('../helpers/handleArray');
const isImageURL = require('valid-image-url');

const createPost = async (req, res = response) => {
	const { image } = req.body;

	try {
		const isValidImgUrl = await isImageURL(image);

		if (!isValidImgUrl)
			return res.status(400).json({
				ok: false,
				msg: `The url of the image isn't valid.`,
			});

		const bodyPost = {
			...req.body,
			createdAt: new Date(),
		};

		const result = await Post.create(bodyPost);

		res.status(201).json({
			ok: true,
			newPost: result,
		});
	} catch (error) {
		console.log(chalk.bgRed(error));

		res.status(500).json({
			ok: false,
			msg: `The resource couldn't be created - Please talk to the administrator.`,
		});
	}
};

const getPosts = async (req, res = response) => {
	try {
		const allPosts = await Post.findAll();

		const result = handleArrayOfPosts(allPosts);

		res.status(200).json({
			ok: true,
			posts: result,
		});
	} catch (error) {
		console.log(chalk.bgRed(error));

		res.status(500).json({
			ok: false,
			msg: `Couldn't list resources - Please talk to the administrator.`,
		});
	}
};

const getPostById = async (req, res = response) => {
	const { id } = req.params;

	try {
		const result = await Post.findOne({
			where: { id },
		});

		result !== null
			? res.status(200).json(result)
			: res.status(400).json({
					ok: false,
					msg: `There is no post with that id.`,
			  });
	} catch (error) {
		console.log(chalk.bgRed(error));

		res.status(500).json({
			ok: false,
			msg: `The resource couldn't be listed - Please talk to the administrator.`,
		});
	}
};

const updatePost = async (req, res = response) => {
	const { id } = req.params;

	try {
		const updatedPost = {
			...req.body,
		};

		const postById = await Post.findOne({
			where: { id },
		});

		if (!postById)
			return res.status(400).json({
				ok: false,
				msg: `There is no post with that id.`,
			});

		const [numberOfAffectedRows] = await Post.update(updatedPost, {
			where: { id },
		});

		res.status(200).json({
			ok: true,
			post: updatePost,
			msg: 'Updated successfully',
			affectedRows: numberOfAffectedRows,
		});
	} catch (error) {
		console.log(chalk.bgRed(error));

		res.status(500).json({
			ok: false,
			msg: `The resource couldn't be updated - Please talk to the administrator.`,
		});
	}
};

const deletePost = async (req, res = response) => {
	const { id } = req.params;

	try {
		const postById = await Post.findOne({
			where: { id },
		});

		if (!postById)
			return res.status(400).json({
				ok: false,
				msg: `There is no post with that id.`,
			});

		const result = await Post.destroy({
			where: { id },
		});

		if (result !== 0) {
			res.status(200).json({
				ok: true,
				msg: 'Deleted successfully',
			});
		}
	} catch (error) {
		console.log(chalk.bgRed(error));

		res.status(500).json({
			ok: false,
			msg: `The resource couldn't be updated - Please talk to the administrator.`,
		});
	}
};

module.exports = {
	add: createPost,
	list: getPosts,
	getPostById,
	update: updatePost,
	deletePost,
};

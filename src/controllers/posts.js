const { response } = require('express');
const chalk = require('chalk');

const { Post } = require('../database/database');

const createPost = async (req, res = response) => {
	try {
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
		const result = await Post.findAll();

		res.status(200).json({
			ok: true,
			operations: result,
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

module.exports = {
	add: createPost,
	list: getPosts,
	getPostById,
	update: updatePost,
};

const { response } = require('express');

const createPost = (req, res = response) => {
	console.log(req.body);
};

module.exports = {
	add: createPost,
};

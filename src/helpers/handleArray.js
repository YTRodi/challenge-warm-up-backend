const handleArrayOfPosts = (arrayPosts) => {
	const arraySortedByDateDesc = sortByDateDesc(arrayPosts);

	const arrayMaped = mapArrayPosts(arraySortedByDateDesc);

	return arrayMaped;
};

const sortByDateDesc = (arrayPosts) => {
	return arrayPosts.sort((a, b) => {
		return b.createdAt.getTime() - a.createdAt.getTime();
	});
};

const mapArrayPosts = (arrayPosts) => {
	return arrayPosts.map((post) => ({
		id: post.id,
		title: post.title,
		image: post.image,
		category: post.category,
		createdAt: post.createdAt,
	}));
};

module.exports = {
	handleArrayOfPosts,
};

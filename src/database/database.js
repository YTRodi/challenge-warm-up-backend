const { Sequelize } = require('sequelize');
const { databaseCredentials } = require('./config');
const chalk = require('chalk');

const { database, user, password, host } = databaseCredentials;

const sequelizeInstance = new Sequelize(database, user, password, {
	host,
	dialect: 'mysql',
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelizeInstance;

// Models/tables
db.Post = require('../models/Post')(sequelizeInstance);

// Connect DB
db.connectDB = async () => {
	try {
		await sequelizeInstance.sync({ force: false });
		console.log(chalk.magenta('DB Connected successfully !'));
	} catch (error) {
		console.log(chalk.red(`Error connecting to database.`));
		console.log(chalk.yellow(error));
	}
};

module.exports = db;

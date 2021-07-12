const {Sequelize, DataTypes, Model} = require('sequelize');

// Creates a database named 'sequelize'
// Lets us add our models (tables) later
const sequelize = new Sequelize('database', 'username','password', {
	dialect: 'sqlite',
	storage : './Discography.sqlite', // file location of our db
	logging: false
} )



module.exports = {sequelize, DataTypes, Model};
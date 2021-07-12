const {sequelize, DataTypes, Model} = require('./db');

//Creates Artist table
class Artist extends Model {

}

//Creates attributes (columns) for our model
Artist.init({
    name: DataTypes.STRING,
    year_debuted: DataTypes.STRING,
    genre: DataTypes.ENUM('Rock', 'Pop')
}, {
	sequelize, // What database is our table stored in?
	timestamps: false,
});


module.exports = { Artist };
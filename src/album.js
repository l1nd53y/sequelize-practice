const {sequelize, DataTypes, Model} = require('./db');

class Album extends Model {

}

Album.init({
	name: DataTypes.STRING,
	year_released: DataTypes.STRING
}, {
	sequelize,
	timestamps: false,
});


module.exports = { Album };
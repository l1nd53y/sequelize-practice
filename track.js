const {sequelize, DataTypes, Model} = require('./db');

class Track extends Model {

}

Track.init({
	name: DataTypes.STRING,
	from_album: DataTypes.STRING
}, {
	sequelize,
	timestamps: false,
});


module.exports = { Track };
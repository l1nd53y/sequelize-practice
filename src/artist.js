const {sequelize, DataTypes, Model} = require('./db');

class Artist extends Model {

}

Artist.init({
    name: DataTypes.STRING,
    year_debuted: DataTypes.STRING
}, {
	sequelize,
	timestamps: false,
});


module.exports = { Artist };
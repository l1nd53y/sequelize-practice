const {sequelize, DataTypes, Model} = require('./db');

const { Artist } = require('../src/artist');
const { Album } = require('../src/album');
const { Track } = require('../src/track');


//Create our Association!
Track.belongsTo(Album); //adds a foreign key on the track table, for the album it belongs to
Album.belongsTo(Artist); // adds a foreign key on the album table, for the artist it belongs to
Album.hasMany(Track); //gives us Sequelize magic methods
Artist.hasMany(Album); 

module.exports = {Artist, Album, Track};


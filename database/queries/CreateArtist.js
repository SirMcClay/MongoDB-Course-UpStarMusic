const Artist = require('../models/artist');

/**
 * Finds a single artist in the artist collection.
 * @param {object} artistProps - Object containing a name, age, yearsActive, and genre
 * @return {promise} A promise that resolves with the Artist that was created
 */
module.exports = (artistProps) => {
	// artistProps just have a object with all properties to create our new artist
	const artist = new Artist(artistProps);
	return artist.save();
};

var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Game Model
 * ==========
 */
var Game = new keystone.List('Game');

Game.add({
	players: {type: Types.Relationship, ref: 'Profile', many: true},
})


/**
 * Registration
 */
Game.defaultColumns = 'name, email, isAdmin';
Game.register();

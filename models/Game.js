var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Game Model
 * ==========
 */
var Game = new keystone.List('Game');

Game.add({
	name: { type: String, default: 'New Game' },
})


/**
 * Registration
 */
Game.defaultColumns = 'name, email, isAdmin';
Game.register();

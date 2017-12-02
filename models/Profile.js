var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Profile Model
 * ==========
 */
var Profile = new keystone.List('Profile');

Profile.add({
	Profile: { type: Types.Relationship, ref: 'Profile', required: true },
	saldo: { type: Number, default: 100000 },
	game: { type: Types.Relationship, ref: 'Game' },
	moves: { type: String, default: '0,' * 39 + '0' },
})


/**
 * Registration
 */
Profile.defaultColumns = 'name, email, isAdmin';
Profile.register();

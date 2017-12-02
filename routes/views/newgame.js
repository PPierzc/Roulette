var keystone = require('keystone');
const Game = keystone.list('Game');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	const gameName = req.body.gameName;

	var newGame = new Game.model({
		name: gameName,
	});

	newGame.save(function (err) {
		if (err) {
			res.json({
				status: 500,
				message: 'Server Error',
			});
		}
		res.json({
			status: 200,
			message: 'Sucess',
		});
	});


};

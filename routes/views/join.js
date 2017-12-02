var keystone = require('keystone');
const Profile = keystone.list('Profile');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	const userID = req.body.userID;
	const gameID = req.body.gameID;
	Profile.model.findById(userID)
		.exec(function (err, result) {
			if (err) {
				res.json({
					status: 500,
					message: 'Server Error',
				});
				if (!result) {
					res.json({
						status: 404,
						message: 'Player not found',
					});
				}
				result.game = gameID;
				result.save(function (err) {
					if (err) {
						res.json({
							status: 500,
							message: 'Server Error',
						});
					}
					res.json({
						status: 200,
						body: {
							saldo: result.saldo,
						},
					});
				});

			}
		});


};

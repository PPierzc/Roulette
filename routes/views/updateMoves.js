var keystone = require('keystone');
const Profile = keystone.list('Profile');

exports = module.exports = function (req, res) {

	const moves = req.body.moves;
	const userID = req.body.userID;
	Profile.model.findById(userID)
		.exec(function (err, result) {
			if (err) {
				res.json({
					status: 500,
					message: 'Something went wrong',
				});
			}
			result.moves = moves;
			result.save(function (err) {
				if (err) {
					res.json({
						status: 500,
						message: 'Error',
					});
				}
				res.json({
					status: 200,
				});
			});
		});


};

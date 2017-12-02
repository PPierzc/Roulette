var keystone = require('keystone');
const User = keystone.list('User');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	const email = req.body.email;
	const pass = req.body.pass;
	User.model.findOne()
		.where('email', email)
		.populate('profile')
		.exec(function (err, result) {
			if (err) {
				res.send(JSON.stringify({
					status: 404,
					message: 'Nie ma takiego użytkownika',
					access_token: '',
				}));
			};
			if (!result) {
				res.send(JSON.stringify({
					status: 403,
					message: 'Nie poprawne hasło lub login',
					access_token: '',
				}));
			} else {
				result._.password.compare(pass, function (err, success) {
					if (err) {
						res.send(JSON.stringify({
							staus: 403,
							message: 'Nie poprawne hasło lub login',
							access_token: '',
						}));

					} else {
						res.json({
							name: result.name,
							id: result.profile._id,
							access_token: result._id,
						});
					}
				});
			}
		});
};

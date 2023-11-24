const jwt = require('jsonwebtoken');

const checkLogin = (req, res, next) => {
	const { authorization } = req.headers;

	if (authorization) {
		const token = authorization.split(' ')[1];

		try {
			const result = jwt.verify(token, process.env.JWT_SIGN);

			req.username = result.username;
			req.userId = result.userId;
			next();
		} catch {
			next('Authorization failed');
		}
	} else {
		next('Authorization failed');
	}
};

module.exports = checkLogin;

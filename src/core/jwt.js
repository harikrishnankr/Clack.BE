const expressJwt = require('express-jwt');
const config = require('../db/db.config');
const userService = require('../modules/users');

const jwt = () => {
    const secret = config.jwt_secret;
    return expressJwt({ secret, isRevoked }).unless({
        path: [
            // public routes that don't require authentication
            '/user/authenticate',
            '/user/new'
        ]
    });
};

const isRevoked = async (req, payload, done) => {
    const user = await userService.getById(payload.sub);

    // revoke token if user no longer exists
    if (!user) {
        return done(null, true);
    }

    done();
};

module.exports = jwt;

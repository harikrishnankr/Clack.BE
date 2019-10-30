const User = require('../schemas/user');
const crypto = require('crypto');

exports.newUser = (req, res) => {
    let salt = crypto.randomBytes(16).toString('base64');
    let hash = crypto
        .createHmac('sha512',salt)
        .update(req.body.password)
        .digest("base64");
    req.body.password = salt + "$" + hash;
    req.body.permissionLevel = 1;
    new User(req.body).save()
        .then((result) => {
            res.status(201).send({id: result._id});
        });
};
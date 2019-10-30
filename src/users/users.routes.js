const UsersController = require('./new-user.controller');

exports.routesConfig = (app) => { 
    app.put('/user/new', [
        UsersController.newUser
    ]);
}
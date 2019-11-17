exports.setRoutes = (app) => {
    app.use('/users', require('./modules/users/users.routes'));
};

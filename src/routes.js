exports.setRoutes = (app) => {
    app.use('/user', require('./modules/users'));
};

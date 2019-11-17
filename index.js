const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('./src/db/db.config');
const errorHandler = require('./src/core/error-handler');
const jwt = require('./src/core/jwt');

const apiEndpoints = require('./src/base.routes');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
    if (req.method === 'OPTIONS') {
        return res.send(200);
    } else {
        return next();
    }
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// use JWT auth to secure the api
app.use(jwt());

// api routes
apiEndpoints.setRoutes(app);

// global error handler
app.use(errorHandler);

app.listen(config.port, () => {
    console.log('app listening at port %s', config.port);
});
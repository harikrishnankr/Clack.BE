const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const config = require('./src/db/db.config');
const errorHandler = require('./src/core/error-handler');
const jwt = require('./src/core/jwt');
const cors = require('./src/core/cors');
const apiEndpoints = require('./src/base.routes');

app.use(cors);
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
const config = require('./db.config');
const mongoose = require('mongoose');

let count = 0;
const connectWithRetry = () => {
    mongoose
    .connect(config.connectionString, config.options)
    .then(() => console.log('MongoDB is connected'))
    .catch(() => {
        console.log('MongoDB connection unsuccessful, retry after 5 seconds. ', ++count);
        setTimeout(connectWithRetry, 5000)
    })
};
connectWithRetry();

exports.mongoose = mongoose;
module.exports = {
    port: 3600,
    jwt_secret: "hari@123.mongo",
    jwt_expiration_in_seconds: 36000,
    connectionString: "mongodb://localhost:27019/clack",
    options: {
        autoIndex: false,
        reconnectTries: 30,
        reconnectInterval: 500,
        poolSize: 10,
        bufferMaxEntries: 0
    }
};

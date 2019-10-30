const mongoose = require('../db').mongoose;
const Schema = mongoose.Schema;

exports.User = mongoose.model('User', new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String
}));
const db = require('../config/db');
const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    email: {
        type: String,
        lowercase: true,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
});



const UserModel = db.model('user',userSchema);
module.exports = UserModel;
const { Timestamp } = require('bson');
const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        user_name: {
            type: String,
            require: true
        },
        user_email: {
            type: String,
            require: true
        },
        user_password: {
            type: String,
            require: true
        },
        status: {
            type: String,
            default: 1
        }
    },
    {
        Timestamp: true
    }
);


const User = mongoose.model('user',userSchema);
module.exports = User;


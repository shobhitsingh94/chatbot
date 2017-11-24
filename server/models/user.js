const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true,
        require: true
    },
    status : {
        type : String
    },
    userid : {
        type : Number
    },
    password : {
        type: String
    },
    admin: {
        type: boolean
    }
});

module.exports = mongoose.model('User', UserSchema);

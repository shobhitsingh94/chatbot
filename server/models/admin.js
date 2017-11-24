const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
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
    employeeId : {
        type : Number
    },
    userid : {
        type : Number
    },
    password : {
        type: String
    }
});

module.exports = mongoose.model('Admin', AdminSchema);

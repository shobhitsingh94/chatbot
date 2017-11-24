const Admins = require('../models/user');
const helper = require('../helper/response');

module.exports = {

    getAllAdmins: function (req, res, next) {
        Admins.find({}).exec(function (err, admins) {
            if (err) {
                res.status(422).json(helper.responseObject(422, err, null, true));
            } else {
                req.result = admins;
                next();
            }
        });
    }
};





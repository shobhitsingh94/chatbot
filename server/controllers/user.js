const Users = require('../models/user');
const helper = require('../helper/response');

module.exports = {

    createUser: function (req, res, next) {
        console.log("request==============", req.body);
        Users.findOne({
            name: req.body.name,
            email: req.body.email
        }).exec(function (err,user) {
            if (err) {
                res.status(422).json(helper.responseObject(422, err, null, true));
            } else if(user){
                req.result = user;
                next();
            }else {
                new Users(req.body).save(function (err, user) {
                    console.log('error===========',user, err);
                    if (err) {
                        res.status(422).json(helper.responseObject(422, err, null, true));
                    } else {
                        req.result = user;

                        next();
                    }
                });
            }
        });
    }
};





const user = require('./user');
const admins = require('./admins');

module.exports = function (app) {
    //var corsOptions = {
    //    origin: "http://" + appConfig.corsConfig.host + ":" + appConfig.frontEndPort
    //};

    app.use('/api/user', user);
    app.use('/api/admins', admins);

};

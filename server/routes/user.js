const express = require('express');
const userController = require('../controllers/user');
const router = express.Router();
const helper = require('../helper/response');

router.post('/', [userController.createUser, helper.handleSuccess]);

module.exports = router;

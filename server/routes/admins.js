const express = require('express');
const adminsController = require('../controllers/admin');
const router = express.Router();
const helper = require('../helper/response');

router.get('/', [adminsController.getAllAdmins, helper.handleSuccess]);

module.exports = router;

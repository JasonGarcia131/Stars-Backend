const express = require('express');
const router = express.Router();
const feedbackController = require("../controllers/feedbackController");
const ROLES_LIST = require('../config/roles_list')
const verifyRoles = require('../middleware/verifyRoles');
const verifyJWT = require('../middleware/verifyJWT');

router.route('/')
    .post([verifyJWT, verifyRoles(ROLES_LIST.User)], feedbackController.createFeedback)
    .get([verifyJWT, verifyRoles(ROLES_LIST.Admin)], feedbackController.getFeedback);

module.exports = router;
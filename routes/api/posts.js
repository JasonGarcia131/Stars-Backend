const express = require('express');
const router = express.Router();
const postsController = require('../../controllers/postsController');
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');
const paginate = require("../../middleware/paginate");
const verifyJWT = require("../../middleware/verifyJWT");
const Post = require("../../model/Post");

router.route('/')
    .get(postsController.getAllPosts)
    .post([verifyJWT, verifyRoles(ROLES_LIST.User)], postsController.createPost)

router.route('/:id')
    .delete([verifyJWT, verifyRoles(ROLES_LIST.User)], postsController.deletePost);

router.route('/paginate')
    .get(paginate(Post), postsController.getUserPosts);

router.route('/paginate/public')
    .get(paginate(Post), postsController.getUserPosts);


module.exports = router;
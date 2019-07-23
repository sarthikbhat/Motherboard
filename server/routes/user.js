const router = require("express").Router();
const UserController = require('../controllers/user');

router.post(
    '/register',
    UserController.createUser
);

module.exports = router;
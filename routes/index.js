const express = require("express");
const router = express.Router();
const LoginManagement = require("../controllers/LoginManagement.controller");

router.route('/signup').post(LoginManagement.signup);





module.exports = router
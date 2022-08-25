const express = require("express");
const router = express.Router();
const LoginManagement = require("../controllers/LoginManagement.controller");
const BalanceManagement = require("../controllers/balance.Controller")

router.route('/signup').post(LoginManagement.signup);
router.route('/balance').post(BalanceManagement.balance);




module.exports = router
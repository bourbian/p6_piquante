const express = require('express');
const router = express.Router();
const max = require("../middleware/limite")

const userCtrl = require('../controllers/userControllers');

router.post('/signup', userCtrl.signup);
router.post('/login', max.limiter, userCtrl.login);

module.exports = router;
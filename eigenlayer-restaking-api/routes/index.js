// routes/index.js
const express = require('express');
const restakerRoutes = require('./restakers');
const validatorRoutes = require('./validators');
const rewardRoutes = require('./rewards');

const router = express.Router();

router.use('/restakers', restakerRoutes);
router.use('/validators', validatorRoutes);
router.use('/rewards', rewardRoutes);

module.exports = router;

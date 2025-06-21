// routes/rewards.js
const express = require('express');
const { getRewardsByAddress } = require('../controllers/rewardController');
const router = express.Router();

// GET /rewards/:address
router.get('/:address', getRewardsByAddress);

module.exports = router;

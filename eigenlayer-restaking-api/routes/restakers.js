// routes/restakers.js
const express = require('express');
const { getRestakers } = require('../controllers/restakerController');
const router = express.Router();

// GET /restakers
router.get('/', getRestakers);

module.exports = router;

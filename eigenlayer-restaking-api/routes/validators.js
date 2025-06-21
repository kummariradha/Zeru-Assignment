// routes/validators.js
const express = require('express');
const {
  getValidators,
  getValidatorById,
} = require('../controllers/validatorController');
const router = express.Router();

// GET /validators
router.get('/', getValidators);

// GET /validators/:operatorAddress
router.get('/:operatorAddress', getValidatorById);

module.exports = router;

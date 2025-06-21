// controllers/validatorController.js
const Validator = require('../models/validator');

// GET /validators
exports.getValidators = async (req, res) => {
  try {
    const all = await Validator.find({});
    res.json(all);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error while fetching validators' });
  }
};

// GET /validators/:operatorAddress
exports.getValidatorById = async (req, res) => {
  try {
    const { operatorAddress } = req.params;
    const validator = await Validator.findOne({ operatorAddress });
    if (!validator) {
      return res.status(404).json({ error: 'Validator not found' });
    }
    res.json(validator);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error while fetching validator' });
  }
};

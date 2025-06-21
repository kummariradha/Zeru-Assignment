// models/validator.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const SlashEventSchema = new Schema({
  timestamp: { type: Number, required: true },
  amountStETH: { type: String, required: true },
  reason: { type: String, default: null }
});

const ValidatorSchema = new Schema({
  operatorAddress: { type: String, required: true, unique: true, lowercase: true },
  totalDelegatedStakeStETH: { type: String, required: true },
  slashHistory: [SlashEventSchema],
  status: { type: String, required: true, enum: ['active', 'jailed', 'slashed', 'inactive'], default: 'active' },
  lastUpdated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Validator', ValidatorSchema);


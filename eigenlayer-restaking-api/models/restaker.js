// models/restaker.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const RestakerSchema = new Schema({
  userAddress: { type: String, required: true, unique: true, lowercase: true },
  amountRestakedStETH: { type: String, required: true },
  targetAVSOperatorAddress: { type: String, required: true, lowercase: true },
  lastUpdated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Restaker', RestakerSchema);


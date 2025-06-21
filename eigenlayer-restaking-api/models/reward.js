// models/reward.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const RewardBreakdownSchema = new Schema({
  operatorAddress: { type: String, required: true, lowercase: true },
  amountStETH: { type: String, required: true },
  timestamps: { type: [Number], default: [] }
});

const RewardSchema = new Schema({
  walletAddress: { type: String, required: true, unique: true, lowercase: true },
  totalRewardsReceivedStETH: { type: String, required: true },
  rewardsBreakdown: [RewardBreakdownSchema],
  lastUpdated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Reward', RewardSchema);


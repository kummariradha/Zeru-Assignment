// controllers/rewardController.js
const Reward = require('../models/reward');

// GET /rewards/:address
exports.getRewardsByAddress = async (req, res) => {
  try {
    const { address } = req.params;
    const record = await Reward.findOne({ walletAddress: address.toLowerCase() });
    if (!record) {
      return res.status(404).json({ error: 'No rewards found for this address' });
    }

    // Format output to match spec
    const response = {
      walletAddress: record.walletAddress,
      totalRewardsReceivedStETH: record.totalRewardsReceivedStETH,
      rewardsBreakdown: record.rewardsBreakdown.map(rb => ({
        operatorAddress: rb.operatorAddress,
        amountStETH: rb.amountStETH,
        timestamps: rb.timestamps
      })),
    };
    res.json(response);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error while fetching rewards' });
  }
};

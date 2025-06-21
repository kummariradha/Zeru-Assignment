require('dotenv').config();
const mongoose = require('mongoose');
const { request, gql } = require('graphql-request');

const Restaker = require('../models/restaker');
const Validator = require('../models/validator');
const Reward = require('../models/reward');
const connectDB = require('../config');

const SUBGRAPH_URL = process.env.SUBGRAPH_URL;

async function fetchRestakers() {
  const q = gql`
    query {
      delegations(first: 1000) {
        user
        amount
        operator
      }
    }`;
  const { delegations } = await request(SUBGRAPH_URL, q);
  for (const d of delegations) {
    await Restaker.updateOne(
      { userAddress: d.user.toLowerCase() },
      {
        amountRestakedStETH: d.amount,
        targetAVSOperatorAddress: d.operator.toLowerCase(),
        lastUpdated: new Date()
      },
      { upsert: true }
    );
  }
  console.log(`Fetched ${delegations.length} restakers`);
}

async function fetchValidators() {
  const q = gql`
    query {
      operators(first: 1000) {
        id
        totalDelegated
        status
        slashEvents {
          timestamp
          amount
          reason
        }
      }
    }`;
  const { operators } = await request(SUBGRAPH_URL, q);
  for (const op of operators) {
    await Validator.updateOne(
      { operatorAddress: op.id.toLowerCase() },
      {
        totalDelegatedStakeStETH: op.totalDelegated,
        status: op.status,
        slashHistory: op.slashEvents.map(e => ({
          timestamp: parseInt(e.timestamp),
          amountStETH: e.amount,
          reason: e.reason || null
        })),
        lastUpdated: new Date()
      },
      { upsert: true }
    );
  }
  console.log(`Fetched ${operators.length} validators`);
}

async function fetchRewards() {
  const q = gql`
    query {
      rewards(first: 1000) {
        delegator
        totalRewards
        breakdowns {
          operator
          amount
          timestamps
        }
      }
    }`;
  const { rewards } = await request(SUBGRAPH_URL, q);
  for (const r of rewards) {
    await Reward.updateOne(
      { walletAddress: r.delegator.toLowerCase() },
      {
        totalRewardsReceivedStETH: r.totalRewards,
        rewardsBreakdown: r.breakdowns.map(b => ({
          operatorAddress: b.operator.toLowerCase(),
          amountStETH: b.amount,
          timestamps: b.timestamps.map(t => parseInt(t))
        })),
        lastUpdated: new Date()
      },
      { upsert: true }
    );
  }
  console.log(`Fetched ${rewards.length} reward records`);
}

(async () => {
  await connectDB();
  await fetchRestakers();
  await fetchValidators();
  await fetchRewards();
  console.log('Data fetch complete');
  process.exit(0);
})();

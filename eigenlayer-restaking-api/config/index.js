// config/index.js
// config/index.js
require('dotenv').config();
const mongoose = require('mongoose');

module.exports = async function connectDB() {
  const uri = process.env.MONGO_URI;
  console.log('Connecting to MongoDB:', uri);

  try {
    await mongoose.connect(uri);  // No need for parser or topology options
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Connection error:', err);
    process.exit(1);
  }
};


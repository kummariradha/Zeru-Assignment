// controllers/restakerController.js
const Restaker = require('../models/restaker');

// GET /restakers
exports.getRestakers = async (req, res) => {
  try {
    const data = await Restaker.find({});
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error while fetching restakers' });
  }
};

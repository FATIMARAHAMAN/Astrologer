const express = require('express');
const router = express.Router();
const Astrologer = require('../models/astrologer');

// POST API to Register Astrologer
router.post('/register', async (req, res) => {
  try {
    const astrologer = await Astrologer.create(req.body);
    res.status(201).json(astrologer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET API to List All Astrologers
router.get('/', async (req, res) => {
  try {
    const astrologers = await Astrologer.find();
    res.json(astrologers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT API to Edit Astrologer Data
router.put('/:id', async (req, res) => {
  try {
    const astrologer = await Astrologer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(astrologer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
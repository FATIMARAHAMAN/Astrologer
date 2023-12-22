const mongoose = require('mongoose');

const astrologerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gender: { type: String, required: true },
  email: { type: String, required: true },
  languages: { type: [String], required: true },
  specialties: { type: [String], required: true },
});

const Astrologer = mongoose.model('Astrologer', astrologerSchema);

module.exports = Astrologer;
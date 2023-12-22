const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const astrologerRoutes = require('./routes/astrologers');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/astrologersDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/astrologers', astrologerRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
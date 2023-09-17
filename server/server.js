const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Enable CORS
app.use(cors());

// DB Config
const db = require('./config/db').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require('./config/passport')(passport);

// Routes
const authRoutes = require('./routes/auth');
const gameRoutes = require('./routes/game');
const transactionRoutes = require('./routes/transaction');
const userRoutes = require('./routes/user');

app.use('/api/auth', authRoutes);
app.use('/api/game', gameRoutes);
app.use('/api/transaction', transactionRoutes);
app.use('/api/user', userRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
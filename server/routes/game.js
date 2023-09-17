const express = require('express');
const router = express.Router();
const Game = require('../models/Game');

// Get all games
router.get('/', async (req, res) => {
  try {
    const games = await Game.find();
    res.json(games);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Get a specific game
router.get('/:id', async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);
    if (!game) {
      return res.status(404).json({ msg: 'Game not found' });
    }
    res.json(game);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Game not found' });
    }
    res.status(500).send('Server Error');
  }
});

// Create a new game
router.post('/', async (req, res) => {
  const { name, description } = req.body;

  try {
    const newGame = new Game({
      name,
      description
    });

    const game = await newGame.save();
    res.json(game);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Update a game
router.put('/:id', async (req, res) => {
  const { name, description } = req.body;

  try {
    let game = await Game.findById(req.params.id);

    if (!game) {
      return res.status(404).json({ msg: 'Game not found' });
    }

    game.name = name;
    game.description = description;

    game = await game.save();

    res.json(game);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Game not found' });
    }
    res.status(500).send('Server Error');
  }
});

// Delete a game
router.delete('/:id', async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);

    if (!game) {
      return res.status(404).json({ msg: 'Game not found' });
    }

    await game.remove();

    res.json({ msg: 'Game removed' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Game not found' });
    }
    res.status(500).send('Server Error');
  }
});

module.exports = router;
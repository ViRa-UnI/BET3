import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GameDetails = () => {
  const [game, setGame] = useState(null);

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const response = await axios.get('/api/game/:id');
        setGame(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchGame();
  }, []);

  return (
    <div>
      {game ? (
        <div>
          <h2>{game.name}</h2>
          <p>{game.description}</p>
          <p>Minimum Bet: {game.minBet}</p>
          <p>Maximum Bet: {game.maxBet}</p>
        </div>
      ) : (
        <p>Loading game details...</p>
      )}
    </div>
  );
};

export default GameDetails;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Games = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get('/api/games');
        setGames(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchGames();
  }, []);

  return (
    <div>
      <h1>Games</h1>
      <ul>
        {games.map((game) => (
          <li key={game._id}>{game.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Games;
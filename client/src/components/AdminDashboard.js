import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [games, setGames] = useState([]);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getUsers();
    getGames();
    getTransactions();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get('/api/users');
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getGames = async () => {
    try {
      const response = await axios.get('/api/games');
      setGames(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getTransactions = async () => {
    try {
      const response = await axios.get('/api/transactions');
      setTransactions(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>{user.username}</li>
        ))}
      </ul>
      <h2>Games</h2>
      <ul>
        {games.map((game) => (
          <li key={game._id}>{game.name}</li>
        ))}
      </ul>
      <h2>Transactions</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction._id}>{transaction.amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
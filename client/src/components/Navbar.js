import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/games">Games</a></li>
        <li><a href="/profile">Profile</a></li>
        <li><a href="/deposit">Deposit</a></li>
        <li><a href="/withdraw">Withdraw</a></li>
        <li><a href="/transactions">Transactions</a></li>
        <li><a href="/admin-dashboard">Admin Dashboard</a></li>
        <li><a href="/user-dashboard">User Dashboard</a></li>
        <li><a href="/leaderboard">Leaderboard</a></li>
        <li><a href="/chat">Chat</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/register">Register</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
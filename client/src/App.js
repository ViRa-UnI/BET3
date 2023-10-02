import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Games from './components/Games';
import Profile from './components/Profile';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';
import Transactions from './components/Transactions';
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';
import GameDetails from './components/GameDetails';
import Leaderboard from './components/Leaderboard';
import Chat from './components/Chat';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/games" component={Games} />
          <Route path="/profile" component={Profile} />
          <Route path="/deposit" component={Deposit} />
          <Route path="/withdraw" component={Withdraw} />
          <Route path="/transactions" component={Transactions} />
          <Route path="/admin-dashboard" component={AdminDashboard} />
          <Route path="/user-dashboard" component={UserDashboard} />
          <Route path="/game-details" component={GameDetails} />
          <Route path="/leaderboard" component={Leaderboard} />
          <Route path="/chat" component={Chat} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
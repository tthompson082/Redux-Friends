import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { LoginView, FriendsListView } from './views';
import FriendsNavbar from './components/Navbar';
import HomePage from './components/HomePage';
import PrivateRoute from './components/PrivateRoute';
import FriendForm from './components/FriendForm'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <FriendsNavbar />
          <Route exact path='/' component={HomePage} />
          <Route path='/login' component={LoginView} />
          <PrivateRoute exact path='/friends' component={FriendsListView} />
          <PrivateRoute exact path='/add-friend' component={FriendForm} />
        </div>
      </Router>
    )
  }
}

export default App;

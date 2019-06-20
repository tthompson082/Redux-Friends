import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { LoginView } from './views';
import FriendsNavbar from './components/Navbar';
import HomePage from './components/HomePage';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <FriendsNavbar />
          <Route exact path='/' component={HomePage} />
          <Route path='/login' component={LoginView} />
        </div>
      </Router>
    )
  }
}

export default App;

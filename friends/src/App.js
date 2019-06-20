import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { LoginView, FriendsListView } from './views';
import FriendsNavbar from './components/Navbar';
import HomePage from './components/HomePage';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='bg-light vh-100'>
          <FriendsNavbar />
          <Route exact path='/' component={HomePage} />
          <Route path='/login' component={LoginView} />
          <Route path='/friends' component={FriendsListView} />
        </div>
      </Router>
    )
  }
}

export default App;

import React from 'react';
import './App.css';

import { LoginView } from './views';
import FriendsNavbar from './components/Navbar';

class App extends React.Component {
  render() {
    return (
      <div>
        <FriendsNavbar />
        <LoginView />
      </div>
    )
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';

class App extends Component {
  render() {
    return <div className="App">
        <Header />
          <h1>Log In</h1>
            <form>
            <input name="username" placeholder="Username"/><br/>
            <input type='password' name="password" placeholder="Password"/><br/>
            <button type="submit">Login</button>
          </form>
      </div>;

  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Posts from './containers/Posts';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
      fetch('http://localhost:3001/api/posts')
        .then(response => response.json())
        .then(posts => this.setState({ posts }))
  }

  render() {

    console.log(this.state)
    return <div className="App">
        <Header />
        <Posts posts={this.state.posts}/>
      </div>;

  }
}

export default App;

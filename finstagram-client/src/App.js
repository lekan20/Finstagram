import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Posts from './containers/Posts';

const posts = [
  {
    name: "Lekan",
    img_url: "https://miro.medium.com/fit/c/240/240/0*Bzq1yatMKbNzHTm0.jpg",
    comment: "First post"
  },
  {
    name: "Lekan",
    img_url: "http://abchoopsnyc.com/images/s15_fall14/wkd/s15c_wk10a_9pm_9.jpg",
    comment: "Second post"
  }
]

class App extends Component {
  render() {
    return <div className="App">
        <Header />
        App Container
        <Posts posts={posts}/>
      </div>;

  }
}

export default App;

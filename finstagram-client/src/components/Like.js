import React, { Component } from 'react'


class Like extends Component {
  constructor(props){
    super(props);
    this.state = {count: 0}
}
handleClick = () => {
  this.setState(({ count }) => ({
    count: count + 1
  }));
};

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Like</button>
        <p>{this.state.count}</p>
      </div>
    )
  }
}

export default Like

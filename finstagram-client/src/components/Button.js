import React, { Component } from 'react'


class Button extends Component {

handleClick() {
    debugger;

  };


  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
            Sort
        </button>
      </div>
      )
    }
  }


export default Button

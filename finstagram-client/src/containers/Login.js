import React, { Component } from 'react'

class Login extends Component {
  render() {
    return (
      <>
        <h1>Log In</h1>
        <form onSubmit={ this.onSubmit }>
          <input name="username" placeholder="Username"/><br/>
          <input type='password' name="password" placeholder="Password" /><br/>
          <button type="submit">Login</button>
        </form>
      </>
    )
  }
}


export default Login

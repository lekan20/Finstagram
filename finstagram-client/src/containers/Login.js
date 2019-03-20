import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'

class Login extends Component {
  state = {
      username: 'demo',
      password: 'password'
    }

  render() {
    return (
      <>
        <h1>Log In</h1>
        <form onSubmit={ this.onSubmit }>
          <input name="username" placeholder="Username"/><br/>
          <input type='password' name="password" placeholder="Password" /><br/>
          <button type="submit">Login</button>
        </form>
        <Link to='/signup'>Sign Up</Link>
      </>
    )
  }
}


export default Login

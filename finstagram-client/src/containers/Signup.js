import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'

class Signup extends Component {

  render() {
    return (
      <>
        <h1>Sign Up</h1>
        <form onSubmit={ this.onSubmit }>
          <input name="username" placeholder="Username" /><br/>
          <input type='password' name="password" placeholder="Password" /><br/>
          <input type='password' name="password_confirmation" placeholder="Password Confirmation" /><br/>
          <input name="firstname" placeholder="Firstname" /><br/>
          <input name="lastname" placeholder="Lastname" /><br/>
          <button type="submit">Signup</button>
        </form>
         <Link to='/login'>Log In</Link>
      </>
    )
  }
}

export default Signup

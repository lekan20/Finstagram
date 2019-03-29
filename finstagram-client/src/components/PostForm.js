import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { createPost } from '../actions/postActions'

class PostForm extends Component {
  constructor() {
    super()

    this.state = {
      img_url: "",
      caption: ""
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    const field = e.target.name
    let state = this.state

    state[field] = e.target.value
    this.setState(state)
  }

  onSubmit(e) {
    e.preventDefault()
    console.log('A')
    this.props.createPost(this.state)
    console.log('B')
    this.setState({
      img_url: "",
      caption: ""
    })
  }

  render() {
    const { img_url, caption } = this.state

    return (
      <form onSubmit={ this.onSubmit }>
        <input name="img_url" placeholder="Image" value={ img_url } onChange={ this.onChange }/>
        <input name="caption" placeholder="Caption" value={ caption } onChange={ this.onChange }/>
        <button type="submit">Add</button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  createPost
}, dispatch)

export default connect(null, mapDispatchToProps)(PostForm)

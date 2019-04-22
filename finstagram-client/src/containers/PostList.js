import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchPosts } from '../actions/postActions'

import Post from '../components/Post'
import PostForm from '../components/PostForm'

import Header from '../components/Header'
import Button from "../components/Button.js"

class PostList extends Component {
  constructor(props){
    super(props);
    this.state = {
      sorted: false
    }
  }

  componentDidMount() {
    this.props.fetchPosts()
  }

  handleClick = event => {
    console.log(this.props)
    this.setState(state => ({
      sorted: !this.state.sorted
    }))
  }

  sortedPosts = () => this.props.posts.slice().sort((a,b) => {
    if (a.caption.toUpperCase() < b.caption.toUpperCase()) {return -1}
    if (a.caption.toUpperCase() > b.caption.toUpperCase()) {return 1}
    return 0
  })


  render() {
    console.log(this.sortedPosts())
    console.log(this.props)
    const posts  = this.state.sorted ? this.sortedPosts() : this.props.posts
    console.log({posts})


    return (
      <div>
        <Header />
        <PostForm/><br/>
        <button onClick={this.handleClick}>
          Toggle Sort
        </button>
        { posts.map(post => <Post key={ post.id } post={ post } />) }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.post.all
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPosts,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PostList)


// toggle state for sort with a boolean
// Add button to return in render with onClick method
// handleClick method that will change the state
// Make handleClick method an arrow function so I don't have to bind the method
// Create a sortedPosts method
// Const posts add ternary for what to return if the state is true for sorted vs. false
// Update posts.map ... with .sort

import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchPosts } from '../actions/postActions'

import Post from '../components/Post'
import PostForm from '../components/PostForm'

import Header from '../components/Header'

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    const { posts } = this.props

    return (
      <div>
        <Header />
        <PostForm/><br/>
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
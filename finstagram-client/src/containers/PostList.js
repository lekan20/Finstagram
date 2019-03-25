import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchUser } from '../actions/userActions'
import { fetchPosts, deleteTodo } from '../actions/postActions'

import Post from '../components/Post'
import PostForm from '../components/PostForm'

import Header from '../components/Header'

class PostList extends Component {
  componentWillMount() {
    this.props.fetchUser()
    this.props.fetchPosts()
  }

  render() {
    const { user, posts } = this.props

    return (
      <div>
        <Header />
        <PostForm/>
        { posts.map(post => <Post key={ post.id } post={ post } />) }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.current,
    posts: state.post.all
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchUser,
  fetchPosts,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PostList)

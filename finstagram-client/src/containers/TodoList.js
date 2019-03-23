import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchUser } from '../actions/userActions'
import { fetchPosts, deleteTodo } from '../actions/postActions'

import Post from '../components/Todo'
import TodoForm from '../components/TodoForm'

import Header from '../components/Header'

class TodoList extends Component {
  componentWillMount() {
    this.props.fetchUser()
    this.props.fetchPosts()
  }

  render() {
    const { user, posts } = this.props

    return (
      <div>
        <Header />
        <TodoForm/>
        { posts.map(post => <Post key={ post.id } post={ post } deleteTodo={ this.props.deleteTodo } />) }
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
  deleteTodo
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)

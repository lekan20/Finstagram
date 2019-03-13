import React, { Component } from 'react';
import PostCard from '../components/PostCard';
import PostForm  from './PostForm';
import './Post.css';

class Posts extends Component {

  render() {
    return (
      <div className="PostsContainer">
        <h1>Posts</h1>
        
        <PostForm />
      </div>
    )
  }
}

export default Posts

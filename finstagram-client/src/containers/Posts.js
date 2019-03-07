import React from 'react';
import PostCard from '../components/PostCard';
import './Post.css';

const Posts = (props) => (
  <div className="PostsContainer">
    <h1>Posts</h1>
    {props.posts.map(post => <PostCard post={post} />)}
  </div>
);

export default Posts

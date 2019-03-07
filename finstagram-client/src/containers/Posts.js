import React from 'react';
import './Post.css';

const Posts = (props) => (
  <div className="PostsContainer">
    <h1>Posts</h1>
    {props.posts.map(post =>
      <div key={post.id} className="PostCard">
        <h4>{post.name}</h4>
        <img src={post.img_url} alt={post.name} />
        <p>Comment: {post.comment}</p>
      </div>
    )}
  </div>
);

export default Posts

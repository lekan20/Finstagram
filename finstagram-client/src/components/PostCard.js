import React from 'react';

const PostCard = ({ post }) => (
  <div key={post.id} className="PostCard">
    <h4>{post.name}</h4>
    <img src={post.img_url} alt={post.name} />
    <p>Comment: {post.comment}</p>
  </div>
)

export default PostCard;

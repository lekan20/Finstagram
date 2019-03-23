import React from 'react'

const Post = ({ post: { id, user_id, img_url, caption }, deleteTodo, deleteSubTodo }) =>
  <div>
    <img src={img_url} />
    <p>{ caption }</p>
  </div>

export default Post

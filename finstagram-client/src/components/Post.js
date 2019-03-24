import React from 'react'

const Post = ({ post: { id, user_id, img_url, caption }}) =>
  <div>
    <img src={img_url} />
    <p>{ caption }</p>
  </div>

export default Post

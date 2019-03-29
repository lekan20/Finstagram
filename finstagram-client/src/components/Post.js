import React from 'react'
import  "./Post.css";
import Like from "./Like.js"

const Post = ({ post: { id, img_url, caption }}) =>
  <article className="Post">
    <header>
      <div className="Post-user">
        <div className="Post-user-nickname">
          <span> </span>
        </div>
      </div>
    </header>
    <div className="Post-image">
      <div className="Post-image-bg">
        <img src={img_url} />
      </div>
    </div>
    <div className="Post-caption">
      <span> </span> { caption } <Like/>
    </div>
  </article>

export default Post

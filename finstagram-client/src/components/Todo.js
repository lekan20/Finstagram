import React from 'react'

const Todo = ({ todo: { id, user_id, img_url, caption }, deleteTodo, deleteSubTodo }) =>
  <div>
     <img src={img_url} />
    <p>{ caption }</p>
  </div>

export default Todo

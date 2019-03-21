import React from 'react'

const Todo = ({ todo: { id, title, description, sub_todos }, deleteTodo, deleteSubTodo }) =>
  <div>
    <h1>{ title }</h1>
    <p>{ description }<button onClick={ () => deleteTodo(id) }>Complete Todo</button></p>

  </div>

export default Todo

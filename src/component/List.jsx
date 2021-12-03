import React from 'react'
import Todo from '../pages/Todo'

function List({ todos, toggleTodo }) {
    return (
        todos.map(todo => {
            return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />
        })
    )
}

export default List

import React from 'react'
function Todo({ todo, toggleTodo }) {
    function handleTodoClick() {
        toggleTodo(todo.id)
    }

    return (
        <div class="container">
            <div class="row align-items-start">
                <div class="col"><input type="checkbox" checked={todo.complete} onChange={handleTodoClick} /></div>
                <div class="col">{todo.name}</div>
                <div class="col">{todo.date}</div>
            </div>
        </div>

    )
}

export default Todo

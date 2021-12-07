import React, { useState, useRef, useEffect } from 'react';
import List from './component/List'
import './App.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box } from '@mui/system'

function App() {
  // const [id, setID] = useState(Date.now)
  const todoNameRef = useRef();
  const todoDateRef = useRef();
  const [todos, setTodos] = useState([]);

  const TodoLogs = 'Todolist';

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddTodo(e) {
    e.preventDefault();

    const name = todoNameRef.current.value
    const date = todoDateRef.current.value
    if (name === '' || date === '') return
    setTodos(prevTodos => {
      return [...prevTodos, {
        id: Date.now(),
        date: date,
        name: name,
        complete: false
      }]
    })
    todoNameRef.current.value = null
    todoDateRef.current.value = null
  }

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(TodoLogs))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(TodoLogs, JSON.stringify(todos))
  }, [todos])
  return (
    <div class="row align-items-start">
      <Card sx={{ maxWidth: 700 }} class='col'>
        <div class="form-control">
          <div class="col-12 text-center">My Task</div>
          <input class="form-control" ref={todoNameRef} type="text" placeholder="Add Task" />
          <input class="form-control" type="date" ref={todoDateRef}></input>
          <div class="con">
            <div class='form-control text-center p-2'>List of Task</div>
            <div class='form-control bg-light'><List todos={todos} toggleTodo={toggleTodo} /></div>
          </div>
          <div class="form-control text-center"><button class="btn btn-success" onClick={handleAddTodo}>Save</button> &nbsp; <button class="btn btn-danger" onClick={handleClearTodos}>Clear</button></div>
        </div>
      </Card>
      {/* <Card sx={{ maxWidth: 700 }} class='col'>
        <div class="form-control">
          <div class="col-12 text-center">My Thoughts</div>
          <input class="form-control" ref={todoNameRef} type="text" placeholder="Add Thoughts" />
          <input class="form-control" type="date" ref={todoDateRef}></input>
          <div class="con">
            <div class='form-control text-center p-2'>List of Thoughts</div>
            <div class='form-control bg-light'><List todos={todos} toggleTodo={toggleTodo} /></div>
          </div>
          <div class="form-control text-center"><button class="btn btn-success" onClick={handleAddTodo}>Save</button> &nbsp; <button class="btn btn-danger" onClick={handleClearTodos}>Clear</button></div>
        </div>
      </Card> */}
    </div >
  );
}

export default App;

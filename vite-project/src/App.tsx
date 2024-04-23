import React, { useState, useRef, useEffect } from 'react';
import './App.css'

function Form({ addTodo }) {
  const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const todo = inputRef.current.value;
    addTodo(todo);
    inputRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="todo"
        placeholder="Write a new todo"
        ref={inputRef}
      />
      <button type="submit">Add todo</button>
    </form>
  );
}

function TodoList({ todos, deleteTodo, modifyTodo }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo}
          <button onClick={() => modifyTodo(index)}>Modify</button>
          <button onClick={() => deleteTodo(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

function App() {
  // Initialize state with tasks from localStorage if available
  const [todos, setTodos] = useState(() => {
    const savedTodos = window.localStorage.getItem('todos');
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const modifyTodo = (index) => {
    const newTodo = prompt("Enter new todo");
    const newTodos = [...todos];
    newTodos[index] = newTodo;
    setTodos(newTodos);
  };

  useEffect(() => {
    // Save todos to localStorage whenever todos changes
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <h1>My Todo App</h1>
      <Form addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} modifyTodo={modifyTodo} />
    </div>
  );
}

export default App;
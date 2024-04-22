import React, { useState } from "react";

export default function TodoList() {
    // Define initial todos state
    const initialTodos = ["My first todo", "My second todo"];

    // Set up state using useState hook
    const [todos, setTodos] = useState(initialTodos);

    // Function to add new todo
    const addTodo = () => {
        const newTodo = prompt("Enter your new todo:");
        if (newTodo) {
            setTodos([...todos, newTodo]);
        }
    };

    return (
        <div>
            <h1>Todo List</h1>
            <button onClick={addTodo}>Add Todo</button>
            <ul>
                {/* Map through todos array and render each todo */}
                {todos.map((todo, index) => (
                    <li key={index}>
                        <input type="checkbox" /> {todo}
                    </li>
                ))}
            </ul>
        </div>
    );
}

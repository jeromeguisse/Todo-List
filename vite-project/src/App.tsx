import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// App.tsx
import React from 'react';
import TodoList from './TodoList'; // Adjust the import path based on your project structure

function App() {
    return (
        <div>
            <h1>My Todo App</h1>
            <TodoList />
        </div>
    );
}

export default App;


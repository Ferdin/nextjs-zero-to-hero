"use client";

import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = () => {
    setTodos([...todos, `Task ${todos.length + 1}`]);
  };

  const removeTodo = () => {
    setTodos((prevTodos) => prevTodos.slice(1));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <button onClick={addTodo}>Add Task</button>
      <button onClick={removeTodo}>Remove Task</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

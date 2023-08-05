import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      text: "Buy groceries",
      completed: false,
    },
    {
      text: "Do laundry",
      completed: false,
    },
    {
      text: "Clean the house",
      completed: false,
    },
  ]);

  const handleAddTodo = (text) => {
    setTodos([...todos, { text, completed: false }]);
  };

  const handleCompleteTodo = (id) => {
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = true;
      }
      return todo;
    }));
  };

  return (
    <div>
      <h1>To-do List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleCompleteTodo(todo.id)}
            />
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Add a new todo"
        onChange={(e) => handleAddTodo(e.target.value)}
      />
    </div>
  );
};

export default TodoList;
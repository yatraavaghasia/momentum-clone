import React, { useState } from 'react';
import '../App.css'; // Import CSS file for styling

const Todo_List = () => {
  const [todoItems, setTodoItems] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== '') {
      const updatedTodoItems = [...todoItems, { text: newTodo, completed: false }];
      setTodoItems(updatedTodoItems);
      setNewTodo('');
    }
  };

  const handleToggleComplete = (index) => {
    const updatedTodoItems = [...todoItems];
    updatedTodoItems[index].completed = !updatedTodoItems[index].completed;
    setTodoItems(updatedTodoItems);
  };

  const handleDeleteTodo = (index) => {
    const updatedTodoItems = [...todoItems];
    updatedTodoItems.splice(index, 1);
    setTodoItems(updatedTodoItems);
  };

  return (
    <div className="todo-container">

      <h1>Todo List</h1>
      
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          placeholder="Add a new todo..."
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todoItems.map((todo, index) => (
           <li key={index} style={todo.completed ? { textDecoration: 'line-through' } : null}>
           <input
             type="checkbox"
             checked={todo.completed}
             onChange={() => handleToggleComplete(index)}
           />
            {todo.text}
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo_List;

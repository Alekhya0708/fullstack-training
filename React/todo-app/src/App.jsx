import React, { useState, useEffect } from 'react';
import { Container, Typography, Select, MenuItem, Box } from '@mui/material';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('todos'));
    if (stored) setTodos(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const updateTodo = (updated) => {
    setTodos(todos.map(t => (t.id === updated.id ? updated : t)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'All') return true;
    if (filter === 'Completed') return todo.completed;
    if (filter === 'Pending') return !todo.completed;
    return true;
  });

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>To-Do List</Typography>
      <TodoForm addTodo={addTodo} />
      <Box my={2}>
        <Select fullWidth value={filter} onChange={(e) => setFilter(e.target.value)}>
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Completed">Completed</MenuItem>
          <MenuItem value="Pending">Pending</MenuItem>
        </Select>
      </Box>
      <TodoList todos={filteredTodos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </Container>
  );
}

export default App;

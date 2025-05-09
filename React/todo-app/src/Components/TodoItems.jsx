import React from 'react';
import { ListItem, Checkbox, TextField, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function TodoItem({ todo, updateTodo, deleteTodo }) {
  const toggleComplete = () => {
    updateTodo({ ...todo, completed: !todo.completed });
  };

  const handleChange = (e) => {
    updateTodo({ ...todo, text: e.target.value });
  };

  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" onClick={() => deleteTodo(todo.id)}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <Checkbox checked={todo.completed} onChange={toggleComplete} />
      <TextField
        value={todo.text}
        variant="standard"
        fullWidth
        onChange={handleChange}
        sx={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      />
    </ListItem>
  );
}

export default TodoItem;

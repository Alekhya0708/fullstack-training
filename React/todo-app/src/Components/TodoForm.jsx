import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

function TodoForm({ addTodo }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;

    addTodo({ id: uuidv4(), text: task, completed: false });
    setTask('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} display="flex" gap={2}>
      <TextField
        label="New Task"
        fullWidth
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Button variant="contained" type="submit">Add</Button>
    </Box>
  );
}

export default TodoForm;

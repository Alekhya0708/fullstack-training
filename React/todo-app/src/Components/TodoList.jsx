import React from 'react';
import { List } from '@mui/material';
import TodoItem from './TodoItems';

function TodoList({ todos, updateTodo, deleteTodo }) {
  return (
    <List>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
      ))}
    </List>
  );
}

export default TodoList;

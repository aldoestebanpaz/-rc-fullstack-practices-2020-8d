import React from 'react';
import Todo from './Todo';

function TodosList({ todos }) {
  return (
    <>
      { todos.map((t, index) => <Todo texto={t} index={index} />) }
    </>
  );
}

export default TodosList;

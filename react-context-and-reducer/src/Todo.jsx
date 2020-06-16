import React, { useContext } from 'react';
import TodosContext from './TodosContext';

function TodosList({ texto, index }) {

  const context = useContext(TodosContext);

  return (
    <p>{texto}<button onClick={() => context.dispatch({ type: 'REMOVE_TODO', index })}>remove</button></p>
  );
}

export default TodosList;

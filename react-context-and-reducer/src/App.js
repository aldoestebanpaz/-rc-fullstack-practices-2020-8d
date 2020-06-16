import React, { useState, useReducer } from 'react';
import './App.css';
import TodosContext from './TodosContext';
import TodosList from './TodosList';

function App() {
  const [ todos, setTodos ] = useState([]);

  const [ texto, setTexto ] = useState('');
  const [ todos2, dispatch ] = useReducer((state, action) => {
    const result = [...state];
    switch (action.type) {
      case 'ADD_TODO':
        result.push(action.value);
        break;
      case 'REMOVE_TODO':
        result.splice(action.index, 1);
        break;
    
      default:
        break;
    }
    return result;
  }, []);

  return (
    <TodosContext.Provider value={{ todos: todos2, dispatch }}>
      <div>
        <h3>Todos con useState</h3>
        { todos.map(t => <p>{t}</p>) }
        <button onClick={() => setTodos([...todos, 'TODO ' + todos.length])}>Add Todo</button>
      </div>
      <div>
        <h3>Todos con reducer</h3>
        <input type="text" value={texto} onChange={e => setTexto(e.target.value)} />
        <button onClick={() => dispatch({ type: 'ADD_TODO', value: texto })}>Add Todo</button>
        <TodosList todos={todos2} />
      </div>
    </TodosContext.Provider>
  );
}

export default App;

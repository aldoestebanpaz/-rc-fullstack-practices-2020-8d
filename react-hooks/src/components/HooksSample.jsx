import React, { useState, useEffect } from 'react';

function HooksSample(props) {

  const [ contador, setContador ] = useState(0);
  const [ username, setUsername ] = useState('');

  const handleClick = () => {
    setContador(contador + 1);
  }

  const handleChange = (e) => {
    setUsername(e.target.value);
  }

  useEffect(() => {
    console.log("useEffect has been called, cause 'contador' has changed");
  }, [contador]);

  return (
    <div className="App">
      <p>Count: {contador}</p>
      <button onClick={handleClick}>+</button>
      <p>Username: {username}</p>
      <input type="text" onChange={handleChange} />
    </div>
  );
}

export default HooksSample;

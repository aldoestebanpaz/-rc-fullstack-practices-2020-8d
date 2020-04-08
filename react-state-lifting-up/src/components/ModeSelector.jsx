import React from 'react';

function ModeSelector(props) {

  return(
    <div>
      <button onClick={() => props.changeMode("light")}>Light mode</button>
      <button onClick={() => props.changeMode("dark")}>Dark mode</button>
    </div>
  );
}

export default ModeSelector;

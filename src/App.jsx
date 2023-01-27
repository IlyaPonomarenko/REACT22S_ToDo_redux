import React from 'react';

const App = () => {
  const handleSumbit = () =>{

  }
  return (
    <div>
      <h2>your task</h2>
      <input type="text" name="task-name" id="" required/>
      <h2>Description of your task</h2>
      <input type="text" name="" id="" required />
      <button onClick={handleSumbit}></button>
    </div>
  );
};

export default App;

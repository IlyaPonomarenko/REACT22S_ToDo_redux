import React from 'react';
import {useSelector, useDispatch} from "react-redux";

const App = () => {
  const handleSumbit = () =>{

  }
  return (
    <div>
      <h2>your task</h2>
      <input type="text" name="task-name" id="" required/>
      <h2>Description of your task</h2>
      <button onClick={handleSumbit}></button>
      <div className='task-container'>
        <p></p>
      </div>
    </div>
  );
};

export default App;
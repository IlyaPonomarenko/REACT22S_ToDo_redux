import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { getTask } from './features/slices/StateSlice';

export const App= () =>{
    const dispatch = useDispatch();
    const [inputData, setInputData] = useState("");
    const handleSumbit = (e: React.FormEvent) => {
        e.preventDefault()
        dispatch(getTask(inputData))
    }
    return (
        <div>
            <form>
                <input type="text" onChange={(e) => setInputData(e.target.value)} />
                <button onClick={handleSumbit}>Add a task</button>
            </form>
        </div>
    );
};

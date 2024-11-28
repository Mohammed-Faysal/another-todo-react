import React, { useState } from 'react';
import { providerFun } from '../Context/TaskContext';


const AddTask = () => {
    
    const [text, setText] = useState('')
    const {onAddTask} = providerFun()

    return (
        <>
            <input type="text" value={text} onChange={(e)=> setText(e.target.value)}/>
            <button onClick={()=> {
                setText('')
                onAddTask(text)
            }}>Add Task</button>
        </>
    );
};

export default AddTask;
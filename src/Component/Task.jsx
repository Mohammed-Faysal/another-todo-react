import React, { useState } from 'react';
import { providerFun } from '../Context/TaskContext';

const Task = ({task}) => {

    const [isEdit, setIsEdit] = useState(false)
    
    const {onChangeTask, onDeleteTask} = providerFun()

    return (
        <>
            <input type="checkbox" checked={task.done} onChange={(e)=> onChangeTask({
                                ...task, 
                                done: e.target.checked
                            })}/>
                {
                    isEdit ? (
                        <>
                            <input type="text" value={task.text} onChange={(e)=> onChangeTask({
                                ...task, 
                                text: e.target.value
                            })}/>
                            <button onClick={()=> setIsEdit(false)}>Save</button>
                        </>
                    ) : (
                        <>
                            <span>{task.text}</span>
                            <button onClick={()=> setIsEdit(true)}>Edit</button>
                        </>
                    )
                }
            <button onClick={()=> onDeleteTask(task.id)}>Delete</button>
        </>
    );
};

export default Task;
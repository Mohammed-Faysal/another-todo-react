import { createContext, useContext, useReducer } from "react";
import { storeTask } from "../Component/storage";
import { reducerFunction } from "../Reducer/reducerFun";

const createCtx = createContext()

let nextId = 6

const TaskContext = ({children}) => {

    const [tasks, dispatch] = useReducer(reducerFunction, storeTask)

    const handleTask = (text) => {
        dispatch({
            type: 'added',
            id: nextId++,
            text
        })
    }

    const handleChangeTask = (task) => {
        dispatch({
            type: 'edit', 
            id: task.id, 
            text: task.text, 
            done: task.done
        })
    }

    const handleDeleteTask = (taskId) => {
        dispatch({
            type: 'delete', 
            id: taskId
        })
    }


    const allValue = {
        tasks,
        onAddTask: handleTask,
        onChangeTask: handleChangeTask,
        onDeleteTask: handleDeleteTask
    }

    return (
        <createCtx.Provider value={allValue}>
            {children}
        </createCtx.Provider>
    );
};

export default TaskContext;

export const providerFun = () => {
    return useContext(createCtx)
}
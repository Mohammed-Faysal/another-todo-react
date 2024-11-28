import { providerFun } from '../Context/TaskContext';
import Task from './Task';

const TaskList = () => {

    const {tasks} = providerFun()
    
    return (
        <ul>
            {
                tasks.length > 0 ? (
                    tasks.map(task => (
                        <li key={task.id} className='flex gap-2'>
                            <Task task={task} />
                        </li>
                    ))
                ) : (<p>No Task Available Here.</p>)
            }
            
        </ul>
    );
};

export default TaskList;
import AddTask from "./Component/AddTask"
import TaskList from "./Component/TaskList"
import TaskContext from "./Context/TaskContext"


function App() {

  return (
    <div>
      
      <TaskContext>
        <AddTask/>
        <TaskList/>
      </TaskContext>

    </div>
  )
}

export default App

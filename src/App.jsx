import { useState, useReducer } from 'react'
import TaskForm from './components/TaskForm'
import TaskControls from './components/TaskControls'
import TaskList from './components/TaskList'
import { 
  getStoredTasks 
} from './utils/localStorageUtils.js'
import { taskReducer } from './reducers/taskReducer.js'
import {TaskContext} from './contexts/TaskContext.js'


const App = () => {
  const [tasks, dispatch] = useReducer(taskReducer, getStoredTasks())
  const [showOnlyIncomplete, setShowOnlyIncomplete] = useState(false)

  const addTask = (newTask) => {
    dispatch({ type: 'ADD', payload: newTask })
  }

  const removeTask = (id) => {
    dispatch({ type: 'REMOVE', payload: id })
  }

  const updateTask = ({ taskId, editText, editPriority }) => {
    dispatch({ type: 'UPDATE', payload: { taskId, editText, editPriority} })
  }

  const toggleTaskDone = (id) => {
    dispatch({ type: 'TOGGLE_DONE', payload: id })
  }

  const sortTasks = () => {
    dispatch({ type: 'SORT' })
  }

  return (
    <TaskContext.Provider value={{ removeTask, toggleTaskDone, updateTask }}>
      <div
        style={{
          padding: '20px',
          fontFamily: 'Arial',
          maxWidth: '800px',
          margin: 'auto'
        }}
      >
        <h2 style={{ textAlign: 'center' }}>To-Do List</h2>
        <TaskForm addTask={addTask} />
        <TaskControls 
          showOnlyIncomplete={showOnlyIncomplete}
          setShowOnlyIncomplete={setShowOnlyIncomplete}
          sortTasks={sortTasks}
        />
        <TaskList 
          tasks={tasks} 
          showOnlyIncomplete={showOnlyIncomplete}
        />
      </div>
    </TaskContext.Provider>
  )
}

export default App

import TaskForm from "./components/TaskForm"
import TaskControls from "./components/TaskControls"
import TaskList from "./components/TaskList"

const App = () => {
  return (
    <div
      style={{
        padding: '20px',
        fontFamily: 'Arial',
        maxWidth: '800px',
        margin: 'auto'
      }}
    >
      <h2 style={{ textAlign: 'center' }}>To-Do List</h2>
      <TaskForm />
      <TaskControls />
      <TaskList />
    </div>
  )
}

export default App

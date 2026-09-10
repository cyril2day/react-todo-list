import TaskItem from './TaskItem'
import EditTaskForm from './EditTaskForm'
import { useState } from 'react'

const TaskList = ({ 
  tasks, 
  showOnlyIncomplete
}) => {
  const [editingnTaskId, setEditingTaskId] = useState(null)

  return (
    <ul>
      {tasks
        .filter(task => !showOnlyIncomplete || !task.done)
        .map(task => (
        <li
          key={task.id}
          style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px',
              borderBottom: '1px solid #ccc',
              gap: '10px'
          }}
        >
          {editingnTaskId === task.id 
            ? <EditTaskForm 
                task={task} 
                setEditingTaskId={setEditingTaskId}
              />
            : <TaskItem
                task={task}
                setEditingTaskId={setEditingTaskId}
              />
          }
        </li>
      ))}
    </ul>
  )
}

export default TaskList

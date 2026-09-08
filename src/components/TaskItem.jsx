import { Trash, Pencil } from 'lucide-react'

const TaskItem = ({ 
  task,
  toggleTaskDone,
  removeTask
}) => {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
        <input
          type='checkbox'
          checked={task.done}
          onChange={() => toggleTaskDone(task.id)}
          style={{ marginRight: '10px' }}
        />
        <span
          style={{
            textDecoration: task.done ? 'line-through' : 'none',
            flexGrow: 1,
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          {task.text} 
          <span
            style={{
              backgroundColor: '#6f42c1',
              color: 'white',
              borderRadius: '50%',
              padding: '4px 8px',
              fontSize: '12px',
              fontWeight: 'bold',
              textAlign: 'center',
              display: 'inline-block'
            }}
          >
            {task.priority}
          </span>
        </span>
      </div>
      <div style={{ display: 'flex', gap: '5px'}}>
        <button
          style={{
              borderRadius: '50%',
              backgroundColor: '#ffc107',
              color: 'black',
              padding: '10px',
              border: 'none',
              cursor: 'pointer'
          }}
        >
          <Pencil size={16} />
        </button>
        <button
          onClick={() => removeTask(task.id)}
          style={{
              borderRadius: '50%',
              backgroundColor: '#dc3545',
              color: 'white',
              padding: '10px',
              border: 'none',
              cursor: 'pointer'
          }}
        >
          <Trash size={16} />
        </button>
      </div>
    </>
  )
}

export default TaskItem

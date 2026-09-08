import { Check } from 'lucide-react'
import { useState } from 'react'

const EditTaskForm = ({
  task,
  setEditingTaskId,
  updateTask
}) => {
  const [editText, setEditText] = useState(task.text)
  const [editPriority, setEditPriority] = useState(task.priority)

  const saveEdit = () => {
    if (editText.trim()) {

      updateTask({ taskId: task.id, editText, editPriority })

      setEditingTaskId(null)
    }
  }

  return (
    <>
      <input 
        type='text'
        value={editText}
        onChange={(e) => setEditText(e.target.value)}
        style={{
            flexGrow: 1,
            padding: '5px',
            borderRadius: '5px',
            border: '1px solid #ccc'
        }}
      />

      <input 
        type='number'
        value={editPriority}
        onChange={(e) => setEditPriority(Number(e.target.value))}
        min='1'
        style={{
            width: '50px',
            padding: '5px',
            borderRadius: '5px',
            border: '1px solid #ccc'
        }}
      />
      <button
        onClick={saveEdit}
        style={{
            borderRadius: '50%',
            backgroundColor: '#28a745',
            color: 'white',
            padding: '10px',
            border: 'none',
            cursor: 'pointer'
        }}
      >
        <Check size={16} />
      </button>
    </>
  )
}

export default EditTaskForm

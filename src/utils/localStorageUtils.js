export const defaultTasks = [
  { id: 1, text: 'Buy groceries', priority: 2, done: false },
  { id: 2, text: 'Walk the dog', priority: 1, done: false },
  { id: 3, text: 'Respond to emails', priority: 3, done: false },
  { id: 4, text: 'Schedule dentist appointment', priority: 1, done: true },
  { id: 5, text: 'Plan weekend trip', priority: 2, done: false },
]

export const getStoredTasks = () => {
  const savedTasks = localStorage.getItem('tasks')
  const parsedTasks = savedTasks ? JSON.parse(savedTasks) : []

  return parsedTasks.length ? parsedTasks : defaultTasks
}

export const updateLocalStorage = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

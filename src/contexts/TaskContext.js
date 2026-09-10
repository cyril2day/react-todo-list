import { createContext, useContext } from 'react'

export const TaskContext = createContext()

export const useTaskActions = () => useContext(TaskContext)

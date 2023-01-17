import { createContext } from 'react'
import { tasks as data } from '../data/tasks.js'
import { useState, useEffect } from 'react'

export const TaskContext = createContext()

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([])
  useEffect(() => { setTasks(data) }, [])

  function createTask({ title, description }) {
    let idNewTask = 0
    if (tasks.length === 0) {
      idNewTask = 1
    }
    else {
      idNewTask = tasks[tasks.length - 1].id + 1
    }
    setTasks([...tasks, {
      id: idNewTask,
      title: title,
      description: description
    }])
  }

  function deleteTask(idDelete) {
    setTasks(tasks.filter(task => task.id !== idDelete))
  }


return (
  <TaskContext.Provider value={{ tasks, createTask, deleteTask }}>
    {props.children}
  </TaskContext.Provider>
)
}
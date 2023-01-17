/*import { TaskList } from './components/TaskList'
import TaskForm from './components/TaskForm'
import { tasks as data } from './data/tasks.js'
import { useState, useEffect } from 'react'

function App() {
  const [tasks, setTasks] = useState([])
  useEffect(() => { setTasks(data) }, [])

  function createTask(task) {
    let idNewTask=0
    if (tasks.length===0){
      idNewTask=1
    }
    else{
      idNewTask=tasks[tasks.length-1].id+1
    }
    setTasks([...tasks, {
      id: idNewTask,
      title: task.title,
      description: task.description
    }])
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </>
  )
}
export default App;*/



import { TaskList } from './components/TaskList'
import TaskForm from './components/TaskForm'

function App() {
  return (
    <main className='bg-zinc-500 h-screen'>
      <div className='container mx-auto p-10'>
        <TaskForm />
        <TaskList />
      </div>
    </main>
  )
}
export default App;


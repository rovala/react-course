/*import { useState } from "react"

function TaskForm({createTask}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault()
        createTask({title,description})
        setTitle("")
        setDescription("")
    }
    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Escribe tu tarea" onChange={(e) => setTitle(e.target.value)} value={title} autoFocus></input>
            <textarea placeholder="Describe la tarea a agregar" onChange={(e)=>setDescription(e.target.value)} value={description}></textarea>
            <button> Guardar </button>
        </form>
    )
}
export default TaskForm*/

/*import { useState, useContext } from "react"
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    
    const tasks=useContext(TaskContext).tasks
    const setTasks=useContext(TaskContext).setTasks

    function createTask() {
        let idNewTask=0
        if (tasks.length===0){
          idNewTask=1
        }
        else{
          idNewTask=tasks[tasks.length-1].id+1
        }
        setTasks([...tasks, {
          id: idNewTask,
          title: title,
          description: description
        }])
      }

    const handleSubmit = (e) => {
        e.preventDefault()
        createTask()
        setTitle("")
        setDescription("")
    }
    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Escribe tu tarea" onChange={(e) => setTitle(e.target.value)} value={title} autoFocus></input>
            <textarea placeholder="Describe la tarea a agregar" onChange={(e)=>setDescription(e.target.value)} value={description}></textarea>
            <button> Guardar </button>
        </form>
    )
}
export default TaskForm*/

import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    
    const {createTask}=useContext(TaskContext)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        createTask({title,description})
        setTitle("")
        setDescription("")
    }
    return (
        <div className="max-w-max mx-auto">
        <form onSubmit={handleSubmit} className='bg-gray-800 p-10 mb-4 text-2x1'>
            <h1 className="mb-3 text-white font-bold text-2xl">Crea tu tarea</h1>
            <input placeholder="Escribe tu tarea" onChange={(e) => setTitle(e.target.value)} value={title} autoFocus className="p-3 w-full mb-2 bg-slate-300"></input>
            <textarea placeholder="Describe la tarea a agregar" onChange={(e)=>setDescription(e.target.value)} value={description} className='w-full mt-1 bg-slate-300'></textarea>
            <button className=" bg-indigo-500 rounded-md px-2 py-1 mt-4 text-white"> Guardar </button>
        </form>
        </div>
    )
}
export default TaskForm
/*export function TaskCard({ task, deleteTask }) {
    function showAlert(){
        alert('Esta seguro de eliminar tarea ' + (task.id) + '?')
        deleteTask(task.id)
    }
    return <div>
        <h1> {task.id} </h1>
        <h1> {task.title} </h1>
        <h1> {task.description} </h1>
        <button onClick={showAlert}>Eliminar tarea</button>        
    </div>
}*/

import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'


export function TaskCard({ task }) {
    const { deleteTask } = useContext(TaskContext)

    function showAlert() {
        alert('Esta seguro de eliminar tarea ' + (task.id) + '?')
        let idDelete = task.id
        deleteTask(idDelete)
    }
    return <div className='bg-gray-800 text-white rounded-lg p-8'>
        <h1> {task.id} </h1>
        <h1 className='text-xl font-bold capitalize'> {task.title} </h1>
        <h1 className='text-gray-500 text-sm'> {task.description} </h1>
        <button className='bg-red-500 rounded-md px-2 py-1 mt-4 hover:bg-red-400' onClick={showAlert}>Eliminar tarea</button>
    </div>
}
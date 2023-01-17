/*import { TaskCard } from "./TaskCard"

export function TaskList({ tasks, deleteTask }) {
    if (tasks.length === 0) {
        return <h1>No hay tareas programadas</h1>
    }
    else {
        return (
            <>
                <h1>Si hay tareas programadas y son:</h1>
                {
                    tasks.map((task) => <TaskCard task={task} key={task.id} deleteTask={deleteTask}/>)
                }
            </>
        )
    }
}
*/

import { TaskCard } from "./TaskCard"
import { useContext } from 'react'
import { TaskContext } from "../context/TaskContext"

export function TaskList() {
    const { tasks } = useContext(TaskContext)
    if (tasks.length === 0) {
        return (
            <h1 className="text-white text-4xl font-bold text-center">No hay tareas programadas</h1>
            )
    }
    else {
        return (
            <div className="grid grid-cols-4 gap-2 p-4">

                {
                    tasks.map((task) => <TaskCard task={task} key={task.id} />)
                }
            </div>
        )
    }
}

import Link from 'next/link'
import React from 'react'

function TaskCard({ task }: any) {
    return (
        <Link href={`/tasks/${task._id}`}>
            <div className='bg-red-800 p-10 text-white rounded-md hover:cursor-pointer hover:bg-slate-700'>
                <h3 className='text-2xl font-bold'>{task.title}</h3>
                <p>{task.description}</p>
                <p className='text-xs'>
                    <span>
                        Fecha Creacion: 
                    </span>
                    {new Date(task.createdAt).toLocaleDateString()}
                </p>
            </div>
        </Link>

    )
}

export default TaskCard

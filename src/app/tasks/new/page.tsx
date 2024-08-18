'use client'
import { ChangeEvent, FormEvent, useState } from "react"

function FormPage() {

  const [newTask, setNewTask] = useState({
    title: "",
    description: ""
  })

  const createTask = async () => {
    const res = await fetch('/api/tasks', {
      method: "POST", body: JSON.stringify(newTask), 
      headers: { 'Content-Type': 'application/json' }
    })
    const data = await res.json()
    console.log(data)
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await createTask();

  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // console.log(e.target.value)
    setNewTask({ ...newTask, [e.target.name]: e.target.value })
  }
  return (
    <div className='h-[calc(100vh-7rem)] flex justify-center items-center'>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name='title' placeholder='Titulo'
          className='bg-gray-800 border-2 w-full p-4 rounded-lg my-4'
          onChange={handleChange} />

        <textarea rows={3}
          name='description' placeholder='tarea' className='bg-gray-800 border-2 w-full p-4 rounded-lg my-4'
          onChange={handleChange}></textarea>
        <button className='bg-green-600 text-white hover:bg-green-800 font-bold py-2 px-4 rounded-lg'>
          save
        </button>
      </form>
    </div>
  )
}

export default FormPage

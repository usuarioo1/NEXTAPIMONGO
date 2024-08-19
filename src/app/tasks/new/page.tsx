'use client'
import { ChangeEvent, FormEvent, useState, useEffect } from "react"
import { useRouter, useParams } from "next/navigation"

function FormPage() {

  const [newTask, setNewTask] = useState({
    title: "",
    description: ""
  })

  const router = useRouter();
  const params = useParams();


  const getTask = async () => {
    try {
      const res = await fetch(`/api/tasks/${params.id}`);
      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }
      const data = await res.json();
      console.log(data);
      setNewTask({
        title: data.title || "",
        description: data.description || ""
      });
    } catch (error) {
      console.error("Failed to fetch task:", error);
    }
  };
  



  const createTask = async () => {

    try {
      const res = await fetch('/api/tasks', {
        method: "POST", body: JSON.stringify(newTask),
        headers: { 'Content-Type': 'application/json' }
      })
      const data = await res.json()
      console.log(data)

      if (res.status === 200) {
        router.push('/')
        router.refresh()
      }
    } catch (error) {
      console.log(error)
    }

  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!params.id) {
      await createTask();
    } else {
      updateTask();
    }

  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // console.log(e.target.value)
    setNewTask({ ...newTask, [e.target.name]: e.target.value })

  }

  const handleDelete = async () => {

    if (window.confirm('Quieres eliminar la tarea?')) {
      const res = await fetch(`/api/tasks/${params.id}`, {
        method: 'DELETE',
      })
      router.push('/')
      router.refresh()
    }

  }

  const updateTask = async() => {

    const res = await fetch(`/api/tasks/${params.id}`, {
      method:'PUT',
      body: JSON.stringify(newTask)
    })

    const data = await res.json()
    router.push('/');
    router.refresh();

  }

  useEffect(() => {
    if (params.id) {
      getTask();
    }
  }, [])
  return (
    <div className='h-[calc(100vh-7rem)] flex justify-center items-center'>
      <form action="" onSubmit={handleSubmit}>
        <header className="flex justify-between">
          <h1 className="font-bold text-3xl">{!params.id ? 'Crear tarea' : 'Actualizar Tarea'}</h1>
          <button type="button" className="bg-red-500 px-3 py-1 rounded-md" onClick={handleDelete}>Eliminar</button>
        </header>
        <input type="text" name='title' placeholder='Titulo'
          className='bg-gray-800 border-2 w-full p-4 rounded-lg my-4'
          onChange={handleChange}
          value={newTask.title} />

        <textarea rows={3}
          name='description' placeholder='tarea' className='bg-gray-800 border-2 w-full p-4 rounded-lg my-4'
          onChange={handleChange}
          value={newTask.description}></textarea>
        <button type="submit" className='bg-green-600 text-white hover:bg-green-800 font-bold py-2 px-4 rounded-lg'>
          {!params.id ? "Crear Tarea" : "Actualizar Tarea"}
        </button>
      </form>
    </div>
  )
}

export default FormPage

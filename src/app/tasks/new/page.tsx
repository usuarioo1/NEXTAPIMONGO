import { useState } from "react"

function FormPage() {
  return (
    <div className='h-[calc(100vh-7rem)] flex justify-center items-center'>
      <form action="">
        <input type="text" name='title' placeholder='Titulo'
         className='bg-gray-800 border-2 w-full p-4 rounded-lg my-4'/>
         <textarea rows={3}
         name='Description' placeholder='tarea' className='bg-gray-800 border-2 w-full p-4 rounded-lg my-4'></textarea>
         <button className='bg-green-600 text-white hover:bg-green-800 font-bold py-2 px-4 rounded-lg'>
            save
         </button>
      </form>
    </div>
  )
}

export default FormPage

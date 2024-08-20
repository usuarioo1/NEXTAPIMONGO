import { connectDB } from "@/utils/mongoose";
import Task from "@/models/task";
import TaskCard from "@/components/TaskCard";

async function loadTask() {
  await connectDB()
  const tasks = await Task.find()
  return tasks;
}

const getTask= async() => {
  const res = await fetch('https://nextapimongo.vercel.app/api/tasks', {cache:'no-store'})
  const data = await res.json()
  console.log(data)
}

async function HomePage() {
  const tasks = await loadTask()
  getTask()
  
  return (
    <div className="grid grid-cols-3 gap-2">
    {tasks.map(task =>(
      <TaskCard task={task} key={task._id} />
    ))}
    </div>
  )
}

export default HomePage;

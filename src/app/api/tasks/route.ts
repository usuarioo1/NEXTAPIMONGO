import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mongoose";
import Tasks from '@/models/task'
import Error from "next/error";


export async function GET(){
    connectDB()

    const tasks = await Tasks.find()

    
    return NextResponse.json(tasks)
}

export async function POST(request: Request) {
    
    try {
        const data = await request.json() //llega objeto de cliente
    const newTask = new Tasks(data) // se crea objeto de cliente
    const saveTask = await newTask.save() //se guarda objeto de cliente
    console.log(saveTask)
    return NextResponse.json('creando')
    } catch (error) {
        return NextResponse.json(Error, {
            status: 400
        })
    }
}
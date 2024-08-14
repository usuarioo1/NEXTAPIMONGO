import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mongoose";
import Task from "@/models/task";
import Error from "next/error";

interface Params {
    params: String;
    id: Number;
}

export async function GET(request: Request, { params }: Params) {
    try {
        connectDB();
        const task = await Task.findById(params.id);
        if (!task) return NextResponse.json({ message: "tarea no encontrada" });
        // console.log(params)
        return NextResponse.json(task);
    } catch (error) {
        return NextResponse.json(Error, { status: 400 });
    }
}

export async function DELETE(request: Request, params: Params) {
    try {
        const deleteTask = await Task.findByIdAndDelete(params.id)
        if(!deleteTask)
            return NextResponse.json({message:"tarea no encontrada"}, {status:404})
            return NextResponse.json(deleteTask);
    } catch (error) {
        return NextResponse.json(Error, {status:400})
    }
  
}

export async function PUT(request: Request, params: Params) {
    try {
        const data = await request.json();
        const taskUpdate = await Task.findByIdAndUpdate(params.id, data, {
            new: true,
        });
        return NextResponse.json(taskUpdate);
    } catch (error) {
        NextResponse.json(Error,{
            status:400
        })
     }
}

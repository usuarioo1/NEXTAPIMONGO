import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mongoose";
import Tasks from '@/models/task';

export async function GET() {
    try {
        await connectDB(); // Añadir 'await' aquí para asegurar la conexión antes de continuar
        const tasks = await Tasks.find();
        return NextResponse.json(tasks);
    } catch (error) {
        return NextResponse.json({ message: "Error al obtener las tareas", error }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        await connectDB(); // Añadir 'await' aquí también
        const data = await request.json(); // Recibe el objeto del cliente
        const newTask = new Tasks(data); // Crea una nueva tarea
        const saveTask = await newTask.save(); // Guarda la tarea en la base de datos
        console.log(saveTask);
        return NextResponse.json(saveTask); // Retorna la tarea guardada en lugar de un mensaje simple
    } catch (error) {
        return NextResponse.json({ message: "Error al crear la tarea", error }, { status: 400 });
    }
}

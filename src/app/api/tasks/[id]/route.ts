import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mongoose";
import Task from "@/models/task";

interface Params {
    params: {
        id: string;
    }
}

export async function GET(request: Request, { params }: Params) {
    try {
        await connectDB();
        const task = await Task.findById(params.id);
        if (!task) return NextResponse.json({ message: "Task not found" }, { status: 404 });
        return NextResponse.json(task);
    } catch (error) {
        return NextResponse.json({ error: "Something went wrong" }, { status: 400 });
    }
}

export async function DELETE(request: Request, { params }: Params) {
    try {
        await connectDB();
        const deleteTask = await Task.findByIdAndDelete(params.id);
        if (!deleteTask)
            return NextResponse.json({ message: "Task not found" }, { status: 404 });
        return NextResponse.json(deleteTask);
    } catch (error) {
        return NextResponse.json({ error: "Something went wrong" }, { status: 400 });
    }
}

export async function PUT(request: Request, { params }: Params) {
    try {
        await connectDB();
        const data = await request.json();
        const taskUpdate = await Task.findByIdAndUpdate(params.id, data, {
            new: true,
        });
        if (!taskUpdate)
            return NextResponse.json({ message: "Task not found" }, { status: 404 });
        return NextResponse.json(taskUpdate);
    } catch (error) {
        return NextResponse.json({ error: "Something went wrong" }, { status: 400 });
    }
}

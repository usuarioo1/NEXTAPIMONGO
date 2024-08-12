import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json('tasks')
}

export function POST() {
    return NextResponse.json('creando')
}
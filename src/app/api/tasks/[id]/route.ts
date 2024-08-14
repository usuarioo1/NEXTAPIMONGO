import { NextResponse } from "next/server";

interface Params {

    params: String
    id:Number
}

export function GET(request:Request,{params}:Params ){
    console.log(params)
    return NextResponse.json(`obteniendo tarea ${params.id}`)
    
    
}

export function DELETE(request: Request, params:Params){
    return NextResponse.json(`eliminando tarea numero  ${params.id}`)
}

export function PUT(request: Request, params:Params){
    return NextResponse.json(`actualizando tarea ${params.id}`)
}
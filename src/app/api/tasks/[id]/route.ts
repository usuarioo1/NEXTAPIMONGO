import { NextResponse } from "next/server";

interface Params {

    params: string
    id:Number
}

export function GET(request:Request,{params}:Params ){
    console.log(params)
    return NextResponse.json(`obteniendo tarea ${params.id}`)
    
    
}

export function DELETE(request: Request, params:Params){
    return
}


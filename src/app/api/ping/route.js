import { connectDB } from '@/utils/mongoose'
import { NextResponse } from 'next/server'

export function GET() {
    connectDB()
    return NextResponse.json('hola')
}
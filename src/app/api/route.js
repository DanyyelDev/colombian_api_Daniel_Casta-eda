import { NextResponse } from "next/server"

export async function GET(){
    const status = "STATUS SERVER: ON"

    return  NextResponse.json(status)
}
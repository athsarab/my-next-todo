import Todo from "@/components/Todo";
import { ConnectDB } from "@/lib/config/db";
import TodoModel from "@/lib/config/models/TodoModel";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await ConnectDB(); // Ensure DB is connected before handling the request
    const todos = await TodoModel.find();
    return NextResponse.json({ todos: todos });
  } catch (error) {
    return NextResponse.json({ error: "Failed to connect to the database" }, { status: 500 });
  }
}

export async function POST(request) {
 
  const { title, description } = await request.json();
  await TodoModel.create({ title, description });
  return NextResponse.json({ message: "Todo add" });
}

export async function DELETE(request) {
 
  const mongoId = await request.nextUrl.searchParams.get("mongoId");
  await TodoModel.findByIdAndDelete(mongoId); 
  return NextResponse.json({ message: "Todo delete" });
}

import { dbConnect } from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

export async function GET() {
  const data = await (await dbConnect("users")).find({}).toArray();
  return new Response(JSON.stringify({ message: "Hello, World!", data }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
export async function POST(request: NextRequest) {
  const reqBody = await request.json();
  const data = await (await dbConnect("users")).insertOne(reqBody);
  revalidatePath("/users");
  return new Response(JSON.stringify({ message: "Data inserted", data }), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
} 

export async function PUT(request: NextRequest) {
  const reqBody = await request.json();
  const { filter, update } = reqBody;
  const data = await (await dbConnect("users")).updateOne(filter, {
    $set: update,
  });
  return new Response(JSON.stringify({ message: "Data updated", data }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
import { dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextRequest } from "next/server";

export async function GET( req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
 ) {
  const { id } = await params;

  let objectId: ObjectId | null = null;
  try {
    objectId = new ObjectId(id);
  } catch (err) {
    return new Response(JSON.stringify({ error: "Invalid id format" }), { status: 400 });
  }

  const doc = await (await dbConnect("users")).findOne({ _id: objectId });

  if (!doc) {
    return new Response(JSON.stringify({ error: "Not found" }), { status: 404 });
  }

  return new Response(JSON.stringify({ data: doc }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(req: NextRequest,
  { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const payload = await req.json();

  // If the route is meant to create a nested resource under :id, handle accordingly.
  // For now we just echo back the payload and id.
  return new Response(JSON.stringify({ id, data: payload }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function PATCH(req: NextRequest,
  { params }: { params: Promise<{ id: string }> }) { 
    const { id } = await params;

  let objectId: ObjectId | null = null;
  try {
    objectId = new ObjectId(id);
  } catch (err) {
    return new Response(JSON.stringify({ error: "Invalid id format" }), { status: 400 });
  }

  const payload = await req.json();
  const doc = await (await dbConnect("users")).updateOne({ _id: objectId }, { $set: payload });
 return new Response(JSON.stringify({ data: doc }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
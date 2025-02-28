import { connectMongoDB } from "@/lib/mongodb";
import Post from "@/models/post";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    const { id } = params
    await connectMongoDB();
    const post = await Post.findOne({ _id: id })
    return NextResponse.json({ post }, { status: 200})
}
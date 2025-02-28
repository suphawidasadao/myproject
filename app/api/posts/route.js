import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import Post from "@/models/post";

export async function POST(req) {
    const { name, type, transmission, seats, fuel, engine, doors, luggage, province, price, images, locations, features, safety } = await req.json();
    console.log(name, type, transmission, seats, fuel, engine, doors, luggage, province, price, images, locations, features, safety)
    await connectMongoDB();
    await Post.create({ name, type, transmission, seats, fuel, engine, doors, luggage, province, price, images, locations, features, safety });
    return NextResponse.json({ message: "Post created"}, { status: 201 })
}

export async function GET() {
    await connectMongoDB();
    const posts = await Post.find({});
    return NextResponse.json({ posts });
}

export async function DELETE(req) {
    const id = req.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Post.findByIdAndDelete(id);
    return NextResponse.json({ message: "Post deleted"}, { status: 200})
    
}
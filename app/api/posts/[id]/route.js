import { connectMongoDB } from "@/lib/mongodb";
import Post from "@/models/post";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    const { id } = params
    await connectMongoDB();
    const post = await Post.findOne({ _id: id })
    return NextResponse.json({ post }, { status: 200})
}

export async function PUT(req, { params }) {
    const { id } = params;
    const { newname: name, newtype: type, newtransmission: transmission, newseats: seats, newfuel: fuel, newengine: engine, newdoors: doors, newluggage: luggage, newprice: price, newprovince: providers, newimages: images, newlocations: locations, newfeatures: features, newsafety: safety} = await req.json();
    await connectMongoDB();
    await Post.findByIdAndUpdate(id, { name, type, transmission, seats, fuel, engine, doors, luggage, price, providers, images, locations, features, safety });
    return NextResponse.json({ message: "Post updated"}, { status: 200})
}
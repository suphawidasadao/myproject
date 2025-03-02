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

export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const province = searchParams.get("province");

        await connectMongoDB();

        let cars;
        if (province) {
            console.log("🔍 API ได้รับ province:", province);
            cars = await Post.find({
                province: province.trim().toLowerCase(),
                status: "available",
            });
        } else {
            console.log("📡 API โหลดรถทั้งหมด");
            cars = await Post.find(); // ✅ โหลดข้อมูลทุกจังหวัด
        }

        console.log("🚗 รถที่พบใน MongoDB:", cars);
        return NextResponse.json({ cars }, { status: 200 });
    } catch (error) {
        console.error("❌ Error ใน API:", error);
        return NextResponse.json({ message: "เกิดข้อผิดพลาดในเซิร์ฟเวอร์", cars: [] }, { status: 500 });
    }
}



export async function DELETE(req) {
    const id = req.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Post.findByIdAndDelete(id);
    return NextResponse.json({ message: "Post deleted"}, { status: 200})
    
}
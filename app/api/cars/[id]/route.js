import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import Post from "@/models/post";

// GET - ดึงข้อมูลรถ
export async function GET(req, { params }) {
    try {
        await connectMongoDB();

        const { id } = params; // ดึง `id` จาก URL

        if (!id) {
            return NextResponse.json({ message: "กรุณาระบุ ID ของรถ", car: null }, { status: 400 });
        }

        const car = await Post.findById(id);

        if (!car) {
            return NextResponse.json({ message: "ไม่พบข้อมูลรถ", car: null }, { status: 404 });
        }

        return NextResponse.json({ car }, { status: 200 });
    } catch (error) {
        console.error("❌ Error fetching car details:", error);
        return NextResponse.json({ message: "เกิดข้อผิดพลาดในเซิร์ฟเวอร์", car: null }, { status: 500 });
    }
}

// PATCH - อัปเดตสถานะของรถ
export async function PATCH(req, { params }) {
    try {
        await connectMongoDB();

        const { id } = params; // ดึง `id` จาก URL
        const { status } = await req.json(); // ดึงสถานะจาก request body

        if (!id) {
            return NextResponse.json({ message: "กรุณาระบุ ID ของรถ" }, { status: 400 });
        }

        // อัปเดตสถานะของรถในฐานข้อมูล
        const updatedCar = await Post.findByIdAndUpdate(id, { status: status }, { new: true });

        if (!updatedCar) {
            return NextResponse.json({ message: "ไม่พบข้อมูลรถที่ต้องการอัปเดต" }, { status: 404 });
        }

        return NextResponse.json({ car: updatedCar }, { status: 200 });
    } catch (error) {
        console.error("❌ Error updating car status:", error);
        return NextResponse.json({ message: "เกิดข้อผิดพลาดในการอัปเดตข้อมูลรถ" }, { status: 500 });
    }
}

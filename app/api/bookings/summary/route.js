import { connectMongoDB } from "@/lib/mongodb";
import Booking from "@/models/booking";
import User from "@/models/user";
import Post from "@/models/post";
import { startOfDay } from "date-fns";
import { NextResponse } from "next/server"; // ใช้ NextResponse

export async function GET(req) {
    try {
        await connectMongoDB(); // ตรวจสอบการเชื่อมต่อกับ MongoDB

        const totalCars = await Post.countDocuments();
        const totalUsers = await User.countDocuments();
        const bookingsToday = await Booking.countDocuments({ createdAt: { $gte: startOfDay(new Date()) } });
        const bookingsThisMonth = await Booking.countDocuments({});

        // ส่งข้อมูลเป็น JSON โดยใช้ NextResponse
        return NextResponse.json({ totalCars, totalUsers, bookingsToday, bookingsThisMonth });
    } catch (error) {
        // ตรวจสอบข้อผิดพลาดในกรณีที่เกิดข้อผิดพลาด
        console.error("Error fetching summary data:", error);
        return NextResponse.json({ error: "Error fetching summary data" }, { status: 500 });
    }
}

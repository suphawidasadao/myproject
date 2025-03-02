import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import Post from "@/models/post";
import Booking from "@/models/booking";

export async function GET(req) {
    await connectMongoDB();
    
    const searchParams = req.nextUrl.searchParams;
    const province = searchParams.get("province");

    let query = {};
    if (province) {
        query.province = { $regex: "^" + province, $options: "i" }; // ✅ ค้นหาชื่อจังหวัด
    }

    // ดึงข้อมูลรถทั้งหมดตามเงื่อนไข province
    const cars = await Post.find(query).lean();

    // ดึงรายการที่ถูกจอง (เฉพาะที่ "confirmed")
    const bookedCars = await Booking.find({ status: "confirmed" }).select("carId").lean();
    const bookedCarIds = bookedCars.map(booking => booking.carId.toString());

    // อัปเดต status ของรถ ถ้ามีใน bookedCarIds ให้เป็น "Booked"
    const carsWithStatus = cars.map(car => ({
        ...car,
        status: bookedCarIds.includes(car._id.toString()) ? "Booked" : "Available"
    }));

    return NextResponse.json({ posts: carsWithStatus }, { status: 200 });
}

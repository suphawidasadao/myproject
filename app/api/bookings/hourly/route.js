import { connectMongoDB } from "@/lib/mongodb";
import Booking from "@/models/booking";
import { NextResponse } from "next/server";  // นำเข้า NextResponse

export async function GET(req) {  // ไม่จำเป็นต้องใช้ `res` หากใช้ NextResponse
    await connectMongoDB();

    try {
        // ใช้ $hour ใน aggregation เพื่อแยกตามชั่วโมง
        const hourlyBookings = await Booking.aggregate([
            {
                $group: {
                    _id: { $hour: "$createdAt" },  // หรือ "$startDate" ถ้าคุณอยากใช้ startDate
                    count: { $sum: 1 }  // นับจำนวนการจอง
                }
            },
            {
                $sort: { _id: 1 }  // เรียงตามชั่วโมง
            }
        ]);

        // ใช้ NextResponse เพื่อคืนค่าผลลัพธ์
        return NextResponse.json(hourlyBookings);  // คืนค่า JSON ของผลลัพธ์
    } catch (error) {
        console.error("Error fetching hourly bookings:", error);
        // คืนค่า error response หากเกิดข้อผิดพลาด
        return NextResponse.json({ error: "Error fetching hourly bookings" }, { status: 500 });
    }
}

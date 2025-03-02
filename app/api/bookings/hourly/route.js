import { connectMongoDB } from "@/lib/mongodb";
import Booking from "@/models/booking";

export async function GET(req, res) {
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

        return res.status(200).json(hourlyBookings);
    } catch (error) {
        console.error("Error fetching hourly bookings:", error);
        return res.status(500).json({ error: "Error fetching hourly bookings" });
    }
}

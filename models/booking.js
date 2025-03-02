import mongoose, { Schema } from "mongoose";

const bookingSchema = new Schema({
    carId: { type: Schema.Types.ObjectId, ref: "Post", required: true }, // รถที่ถูกจอง
    userId: { type: Schema.Types.ObjectId, ref: "User" }, // ถ้ามีระบบล็อกอิน, ผู้จองต้อง login
    firstname: { type: String, required: true }, // ชื่อจริง
    lastname: { type: String, required: true }, // นามสกุล
    email: { type: String, required: true }, // อีเมล
    phone: { type: String, required: true }, // เบอร์โทร
    additionalInfo: { type: String }, // รายละเอียดเพิ่มเติม
    startDate: { type: Date, required: true }, // วันที่รับรถ
    endDate: { type: Date, required: true }, // วันที่คืนรถ
    location: { type: String, required: true }, // สถานที่รับ-คืนรถ
    totalPrice: { type: Number, required: true }, // ราคารวมของการเช่า
    status: { type: String, enum: ["pending", "confirmed", "cancelled"], default: "pending" }, // สถานะของการจอง
}, { timestamps: true }); // timestamps จะเก็บ createdAt, updatedAt อัตโนมัติ

const Booking = mongoose.models.Booking || mongoose.model("Booking", bookingSchema);
export default Booking;

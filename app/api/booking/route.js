import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import Booking from "@/models/booking";
import Post from "@/models/post";  // Import the Post model
import nodemailer from "nodemailer";

// เชื่อมต่อ MongoDB
await connectMongoDB();

// ฟังก์ชันส่งอีเมล
const sendBookingEmailToAdmin = async (booking) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // ใช้ email ที่ใช้ส่ง
      pass: process.env.EMAIL_PASS, // ใช้ password หรือ app password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.ADMIN_EMAIL, // อีเมลของแอดมิน
    subject: `New Booking from ${booking.firstname} ${booking.lastname}`,
    text: `
      Booking Details:
      Name: ${booking.firstname} ${booking.lastname}
      Email: ${booking.email}
      Phone: ${booking.phone}
      Car: ${booking.carId.name}  // เพิ่มชื่อรถที่นี่
      Start Date: ${booking.startDate}
      End Date: ${booking.endDate}
      Total Price: ฿${booking.totalPrice}
      Status: ${booking.status}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Booking email sent to admin.");
  } catch (error) {
    console.error("Error sending email to admin:", error);
  }
};

export const POST = async (req) => {
  try {
    const body = await req.json(); // อ่านข้อมูลจาก Request

    // Populate carId to get car details, including the car name
    const booking = await Booking.create(body);
    const populatedBooking = await Booking.findById(booking._id).populate('carId', 'name');  // Populate carId with the name field

    // ส่งข้อมูลไปยังแอดมินผ่านอีเมล
    await sendBookingEmailToAdmin(populatedBooking);  // Use the populated booking with car name

    return NextResponse.json({ message: "Booking successful", booking: populatedBooking }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error creating booking", error: error.message }, { status: 500 });
  }
};

// ✅ ถ้าต้องการรองรับ GET ด้วย
// In your GET API route for /api/booking
export const GET = async () => {
    try {
      const bookings = await Booking.find()
        .populate('carId', 'name image');  // เพิ่ม image ให้ populate
      return NextResponse.json(bookings, { status: 200 });
    } catch (error) {
      return NextResponse.json({ message: "Error fetching bookings", error: error.message }, { status: 500 });
    }
  };
  

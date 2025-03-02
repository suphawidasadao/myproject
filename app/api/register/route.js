import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import bcrypt from "bcryptjs";

export async function POST(req) {
    try {
        const { firstname, lastname, name, email, password, phone } = await req.json();
        console.log("📦 Received Data:", { firstname, lastname, name, email, phone });

        // ตรวจสอบว่าค่าที่รับมาเป็น String ทั้งหมดหรือไม่
        if (typeof name !== "string") {
            throw new Error(`❌ name ต้องเป็น String แต่ได้ค่า: ${typeof name}`);
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        await connectMongoDB();

        const newUser = new User({
            firstname,
            lastname,
            name,
            email,
            phone,
            password: hashedPassword,
            role: email === "admin@gmail.com" ? "admin" : "user"
        });

        console.log("✅ Saving User:", newUser);

        await newUser.save();

        return NextResponse.json({ message: "User registered." }, { status: 201 });

    } catch (error) {
        console.error("❌ Registration Error:", error);
        return NextResponse.json(
            { message: "เกิดข้อผิดพลาดในการลงทะเบียน", error: error.message },
            { status: 500 }
        );
    }
}

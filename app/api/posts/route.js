import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import bcrypt from "bcryptjs";

export async function POST(req) {
    try {
        const { firstname, lastname, name, email, password, phone } = await req.json();  // เพิ่ม phone
        const hashedPassword = await bcrypt.hash(password, 10);

        await connectMongoDB();

        const isAdminEmail = email === "admin@gmail.com";

        await User.create({
            firstname,
            lastname,
            name,
            email,
            password: hashedPassword,
            phone: phone || "",  // ถ้า phone ไม่มีค่า ให้ใส่เป็น ""
            role: isAdminEmail ? "admin" : "user",
        });

        return NextResponse.json({ message: "User registered." }, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { message: "An error occurred while registering the user." },
            { status: 500 }
        );
    }
}

import { NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";

export async function POST(req) {
  try {
    // อ่านข้อมูลจาก FormData
    const formData = await req.formData();
    const file = formData.get("image");

    if (!file) {
      return NextResponse.json({ message: "No file uploaded" }, { status: 400 });
    }

    // ตรวจสอบโฟลเดอร์อัปโหลด ถ้ายังไม่มีให้สร้าง
    const uploadDir = path.join(process.cwd(), "public/uploads");
    await fs.mkdir(uploadDir, { recursive: true });

    // สร้างไฟล์ปลายทาง
    const filePath = path.join(uploadDir, `${Date.now()}_${file.name}`);
    const bytes = await file.arrayBuffer();
    await fs.writeFile(filePath, Buffer.from(bytes));

    return NextResponse.json({
      message: "Upload successful!",
      file: `/uploads/${path.basename(filePath)}`,
    });
  } catch (error) {
    console.error("Upload Error:", error);
    return NextResponse.json({ message: "Upload failed", error: error.message }, { status: 500 });
  }
}

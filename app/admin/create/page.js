"use client";

import React, { useState } from "react";
import Sidebar from "../../components/sidebar";
import { useRouter } from 'next/navigation'
import Image from 'next/image';
import Link from "next/link";


export default function CreatePostPage() {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [transmission, setTransmission] = useState("");
    const [seats, setSeats] = useState(4);
    const [fuel, setFuel] = useState("");
    const [engine, setEngine] = useState("");
    const [doors, setDoors] = useState(0);
    const [luggage, setLuggage] = useState(0);
    const [price, setPrice] = useState("");
    const [province, setProvince] = useState("");
    const [images, setImages] = useState([]); // เก็บ URL ของรูปที่เลือก
    const [locations, setLocations] = useState(""); // รับค่าเป็น string เช่น "BTS อโศก:100, MRT Sukhumvit:150"
    const [features, setFeatures] = useState(""); // รับเป็น string เช่น "วิทยุ, ระบบกันขโมย"
    const [safety, setSafety] = useState(""); // รับเป็น string เช่น "ABS, Airbags"

    const router = useRouter();

    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // สร้าง URL ของรูปที่เลือก (พรีวิวรูปก่อนอัปโหลด)
        const previewUrl = URL.createObjectURL(file);
        setImages([...images, previewUrl]); // เพิ่มพรีวิวลงใน state

        const formData = new FormData();
        formData.append("image", file);

        try {
            const res = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(`Upload failed: ${data.message}`);
            }

            console.log("Upload success:", data);

            // อัปเดตพรีวิวรูปให้เป็น URL จากเซิร์ฟเวอร์
            setImages((prevImages) =>
                prevImages.map((img) => (img === previewUrl ? data.file : img))
            );
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    };

    const handleRemoveImage = (index) => {
        setImages(images.filter((_, i) => i !== index));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        // แปลง locations จาก string เป็น array ของ object
        // รูปแบบ input: "BTS อโศก:100, MRT Sukhumvit:150"
        const locationsArray = locations
            .split(",")
            .map(item => item.trim())
            .filter(item => item !== "")
            .map(item => {
                const [place, fee] = item.split(":").map(str => str.trim());
                return { place, fee: Number(fee) }; // ตรวจสอบให้แน่ใจว่า fee เป็น Number
            });

        // แปลง features และ safety จาก string เป็น array โดยใช้ comma
        const featuresArray = features
            .split(",")
            .map(item => item.trim())
            .filter(item => item !== "");
        const safetyArray = safety
            .split(",")
            .map(item => item.trim())
            .filter(item => item !== "");

        // ตัวอย่างข้อมูลที่จะส่ง (คุณสามารถปรับส่งไปยัง API หรือจัดการตามที่ต้องการ)
        const postData = {
            name,
            type,
            transmission,
            seats,
            fuel,
            engine,
            doors,
            luggage,
            province,
            price,
            images: images,
            locations: locationsArray,  // ส่งเป็น array ของ objects
            features: featuresArray,
            safety: safetyArray,
        };

        try {
            const res = await fetch("http://localhost:3000/api/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(postData) // ส่ง postData ทั้งหมด
            });

            if (res.ok) {
                router.push("/admin/carmanagement");
            } else {
                throw new Error("Failed to create a post");
            }

        } catch (error) {
            console.log(error);
        }
        images.forEach((image) => {
            formData.append('images', image);  // ส่งรูปภาพเป็นไฟล์
        });


    };

    return (
        <div className="relative bg-gray-100 min-h-screen flex">
            <Sidebar />
            <div className="p-6 w-full sm:w-4/5 md:w-3/4  mx-auto">
                <h3 className="text-xl font-semibold mb-7 text-gray-800">
                    Create a New Car Rental Post
                </h3>
                <ul className="mx-auto mb-4 flex space-x-2 mt-5 text-sm text-gray-500">
                    <li>
                        <Link href="/admin/carmanagement" className="hover:text-blue-600">
                            Car Management
                        </Link>
                    </li>
                    <li>&gt;</li>
                    <li>
                        <Link href="/profilepage" className="text-blue-600">
                            Create
                        </Link>
                    </li>
                </ul>

                <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-lg shadow-md">
                    <div className="flex flex-col gap-6">
                        {/* ชื่อรถ */}
                        <label className="block text-sm font-medium">ชื่อรถ</label>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            placeholder="ระบุชื่อรถ"
                            required
                            className="w-full p-2 border border-gray-300 rounded text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        {/* เลือกรูปรถ */}
                        <label className="block text-sm font-medium">เลือกรูปรถ</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            multiple
                            required
                            id="car-images"
                            className="hidden"
                        />
                        <label
                            htmlFor="car-images"
                            className="w-24 cursor-pointer text-center rounded border-2 border-gray-500 px-3 py-2 text-xs bg-gray-300 hover:bg-gray-500"
                        >
                            Choose File
                        </label>
                        {/* แสดงพรีวิวรูปที่เลือก */}
                        {images.length > 0 && (
                            <div className="mt-4 flex gap-4 flex-wrap">
                                {images.map((image, index) => (
                                    <div key={index} className="relative">
                                        <Image
                                            src={image}
                                            alt={`Car Image ${index}`}
                                            width={200}
                                            height={200}
                                            className="object-cover rounded"
                                        />
                                        {/* ปุ่มลบรูป (กากบาท) */}
                                        <button
                                            className="absolute text-base top-1 right-1 bg-gray-400 text-gray-200 hover:text-gray-500 rounded-full w-5 h-5 flex items-center justify-center"
                                            onClick={() => handleRemoveImage(index)}
                                        >
                                            X
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}


                        {/* ประเภทรถ */}
                        <label className="block text-sm font-medium">ประเภท</label>
                        <select
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            required
                            className="w-full p-2 border rounded text-xs"
                        >
                            <option value="">-- เลือกประเภทรถ --</option>
                            <option value="Sedan">Sedan</option>
                            <option value="SUV">SUV</option>
                            <option value="Truck">Pickup</option>
                            <option value="Van">Van</option>
                        </select>

                        {/* ระบบเกียร์ */}
                        <label className="block text-sm font-medium">ระบบเกียร์</label>
                        <select
                            value={transmission}
                            onChange={(e) => setTransmission(e.target.value)}
                            required
                            className="w-full p-2 border border-gray-300 rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="" disabled>
                                เลือกระบบเกียร์
                            </option>
                            <option value="manual">เกียร์ธรรมดา</option>
                            <option value="automatic">เกียร์อัตโนมัติ</option>
                        </select>

                        {/* จำนวนที่นั่ง */}
                        <label className="block text-sm font-light">จำนวนที่นั่ง</label>
                        <input
                            value={seats}
                            onChange={(e) => setSeats(Number(e.target.value))}
                            type="number"
                            placeholder="Seats"
                            required
                            className="w-full p-2 border border-gray-300 rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        {/* ระบบเชื้อเพลิง */}
                        <label className="block text-sm font-light">ระบบเชื้อเพลิง</label>
                        <select
                            value={fuel}
                            onChange={(e) => setFuel(e.target.value)}
                            required
                            className="w-full p-2 border border-gray-300 rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">-- เลือกประเภทเชื้อเพลิง --</option>
                            <option value="เบนซิน">เบนซิน</option>
                            <option value="ดีเซล">ดีเซล</option>
                            <option value="ไฟฟ้า">ไฟฟ้า</option>
                            <option value="แก๊ส (LPG/NGV)">แก๊ส (LPG/NGV)</option>
                        </select>

                        {/* ความจุเครื่องยนต์ พร้อมหน่วย cc */}
                        <label className="block text-sm font-light">ความจุเครื่องยนต์</label>
                        <div className="relative">
                            <input
                                value={engine}
                                onChange={(e) => setEngine(parseInt(e.target.value) || 0)}
                                type="text" // เปลี่ยนจาก number เป็น text
                                inputMode="numeric"
                                pattern="[0-9]*"
                                placeholder="ระบุความจุเครื่องยนต์"
                                required
                                className="w-full p-2 border border-gray-300 rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12 appearance-none"
                            />
                            <span className="absolute inset-y-0 right-2 flex items-center text-gray-500 text-xs">
                                cc
                            </span>
                        </div>

                        {/* จำนวนประตู */}
                        <label className="block text-sm font-light">จำนวนประตู</label>
                        <input
                            value={doors}
                            onChange={(e) => setDoors(Number(e.target.value))}
                            type="number"
                            placeholder="ระบุจำนวนประตู"
                            required
                            className="w-full p-2 border border-gray-300 rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        {/* จำนวนสัมภาระ */}
                        <label className="block text-sm font-light">จำนวนสัมภาระ</label>
                        <input
                            value={luggage}
                            onChange={(e) => setLuggage(Number(e.target.value))}
                            type="number"
                            placeholder="ระบุจำนวนสัมภาระ"
                            required
                            className="w-full p-2 border border-gray-300 rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        {/* จังหวัด */}
                        <label className="block text-sm font-light">จังหวัด</label>
                        <input
                            value={province}
                            onChange={(e) => setProvince(e.target.value)}
                            type="text"
                            placeholder="ระบุจังหวัด"
                            required
                            className="w-full p-2 border border-gray-300 rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        {/* ราคา */}
                        <label className="block text-sm font-light">ราคา (บาท/วัน)</label>
                        <input
                            value={price}
                            onChange={(e) => setPrice(Number(e.target.value))}
                            type="number"
                            placeholder="ระบุราคา"
                            required
                            className="w-full p-2 border border-gray-300 rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        {/* Locations */}
                        <label className="block text-sm font-medium">ที่ตั้งรถ</label>
                        <input
                            value={locations}
                            onChange={(e) => setLocations(e.target.value)}
                            type="text"
                            placeholder="เช่น BTS อโศก:100, MRT Sukhumvit:150"
                            required
                            className="w-full p-2 border border-gray-300 rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        {/* Features */}
                        <label className="block text-sm font-medium">คุณสมบัติ</label>
                        <input
                            value={features}
                            onChange={(e) => setFeatures(e.target.value)}
                            type="text"
                            placeholder="ระบุคุณสมบัติ (เช่น วิทยุ, ระบบกันขโมย)"
                            required
                            className="w-full p-2 border border-gray-300 rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        {/* Safety */}
                        <label className="block text-sm font-medium">ระบบความปลอดภัย</label>
                        <input
                            value={safety}
                            onChange={(e) => setSafety(e.target.value)}
                            type="text"
                            placeholder="ระบุระบบความปลอดภัย (เช่น ABS, Airbags)"
                            required
                            className="w-full p-2 border border-gray-300 rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* ปุ่ม Submit */}
                    <button
                        type="submit"
                        className="w-full p-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        สร้างโพสต์
                    </button>
                </form>
            </div>
        </div>
    );
}

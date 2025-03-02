"use client";

import Image from 'next/image';
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from 'next/navigation';
import { useParams } from "next/navigation";
import Footer from '@/app/components/footer';
import Navbar from '@/app/components/navbar';
import Link from 'next/link';

const CarDetailPage = () => {
    const { id } = useParams();
    const searchParams = useSearchParams();
    const router = useRouter();
    const [car, setCar] = useState(null);
    const [loading, setLoading] = useState(true);
    const [days, setDays] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);
    const [deliveryFee, setDeliveryFee] = useState(0); // ✅ เก็บค่ารับ-ส่งจาก `locations`

    // ✅ ดึงค่าจาก URL
    const pickupDateStr = searchParams.get("pickup");
    const returnDateStr = searchParams.get("return");

    // ✅ แปลงวันที่ให้อ่านง่าย
    const formatDateTime = (dateStr) => {
        if (!dateStr) return "ไม่ระบุ";
        const date = new Date(dateStr);
        return date.toLocaleString("th-TH", {
            year: "numeric", month: "long", day: "numeric",
            hour: "2-digit", minute: "2-digit", hour12: false
        }) + " น.";
    };

    // ✅ โหลดข้อมูลรถ
    useEffect(() => {
        if (!id) return;

        fetch(`/api/cars/${id}`)
            .then(res => res.json())
            .then(data => {
                setCar(data.car || null);
                setLoading(false);

                // ✅ ถ้ามี locations ให้นำค่ารับ-ส่งมาใช้
                if (data.car.locations && data.car.locations.length > 0) {
                    const fee = data.car.locations.reduce((acc, loc) => acc + loc.fee, 0); // รวมค่ารับ-ส่ง
                    setDeliveryFee(fee);
                }
            })
            .catch(error => {
                console.error("❌ Fetch error:", error);
                setLoading(false);
            });
    }, [id]);

    // ✅ คำนวณจำนวนวัน
    useEffect(() => {
        if (!pickupDateStr || !returnDateStr) return;

        const pickupDate = new Date(pickupDateStr);
        const returnDate = new Date(returnDateStr);
        const diffTime = returnDate - pickupDate;
        const calculatedDays = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));

        setDays(calculatedDays);
    }, [pickupDateStr, returnDateStr]);

    // ✅ คำนวณราคารวม
    useEffect(() => {
        if (car) {
            const pricePerDay = car.price || 0;
            setTotalPrice(pricePerDay * days + deliveryFee); // ✅ บวกค่ารับ-ส่งจาก locations
        }
    }, [car, days, deliveryFee]);

    if (loading) return <p className="text-center text-gray-500">กำลังโหลดข้อมูล...</p>;
    if (!car) return <p className="text-center text-red-500">ไม่พบข้อมูลรถ</p>;

    return (
        <div className="relative">
            <Navbar />

            <div className="container mx-auto px-6 lg:px-24 py-6">
                {/* 🔗 Breadcrumbs */}
                <ul className="mb-4 flex space-x-2 text-sm text-gray-500">
                    <li><Link href="/" className="hover:text-blue-600">หน้าแรก</Link></li>
                    <li>&gt;</li>
                    <li><Link href="/cars" className="hover:text-blue-600">ผลการค้นหา</Link></li>
                    <li>&gt;</li>
                    <li><Link href="#" className="text-blue-600">รายละเอียดรถ</Link></li>
                </ul>

                {/* ✅ **หัวข้อชื่อรถ** */}
                <h1 className="text-2xl font-bold text-gray-800 mb-6">{car.name}</h1>

                {/* ✅ **รูปภาพรถ** */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                    {car.images.map((image, index) => (
                        <Image
                            key={index}
                            src={image || "/placeholder-car.jpg"}
                            alt={car.name}
                            width={600}
                            height={400}
                            className="rounded-lg object-cover"
                        />
                    ))}
                </div>

                {/* ✅ **ข้อมูลรถ** */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* ✅ **ซ้าย: รายละเอียดรถ** */}
                    <div className="grid grid-cols-2 gap-x-12 gap-y-8">
                        {[
                            { icon: "🚗", label: "ประเภทรถ", value: car.type },
                            { icon: "⚙️", label: "ระบบเกียร์", value: car.transmission },
                            { icon: "👥", label: "จำนวนที่นั่ง", value: `${car.seats} ที่นั่ง` },
                            { icon: "⛽", label: "ระบบเชื้อเพลิง", value: car.fuel },
                            { icon: "🚀", label: "ความจุเครื่องยนต์", value: `${car.engine} CC` },
                            { icon: "🚪", label: "จำนวนประตู", value: `${car.doors} ประตู` },
                            { icon: "🎒", label: "จำนวนสัมภาระ", value: `${car.luggage} ใบ` },
                            { icon: "📍", label: "จังหวัด", value: car.province },
                        ].map((item, index) => (
                            <div key={index} className="flex items-center gap-4">
                                <span className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-lg">
                                    {item.icon}
                                </span>
                                <div>
                                    <span className="text-sm text-gray-400">{item.label}</span>
                                    <p className="text-base">{item.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* ✅ **ขวา: กล่องข้อมูลราคาและปุ่มจอง** */}
                    <div className="bg-white p-4 rounded-xl shadow-md w-full max-w-sm mx-auto">
                        <h2 className="text-base font-semibold mb-4">รายละเอียด</h2>

                        {/* ✅ ค่าเช่ารถ */}
                        <div className="mb-4">
                            <p className="flex justify-between">
                                <span className="text-sm">ค่าเช่ารถ {days} วัน</span>
                                <span className="font-semibold text-sm">฿{car.price * days}</span>
                            </p>
                            <ul className="ml-4 text-gray-600 text-sm mt-2">
                                <li>ราคาต่อวัน ฿{car.price} × {days} วัน</li>
                            </ul>
                        </div>

                        {/* ✅ ค่ารับ-ค่าส่ง (จาก locations) */}
                        <div className="mb-4 text-sm">
                            <p className="text-sm font-semibold">ค่ารับ - ค่าส่ง</p>

                            {/* ✅ ถ้ามีค่ารับ-ส่ง แสดงรายการ */}
                            {car.locations?.length > 0 ? (
                                <ul className="ml-4 text-gray-600 text-sm mt-2">
                                    {car.locations.map((loc, index) => (
                                        <li key={index} className="flex justify-between">
                                            <span>{loc.place}</span>
                                            <span className="font-semibold text-green-500">
                                                {loc.fee > 0 ? `฿${loc.fee}` : "ฟรี"}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-green-500 font-semibold mt-2">ฟรี</p>
                            )}
                        </div>

                        {/* ✅ ราคารวมทั้งหมด */}
                        <hr className="border-gray-300 my-4" />
                        <div className="mb-4">
                            <p className="flex justify-between text-sm font-bold">
                                <span>ราคารวมทั้งหมด</span>
                                <span className='text-base'>฿{totalPrice}</span>
                            </p>
                            <p className="flex justify-between text-sm mt-2">
                                <span className='text-gray-600 text-sm'>ค่ามัดจำในวันรับรถ (ได้คืนในวันคืนรถ)</span>
                                <span>฿3000</span>
                            </p>
                        </div>

                        {/* ✅ ปุ่มเช่ารถ */}
                        <button
                            onClick={() => {
                                // แปลง pickupDateStr และ returnDateStr ให้เป็น Date ใน onClick
                                const pickupDate = new Date(pickupDateStr);
                                const returnDate = new Date(returnDateStr);

                                // ส่งข้อมูลไปยัง URL
                                router.push(`/rent_car1?carId=${car._id}&name=${car.name}&pickup=${pickupDate.toISOString()}&return=${returnDate.toISOString()}&price=${car.price}&province=${car.province}`);
                            }}
                            className="w-full bg-green-500 text-white py-2 rounded-lg mt-3 text-sm hover:bg-green-600 transition"
                        >
                            เช่ารถคันนี้
                        </button>

                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default CarDetailPage;

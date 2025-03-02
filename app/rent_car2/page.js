"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Link from "next/link";

const RentCarPage2 = () => {
    const searchParams = useSearchParams();
    const [isBooked, setIsBooked] = useState(false); // ✅ เช็คว่าจองสำเร็จหรือไม่
    const [carData, setCarData] = useState(null); // ✅ เก็บข้อมูลรถ
    const [days, setDays] = useState(1); // ✅ จำนวนวันเช่ารถ
    const [hasBooked, setHasBooked] = useState(false); // ✅ เช็คว่าได้ทำการจองไปแล้ว

    // ✅ ดึงค่าจาก URL
    const carId = searchParams.get("carId");
    const name = searchParams.get("name");
    const price = Number(searchParams.get("price")) || 0; // ✅ แปลงเป็น Number
    const province = searchParams.get("province");
    const pickupDateStr = searchParams.get("pickup");
    const returnDateStr = searchParams.get("return");
    const firstName = searchParams.get("firstName");
    const lastName = searchParams.get("lastName");
    const email = searchParams.get("email");
    const phone = searchParams.get("phone");

    // ✅ แปลงวันที่จาก string เป็น Date
    const pickupDate = pickupDateStr ? new Date(pickupDateStr) : null;
    const returnDate = returnDateStr ? new Date(returnDateStr) : null;

    // ✅ คำนวณจำนวนวันระหว่างวันที่รับรถและคืนรถ
    useEffect(() => {
        if (pickupDate && returnDate) {
            const diffTime = returnDate - pickupDate;
            const diffDays = Math.ceil(diffTime / (1000 * 3600 * 24)); 
            setDays(diffDays); // ตั้งค่าจำนวนวัน
        }
    }, [pickupDate, returnDate]);

    // ✅ ดึงข้อมูลรถจาก API
    useEffect(() => {
        if (!carId) return;
        
        fetch(`/api/cars/${carId}`)
            .then(res => res.json())
            .then(data => {
                setCarData(data.car || null);
            })
            .catch(error => {
                console.error("❌ Fetch error:", error);
            });
    }, [carId]);

    // ✅ ฟังก์ชันเมื่อกดปุ่ม "ยืนยันการจอง"
    const handleBooking = async () => {
        const bookingData = {
            carId,
            firstname: firstName, // ใช้ข้อมูลที่ส่งมา
            lastname: lastName,
            email: email,
            phone: phone,
            additionalInfo: "รายละเอียดเพิ่มเติม", // สามารถกรอกได้ในฟอร์ม
            startDate: pickupDateStr,
            endDate: returnDateStr,
            location: province,
            totalPrice: totalPrice + 3000, // รวมค่ามัดจำ
            status: "pending"
        };
    
        try {
            const response = await fetch("/api/booking", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(bookingData)
            });
    
            if (response.ok) {
                setIsBooked(true);
                setHasBooked(true); // ✅ จัดเก็บสถานะการจอง
            } else {
                console.error("❌ Booking failed:", response.statusText);
            }
        } catch (error) {
            console.error("❌ Error:", error);
        }
    };
    
    if (!carData) return <p className="text-center text-gray-500">กำลังโหลดข้อมูลรถ...</p>;

    const totalPrice = price * days; // คำนวณราคาเช่าทั้งหมด

    return (
        <div className="relative">
            <Navbar />

            <div className="container mx-auto px-24 mt-4 flex gap-4">
                {/* ✅ ส่วนสรุปการจอง */}
                <div className="bg-white p-4 rounded-lg shadow-md w-[262px]">
                    <h2 className="text-base font-bold mb-4 text-gray-800">สรุปทริปการเดินทาง</h2>
                    <div className="flex items-center mb-4">
                        <img
                            src={carData.images[0] || "/placeholder-car.jpg"}
                            alt={carData.name}
                            className="w-32 h-26 rounded-md"
                        />
                        <div className="ml-4">
                            <h3 className="text-sm font-medium">{carData.name}</h3>
                            <p className="text-xs text-gray-600">{carData.transmission}</p>
                        </div>
                    </div>
                    <p className="text-sm text-gray-600">จังหวัด: {province}</p>
                </div>

                {/* ✅ ส่วนสรุปรายละเอียดการจอง */}
                <div className="bg-white px-6 rounded-lg shadow-lg w-full mx-auto flex-1 h-[610px]">
                    <h3 className="text-base mt-4 font-bold mb-4 text-gray-800">สรุปรายการชำระทั้งหมด</h3>

                    {/* ✅ ค่าเช่ารถ */}
                    <div className="mb-4">
                        <p className="flex justify-between">
                            <span className="text-sm">ค่าเช่ารถ {days} วัน</span>
                            <span className="font-semibold text-sm">฿{totalPrice}</span>
                        </p>
                        <ul className="ml-4 text-gray-600 text-sm mt-2">
                            <li>ราคาต่อวัน ฿{price} × {days} วัน</li>
                        </ul>
                    </div>

                    {/* ✅ ค่ารับ-ค่าส่ง (จาก locations) */}
                    <div className="mb-4 text-sm">
                        <p className="text-sm font-semibold">ค่ารับ - ค่าส่ง</p>

                        {/* ✅ ถ้ามีค่ารับ-ส่ง แสดงรายการ */}
                        {carData.locations?.length > 0 ? (
                            <ul className="ml-4 text-gray-600 text-sm mt-2">
                                {carData.locations.map((loc, index) => (
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
                            <span>Total</span>
                            <span className='text-base'>฿{totalPrice + 3000}</span>
                        </p>
                    </div>

                    {/* ✅ ค่ามัดจำ */}
                    <div className="mb-6">
                        <h4 className="flex justify-between font-semibold text-xs text-blue-600 border-t border-dashed pt-3 mt-3">
                            <span>ค่ามัดจำ</span>
                            <span className="text-black">฿3,000</span>
                        </h4>
                        <p className="text-xs text-gray-600 mb-3">
                            ได้รับคืนในวันคืนรถตามเงื่อนไขของบริษัทกำหนด
                        </p>
                        <div className="flex justify-between font-bold text-sm text-gray-800 border-t border-dashed pt-3 mt-3">
                            <span>Total</span>
                            <span>฿3,000</span>
                        </div>
                    </div>

                    {/* ✅ ที่ต้องชำระตอนนี้ */}
                    <div className="mb-6">
                        <h4 className="font-semibold text-xs text-blue-600 mb-3">ที่ต้องชำระตอนนี้</h4>
                        <div className="flex justify-between font-bold text-green-600 text-base border-t border-dashed pt-3 mt-3">
                            <span>Total</span>
                            <span>฿0</span>
                        </div>
                    </div>

                    {/* ✅ ปุ่มยืนยันการจอง */}
                    <button
                        type="button"
                        className={`w-full bg-blue-500 text-white py-2 rounded-md text-center font-medium hover:bg-blue-600 transition text-xs ${hasBooked ? "opacity-50 cursor-not-allowed" : ""}`}
                        onClick={handleBooking}
                        disabled={hasBooked}
                    >
                        ยืนยันข้อมูลเพื่อเช่ารถ
                    </button>

                    {/* ✅ แสดง Popup เมื่อจองสำเร็จ */}
                    {isBooked && (
                        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
                            <div className="bg-white p-12 rounded-lg shadow-2xl transform scale-110 transition-all duration-500 relative">
                                <p className="text-xl items-center flex justify-center font-semibold text-gray-700 mb-4">รออนุมัติ</p>

                                <Link href="/rentals">
                                    <button className="bg-blue-500 text-white w-full px-6 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-600 transition text-xs">
                                        การเช่ารถของฉัน
                                    </button>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <Footer className="mt-10" />
        </div>
    );
};

export default RentCarPage2;
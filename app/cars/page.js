"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Navbar from "../components/navbar";
import Search from "../components/search";
import Footer from "../components/footer";
import Image from "next/image";

const SearchResultPage = () => {
    const searchParams = useSearchParams();
    const province = searchParams.get("province") || "";
    const pickupDate = searchParams.get("pickup") || "";
    const returnDate = searchParams.get("return") || "";
    const [cars, setCars] = useState([]);
    const router = useRouter();

    useEffect(() => {
        if (!province) return;

        console.log("📡 Fetching data from API:", `/api/posts?province=${encodeURIComponent(province)}`);

        fetch(`/api/posts?province=${encodeURIComponent(province)}`)
            .then(res => res.ok ? res.json() : Promise.reject('Failed to fetch'))
            .then(data => {
                console.log("📦 ข้อมูลที่ได้จาก API:", data);
                setCars(data.cars || []);
            })
            .catch(error => console.error("❌ Fetch error:", error));
    }, [province]);

    return (
        <div className="relative">
            {/* ✅ Navbar */}
            <Navbar />

            {/* ✅ ช่องค้นหาที่มีค่าเดิมอยู่ */}
            <Search defaultProvince={province} defaultPickup={pickupDate} defaultReturn={returnDate} />

            {/* ✅ แสดงผลการค้นหา */}
            <div className="container py-6">
                <h1 className="text-base font-medium text-gray-800 mb-4 mx-auto px-48">
                    ผลการค้นหาในจังหวัด: {province || "ยังไม่มีข้อมูล"}
                </h1>

                {cars.length > 0 ? (
                    <div className="flex flex-col space-y-6">
                        {cars.map((car) => (
                            <div key={car._id} className="bg-gray-200 w-screen h-auto py-5">
                                <div className="container mx-auto px-24">
                                    <div className="bg-white rounded-md shadow-sm overflow-hidden border p-3 flex flex-col md:flex-row">
                                        {/* ✅ รูปภาพ */}
                                        <div className="w-full md:w-1/3">
                                            <img
                                                src={car.images[0] || "/placeholder-car.jpg"} // ✅ ใช้รูปจาก API
                                                alt={car.name}
                                                className="w-full h-28 md:h-40 object-cover rounded-md"
                                            />
                                        </div>

                                        {/* ✅ รายละเอียดรถ */}
                                        <div className="w-full md:w-2/3 pl-0 md:pl-5 flex flex-col justify-between mt-2 md:mt-0">
                                            <div>
                                                <h2 className="text-sm font-semibold text-gray-800">{car.name}</h2>
                                                <p className="text-xs text-gray-600 mt-1">
                                                    {car.type}, เกียร์ {car.transmission}, {car.engine}cc, {car.fuel}
                                                </p>
                                                <div className="flex items-center mt-1">
                                                    <Image src="/car.svg" alt="Logo" width={20} height={20} />
                                                    <p className="text-xs text-gray-500 ml-1">ฟรีประกันภัย</p>
                                                    <span className="mx-1">•</span>
                                                    <p className="text-xs text-gray-500">1 ขั้นพื้นฐาน</p>
                                                </div>

                                                <div className="flex flex-col items-end mt-3">
                                                    <div className="flex items-center space-x-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width={14} height={14}>
                                                            <path fill="#FFD43B" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                                                        </svg>
                                                        <p className="text-xs text-gray-600">4.5 (100 รีวิว)</p>
                                                    </div>
                                                    <hr className="w-full border-gray-300 my-3" />
                                                    <div className="flex justify-between w-full">
                                                        <div className="flex items-center space-x-1">
                                                            <Image src="/money.svg" alt="Logo" width={25} height={25} />
                                                            <p className="text-xs text-gray-500">ชำระเงินสด หรือ โอนผ่านแอพ</p>
                                                        </div>
                                                        <p className="text-sm font-bold text-blue-600">฿ {car.price}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* ✅ ปุ่มไปหน้ารายละเอียดรถ */}
                                            <div className="flex justify-end items-end mt-3">
                                                <button
                                                    className="bg-blue-500 text-white py-1 px-2 rounded-md text-xs hover:bg-blue-600"
                                                    onClick={() => router.push(`/cars/${car._id}?pickup=${pickupDate}&return=${returnDate}`)} // ✅ ใช้ router.push()
                                                >
                                                    รายละเอียดรถเช่า
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-red-500 text-center bg-gray-200 p-3 rounded">
                        ไม่พบรถที่ว่างใน {province || "จังหวัดนี้"}
                    </p>
                )}
            </div>

            {/* ✅ Footer */}
            <Footer />
        </div>
    );
};

export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SearchResultPage />
        </Suspense>
    );
}

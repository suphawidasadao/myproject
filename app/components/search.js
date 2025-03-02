"use client";

import Image from 'next/image';
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from 'next/navigation';

export default function Search() {
    const router = useRouter();
    const searchParams = useSearchParams();

    // ✅ ใช้ useState เก็บค่าที่ค้นหา
    const [selectedProvince, setSelectedProvince] = useState("");
    const [pickupDate, setPickupDate] = useState("");
    const [returnDate, setReturnDate] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [isProvinceSelected, setIsProvinceSelected] = useState(false);

    // ✅ โหลดค่าจาก URL ถ้ามี
    useEffect(() => {
        setSelectedProvince(searchParams.get("province") || "");
        setPickupDate(searchParams.get("pickup") || "");
        setReturnDate(searchParams.get("return") || "");
    }, [searchParams]);

    // ✅ ค้นหาจังหวัดแบบเรียลไทม์
    const handleSearch = async (e) => {
        const searchText = e.target.value;
        setSelectedProvince(searchText);

        if (searchText.length > 0) {
            const res = await fetch(`/api/cars?province=${searchText}`);
            const data = await res.json();
            setSuggestions(data.posts);

            if (data.posts.length > 0) {
                setIsProvinceSelected(false);
            } else {
                setSuggestions([]);
            }
        } else {
            setSuggestions([]);
        }
    };

    // ✅ ฟังก์ชันเมื่อเลือกจังหวัด
    const handleProvinceSelect = (province) => {
        setSelectedProvince(province);
        setIsProvinceSelected(true);
        setSuggestions([]);
    };

    // ✅ ค้นหารถเช่า (และยังคงค่าเดิมในช่องค้นหา)
    const handleSearchClick = () => {
        if (!selectedProvince || !pickupDate || !returnDate) {
            alert("กรุณากรอกข้อมูลให้ครบถ้วน");
            return;
        }
    
        console.log("🔍 ส่งค่าค้นหา:", selectedProvince, pickupDate, returnDate);
    
        router.push(`/cars?province=${encodeURIComponent(selectedProvince)}&pickup=${encodeURIComponent(pickupDate)}&return=${encodeURIComponent(returnDate)}`);
    };
    
    return (
        <div className="relative">
            <div className="relative w-full h-[400px]">
                <Image src="/bg.svg" alt="Logo" layout="fill" objectFit="cover" />
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="container mx-auto px-6 md:px-24">
                        <div className="bg-white p-4 rounded shadow-md flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                            
                            {/* ✅ ช่องค้นหาจังหวัด */}
                            <div className="bg-gray-100 p-2 rounded shadow-md w-full md:w-[30%]">
                                <h2 className="text-[10px] text-gray-500">จังหวัด</h2>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={selectedProvince}
                                        onChange={handleSearch}
                                        placeholder="เลือกหรือพิมพ์จังหวัด"
                                        className="border border-gray-300 rounded p-2 text-gray-700 text-[12px] w-full"
                                    />

                                    {/* ✅ แสดงรายการจังหวัดที่ค้นหา */}
                                    {suggestions.length > 0 && !isProvinceSelected && (
                                        <ul className="absolute bg-white border border-gray-300 mt-1 w-full rounded shadow-md max-h-40 overflow-y-auto z-10">
                                            {suggestions.map((post) => (
                                                <li key={post._id}
                                                    className="p-2 hover:bg-gray-200 cursor-pointer text-sm"
                                                    onClick={() => handleProvinceSelect(post.province)}
                                                >
                                                    {post.province}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>

                            {/* ✅ ช่องเลือกวันรับ-คืนรถ */}
                            <div className="bg-gray-100 p-2 rounded shadow-md w-full md:w-[50%]">
                                <div className="flex items-center space-x-4">
                                    <div className="flex flex-col w-[40%]">
                                        <label htmlFor="pickup" className="text-[10px] text-gray-500 mb-1">วัน-เวลารับรถ</label>
                                        <input
                                            type="datetime-local"
                                            id="pickup"
                                            className="text-[12px] p-2 border border-gray-300 rounded-md"
                                            value={pickupDate}
                                            onChange={(e) => setPickupDate(e.target.value)}
                                        />
                                    </div>
                                    <div className="text-2xl text-blue-500 mx-2 mt-4">&#8594;</div>
                                    <div className="flex flex-col w-[40%]">
                                        <label htmlFor="return" className="text-[10px] text-gray-500 mb-1">วัน-เวลาคืนรถ</label>
                                        <input
                                            type="datetime-local"
                                            id="return"
                                            className="text-[12px] p-2 border border-gray-300 rounded-md"
                                            value={returnDate}
                                            onChange={(e) => setReturnDate(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* ✅ ปุ่มค้นหารถเช่า */}
                            <div className="flex justify-center items-center mt-4">
                                <button
                                    onClick={handleSearchClick}
                                    className="bg-blue-500 hover:bg-blue-600 text-white font-medium h-7 px-6 rounded text-[12px] transition duration-300 hover:scale-105"
                                >
                                    ค้นหารถเช่า
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

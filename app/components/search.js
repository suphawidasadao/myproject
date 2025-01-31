import Image from 'next/image';
import React, { useState } from "react";
import Navbar from '../components/navbar';

export default function Home() {
    const [isBox1Focused, setIsBox1Focused] = useState(false);
    const [isBox2Focused, setIsBox2Focused] = useState(false);
    const [selectedProvince, setSelectedProvince] = useState("");
    const [pickupDate, setPickupDate] = useState("");
    const [returnDate, setReturnDate] = useState("");

    const handleClear = () => {
        setSelectedProvince("");
    };

    const handlePickupChange = (e) => {
        setPickupDate(e.target.value);
    };

    const handleReturnChange = (e) => {
        setReturnDate(e.target.value);
    };

    return (
        <div className="relative">
            <div className="relative w-full h-[400px]">
                <Image
                    src="/bg.svg"
                    alt="Logo"
                    layout="fill"
                    objectFit="cover"
                />
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="container mx-auto px-24">
                        <div className="bg-white p-4 rounded shadow-md flex space-x-4">
                            {/* จังหวัด */}
                            <div
                                className={`bg-gray-100 p-2 rounded shadow-md w-[35%] ${isBox1Focused ? "ring-2 ring-blue-500" : ""}`}
                                onFocus={() => setIsBox1Focused(true)}
                                onBlur={() => setIsBox1Focused(false)}
                                tabIndex={-1}
                            >
                                <div className="flex items-center mb-2">
                                    <svg width="8" height="10" className='mr-2' viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.00001 0.9375C3.18115 0.9375 2.39583 1.26279 1.81681 1.84181C1.2378 2.42083 0.912506 3.20614 0.912506 4.025V4.25C1.03751 5.94167 2.44167 7.30208 4.00001 9.0625C5.62709 7.225 7.08751 5.83333 7.08751 4.025C7.08751 3.20614 6.76222 2.42083 6.1832 1.84181C5.60418 1.26279 4.81886 0.9375 4.00001 0.9375ZM4.00001 2.54167C4.29388 2.54167 4.58115 2.62884 4.82548 2.79215C5.0698 2.95546 5.26018 3.18758 5.37255 3.45912C5.48492 3.73067 5.51421 4.02944 5.45673 4.31764C5.39924 4.60584 5.25756 4.87051 5.04962 5.07817C4.84167 5.28582 4.5768 5.42713 4.28852 5.48421C4.00024 5.54129 3.7015 5.51158 3.43012 5.39883C3.15873 5.28608 2.92688 5.09537 2.76391 4.85082C2.60094 4.60627 2.51418 4.31888 2.51459 4.025C2.51514 3.6314 2.67188 3.25412 2.95039 2.976C3.2289 2.69788 3.60641 2.54167 4.00001 2.54167Z" stroke="#0268D7" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <h2 className="text-[10px] text-gray-500">จุดรับ-คืนรถ</h2>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <input
                                        type="text"
                                        value={selectedProvince}
                                        onChange={(e) => setSelectedProvince(e.target.value)}
                                        placeholder="เลือกหรือพิมพ์จังหวัด"
                                        className="border border-gray-300 rounded p-2 text-gray-700 focus:outline-none text-[12px] w-full"
                                    />

                                    {selectedProvince && (
                                        <button
                                            onClick={handleClear}
                                            className="bg-gray-300 hover:bg-gray-400 text-white font-bold px-2 py-1 rounded-full text-xs"
                                            title="ลบตัวเลือก"
                                        >
                                            ✕
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/* วันเวลารับคืน */}
                            <div
                                className={`bg-gray-100 p-2 rounded shadow-md w-[55%] ${isBox2Focused ? "ring-2 ring-blue-500" : ""}`}
                                onFocus={() => setIsBox2Focused(true)}
                                onBlur={() => setIsBox2Focused(false)}
                                tabIndex={-1}
                            >
                                <div className="flex items-center mb-2 space-x-4">
                                    <div className="flex flex-col w-1/2">
                                        <label htmlFor="pickup" className="text-[10px] text-gray-500 mb-2">วัน-เวลารับรถ</label>
                                        <input
                                            type="datetime-local"
                                            id="pickup"
                                            name="pickup"
                                            className="text-[12px] p-2 border border-gray-300 rounded-md focus:outline-none"
                                            value={pickupDate}
                                            onChange={handlePickupChange}
                                        />
                                    </div>

                                    <div className="text-2xl text-blue-500 mx-2 mt-4">&#8594;</div>

                                    <div className="flex flex-col w-1/2">
                                        <label htmlFor="return" className="text-[10px] text-gray-500 mb-2">วัน-เวลาคืนรถ</label>
                                        <input
                                            type="datetime-local"
                                            id="return"
                                            name="return"
                                            className="text-[12px] p-2 border border-gray-300 rounded-md focus:outline-none"
                                            value={returnDate}
                                            onChange={handleReturnChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* ค้นหารถเช่า */}
                            <div className="flex items-center">
                                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-md text-[12px] whitespace-nowrap transition transform duration-300 hover:scale-105">
                                    ค้นหารถเช่า
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

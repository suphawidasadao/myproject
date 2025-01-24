"use client";

import Image from 'next/image';
import React, { useState } from "react";

export default function Home() {
    const [isHelpDropdownOpen, setIsHelpDropdownOpen] = useState(false);
    const [isSignUpDropdownOpen, setIsSignUpDropdownOpen] = useState(false);

    const toggleHelpDropdown = () => {
        setIsHelpDropdownOpen(!isHelpDropdownOpen);
    };

    const toggleSignUpDropdown = () => {
        setIsSignUpDropdownOpen(!isSignUpDropdownOpen);
    };

    const handleClickOutside = (e) => {
        if (!e.target.closest('.dropdown')) {
            setIsHelpDropdownOpen(false);
            setIsSignUpDropdownOpen(false);
        }
    };

    React.useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative">
            {/* Navbar */}
            <nav className="bg-white border-b shadow-md py-1 w-full">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center">
                        <Image
                            src="/Logo.svg"
                            alt="Logo"
                            width={100}
                            height={100}
                            className="object-cover"
                        />

                        <ul className="flex space-x-4 items-center text-[10px]">
                            <li className="relative dropdown" onClick={toggleHelpDropdown}>
                                <a href="#" className="flex items-center">
                                    ความช่วยเหลือ
                                    <svg
                                        className={`w-3 h-3 ml-1 transition-transform ${isHelpDropdownOpen ? "rotate-180 text-red-500" : "text-blue-500"}`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M22.586,5.929l-9.879,9.879a1.021,1.021,0,0,1-1.414,0L1.42,5.934.006,7.348l9.873,9.874a3.075,3.075,0,0,0,4.243,0L24,7.343Z" />
                                    </svg>
                                </a>
                                {isHelpDropdownOpen && (
                                    <ul className="absolute top-full left-0 mt-2 bg-white border rounded shadow-md z-10">
                                        <li>
                                            <a href="#" className="block px-2 py-2 text-gray-700 hover:bg-gray-100 text-[10px]">
                                                วิธีการจองรถ
                                            </a>
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li className="relative dropdown" onClick={toggleSignUpDropdown}>
                                <a href="#" className="flex items-center">
                                    สมัครสมาชิก/ลงชื่อเข้าใช้
                                    <svg
                                        className={`w-3 h-3 ml-1 transition-transform ${isSignUpDropdownOpen ? "rotate-180 text-red-500" : "text-blue-500"}`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M22.586,5.929l-9.879,9.879a1.021,1.021,0,0,1-1.414,0L1.42,5.934.006,7.348l9.873,9.874a3.075,3.075,0,0,0,4.243,0L24,7.343Z" />
                                    </svg>
                                </a>
                                {isSignUpDropdownOpen && (
                                    <ul className="absolute top-full left-0 mt-2 bg-white border rounded shadow-md z-10">
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white text-[10px] rounded">
                                                สมัครสมาชิก
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white text-[10px] rounded">
                                                ลงชื่อเข้าใช้
                                            </a>
                                        </li>
                                    </ul>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

             {/* Main Content */}
             <div className="container mx-auto px-4 mt-4 flex gap-4">
                {/* Summary Section */}
                <div className="bg-white p-4 rounded-lg shadow-md w-1/2">
                    <h2 className="text-xl font-bold mb-4">สรุปทริปการเดินทาง</h2>
                    <div className="flex items-center mb-4">
                        <img
                            src="https://phetyont.com/wp-content/uploads/2024/09/Toyota-Yaris-895.jpg"
                            alt="Car"
                            className="w-1/3 rounded-md"
                        />
                        <div className="ml-5">
                            <h3 className="text-lg font-bold">Toyota Yaris 2023</h3>
                            <p className="text-sm text-gray-600">เกียร์ออโต้</p>
                        </div>
                    </div>
                    <div> 
                        {/* เส้นขั้นแรก */}
                        <hr className="border-t border-gray-300 my-4 mx-4" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="50" className="ml-20 ">
                            <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="50" className="ml-20 ">
                            <path d="M135.2 117.4L109.1 192l293.8 0-26.1-74.6C372.3 104.6 360.2 96 346.6 96L165.4 96c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32l181.2 0c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2l0 144 0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48L96 400l0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48L0 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/>
                        </svg>
                          {/* เส้นประแนวตั้ง */}
                        <div className="border-l border-dashed border-yellow-500 h-12 ml-24 mt-10"></div>
                        <div className="bg-white border border-yellow-500 p-4 rounded-full shadow-md mt-4 w-[60px] h-[40px] ml-16" />
                         {/* เส้นประแนวตั้ง */}
                         <div className="border-l border-dashed border-yellow-500 h-12 ml-24 mt-4"></div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="50" className="ml-20">
                            <path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7L86.6 329.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="50" className="ml-20">
                            <path d="M135.2 117.4L109.1 192l293.8 0-26.1-74.6C372.3 104.6 360.2 96 346.6 96L165.4 96c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32l181.2 0c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2l0 144 0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48L96 400l0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48L0 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/>
                        </svg>                           
                            <p className="text-xl text-gray-600 ml-56 transform translate-y-[-300px]">
                                รับรถ <br />
                                สนามบินดอนเมือง<br />
                                09/01/2025 .<br />
                                10:00 น.<br />
                                คืนรถ <br />
                                คืนรถ สนามบินดอนเมือง<br />
                                11/01/2025 <br />
                                10:00 น
                            </p>

                        {/* เส้นขั้นที่สอง */}
                        <hr className="border-t border-gray-300 my-4 mx-4 transform -translate-y-40" />
                    </div>
                    <div className="text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                            <img
                                src="https://search.drivehub.com/_next/image?url=https%3A%2F%2Fdrivehubv3.s3-ap-southeast-1.amazonaws.com%2Flogo%2F45c687d4-adab-431b-bf64-2fd347be24bb%2Fmedium.png&w=1080&q=100"
                                alt="RN Rent A Car"
                                className="w-28 h-22 rounded-md mt-[-200px] ml-10"
                            />
                            <span className="ml-16 mt-[-200px]">
                                <p className="font-bold text-lg">ร้านรถเช่า</p>Local<br />RN Rent A Car<br />กรุงเทพมหานคร
                            </span>
                        </div>
                    </div>
                </div>

                {/* Payment Summary Section */}
                <div className="bg-white p-4 rounded-lg shadow-md w-1/2">
                    <h3 className="text-lg font-bold mb-4">สรุปรายการชำระทั้งหมด</h3>
                    
                    {/* ชำระในวันรับรถ */}
                    <div className="mb-4">
                        <h4 className="font-bold mb-2">ชำระในวันรับรถ</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li className="flex justify-between">
                                <span>ค่าเช่า 2 วัน</span>
                                <span>฿2,398</span>
                            </li>
                            <li className="flex justify-between">
                                <span>ค่ารถ - ค่าส่ง</span>
                                <span>฿400</span>
                            </li>
                        </ul>
                        <div className="flex justify-between font-bold border-t pt-2 mt-2">
                            <span>Total</span>
                            <span>฿2,798</span>
                        </div>
                    </div>
                    
                    {/* ค่ามัดจำ */}
                    <div className="mb-4">
                        <h4 className="font-bold mb-2">ค่ามัดจำ</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>
                                <span>ได้รับคืนในวันคืนรถตามเงื่อนไขของบริษัทกำหนด</span>
                            </li>
                        </ul>
                        <div className="flex justify-between font-bold border-t pt-2 mt-2">
                            <span>Total</span>
                            <span>฿3,000</span>
                        </div>
                    </div>
                    
                    {/* ที่ต้องชำระตอนนี้ */}
                    <div className="mb-4">
                        <h4 className="font-bold mb-2">ที่ต้องชำระตอนนี้</h4>
                        <div className="flex justify-between font-bold text-green-500">
                            <span>ชำระตอนนี้</span>
                            <span>฿0</span>
                        </div>
                    </div>
                   
                    {/* Confirm Button */}
                    <button
                        type="button"
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                    >
                        ยืนยันข้อมูลเพื่อชำระรถ
                    </button>
                </div>
            </div>
            
            {/* Bottom Navbar */}
            <div className="bg-gray-800 text-white py-2 w-full min-h-[250] flex items-center justify-center mt-4">
                <p className="text-xs text-gray-300"> 
                    สงวนลิขสิทธิ์ @ 2025 | All rights reserved.
                </p>
            </div>
        </div>
    );
}

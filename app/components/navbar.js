"use client";

import Image from 'next/image';
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation'; // ใช้ useRouter สำหรับการเปลี่ยนเส้นทาง

export default function Navbar() {
    const [isHelpDropdownOpen, setIsHelpDropdownOpen] = useState(false);
    const [isSignUpDropdownOpen, setIsSignUpDropdownOpen] = useState(false);

    const router = useRouter(); // ประกาศ useRouter

    // เปิดเมนูเมื่อคลิกที่ "ความช่วยเหลือ" หรือ "สมัครสมาชิก"
    const toggleHelpDropdown = () => {
        setIsHelpDropdownOpen(!isHelpDropdownOpen);
    };

    const toggleSignUpDropdown = () => {
        setIsSignUpDropdownOpen(!isSignUpDropdownOpen);
    };

    // ฟังก์ชันสำหรับการเปลี่ยนเส้นทางเมื่อคลิก "สมัครสมาชิก" หรือ "ลงชื่อเข้าใช้"
    const handleNavigation = (path) => {
        router.push(path); // ใช้ router.push เพื่อเปลี่ยนไปยังเส้นทางใหม่
    };

    // ปิด dropdown เมื่อคลิกที่พื้นที่อื่นบนหน้าจอ
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
        <div>
            {/* Navbar */}
            <nav className="bg-white border-b shadow-md py-3 w-full">
                <div className="container mx-auto px-24">
                    <div className="flex justify-between items-center">
                        <Image
                            src="/logo.svg"
                            alt="logo"
                            width={150}
                            height={150}
                            className="object-cover"
                        />

                        <ul className="flex space-x-4 items-center text-[14px]">
                            {/* Dropdown 1 */}
                            <li
                                className="relative dropdown"
                                onClick={toggleHelpDropdown}
                            >
                                <a href="#" className="flex items-center">
                                    ความช่วยเหลือ
                                    <svg
                                        className={`w-3 h-3 ml-1 transition-transform ${isHelpDropdownOpen ? "rotate-180 text-red-500" : "text-blue-500"
                                            }`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M22.586,5.929l-9.879,9.879a1.021,1.021,0,0,1-1.414,0L1.42,5.934.006,7.348l9.873,9.874a3.075,3.075,0,0,0,4.243,0L24,7.343Z" />
                                    </svg>
                                </a>
                                {isHelpDropdownOpen && (
                                    <ul className="absolute top-full left-0 mt-2 bg-white border rounded shadow-md z-10">
                                        <li>
                                            <a
                                                href="#"
                                                className="block px-5 py-2 text-gray-700 hover:bg-gray-100 text-[10px]"
                                            >
                                                วิธีการจองรถ
                                            </a>
                                        </li>
                                    </ul>
                                )}
                            </li>

                            {/* Dropdown 2 */}
                            <li
                                className="relative dropdown"
                                onClick={toggleSignUpDropdown}
                            >
                                <a href="#" className="flex items-center">
                                    สมัครสมาชิก/ลงชื่อเข้าใช้
                                    <svg
                                        className={`w-3 h-3 ml-1 transition-transform ${isSignUpDropdownOpen ? "rotate-180 text-red-500" : "text-blue-500"
                                            }`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M22.586,5.929l-9.879,9.879a1.021,1.021,0,0,1-1.414,0L1.42,5.934.006,7.348l9.873,9.874a3.075,3.075,0,0,0,4.243,0L24,7.343Z" />
                                    </svg>
                                </a>
                                {/* Dropdown Content */}
                                {isSignUpDropdownOpen && (
                                    <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg w-48 p-4 z-50">
                                        <p className="text-sm text-gray-700 mb-4">
                                            รับส่วนลดพิเศษสำหรับสมาชิก Drivehub พร้อมการจองที่รวดเร็วและไม่ยุ่งยาก!
                                        </p>
                                        <button
                                            onClick={() => alert("ไปยังหน้าลงชื่อเข้าใช้")}
                                            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
                                        >
                                            เข้าสู่ระบบ
                                        </button>

                                        <div className="text-center my-2 text-sm text-gray-500">
                                            เข้าเว็บไซต์ Drivehub เป็นครั้งแรกใช่ไหม?
                                        </div>

                                        <button
                                            onClick={() => alert("ไปยังหน้าสมัครสมาชิก")}
                                            className="w-full border border-blue-500 text-blue-500 py-2 px-4 rounded-lg hover:bg-blue-500 hover:text-white transition"
                                        >
                                            สมัครสมาชิกเลย
                                        </button>
                                    </div>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

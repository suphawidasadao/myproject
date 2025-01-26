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
        setIsSignUpDropdownOpen(false); // ปิด dropdown "สมัครสมาชิก"
    };

    const toggleSignUpDropdown = () => {
        setIsSignUpDropdownOpen(!isSignUpDropdownOpen);
        setIsHelpDropdownOpen(false); // ปิด dropdown "ความช่วยเหลือ"
    };

    // ฟังก์ชันสำหรับการเปลี่ยนเส้นทางไปยังหน้า login
    const goToLogin = () => {
        router.push('/loginpage'); // ไปยังหน้า login
    };

    // ฟังก์ชันสำหรับการเปลี่ยนเส้นทางไปยังหน้า signup
    const goToSignUp = () => {
        router.push('/registerpage'); // ไปยังหน้า signup
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
                            width={100}
                            height={100}
                            className="object-cover"
                        />

                        <ul className="flex space-x-4 items-center text-[12px]">
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
                                    <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg w-36 p-4 z-50">
                                        <button
                                            onClick={() => alert("ไปยังหน้าลงชื่อเข้าใช้")}
                                            className="w-full text-black hover:text-blue-700 py-2 px-4 rounded-md hover:bg-blue-100 transition"
                                        >
                                            วิธีการจองรถ
                                        </button>
                                    </div>
                                )}
                            </li>

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

                                {isSignUpDropdownOpen && (
                                    <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg w-48 p-4 z-50">
                                        <p className=" text-gray-700 mb-4">
                                            รับส่วนลดพิเศษสำหรับสมาชิก Drivehub พร้อมการจองที่รวดเร็วและไม่ยุ่งยาก!
                                        </p>
                                        <button
                                            onClick={goToLogin} // เปลี่ยนเส้นทางไปยังหน้า login
                                            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
                                        >
                                            เข้าสู่ระบบ
                                        </button>

                                        <div className="text-center my-2 text-gray-500">
                                            เข้าเว็บไซต์ Drivehub เป็นครั้งแรกใช่ไหม?
                                        </div>

                                        <button
                                            onClick={goToSignUp} // เปลี่ยนเส้นทางไปยังหน้า signup
                                            className="w-full border border-blue-500 text-blue-500 py-2 px-4 rounded-lg hover:text-blue-800 transition"
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

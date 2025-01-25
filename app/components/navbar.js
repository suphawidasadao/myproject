"use client";

import Image from 'next/image';
import React, { useState, useEffect } from "react";

export default function Navbar() {
    const [isHelpDropdownOpen, setIsHelpDropdownOpen] = useState(false);
    const [isSignUpDropdownOpen, setIsSignUpDropdownOpen] = useState(false);
    const [helpOptionSelected, setHelpOptionSelected] = useState(null);
    const [signUpOptionSelected, setSignUpOptionSelected] = useState(null);

    // เปิดเมนูเมื่อคลิกที่ "ความช่วยเหลือ" หรือ "สมัครสมาชิก"
    const toggleHelpDropdown = () => {
        setIsHelpDropdownOpen(!isHelpDropdownOpen);
    };

    const toggleSignUpDropdown = () => {
        setIsSignUpDropdownOpen(!isSignUpDropdownOpen);
    };

    // เมื่อเลือกตัวเลือกใน dropdown จะทำการปิด dropdown
    const handleHelpOptionClick = (option, e) => {
        e.stopPropagation();
        setHelpOptionSelected(option);
        setIsHelpDropdownOpen(false);
    };

    const handleSignUpOptionClick = (option, e) => {
        e.stopPropagation();
        setSignUpOptionSelected(option);
        setIsSignUpDropdownOpen(false);
    };

    // ปิด dropdown เมื่อคลิกที่พื้นที่อื่นบนหน้าจอ
    const handleClickOutside = (e) => {
        if (!e.target.closest('.dropdown')) {
            setIsHelpDropdownOpen(false);
            setIsSignUpDropdownOpen(false);
        }
    };

    // เพิ่ม event listener เมื่อคลิกที่พื้นที่อื่น
    React.useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        // ลบ event listener เมื่อคอมโพเนนต์ถูกทำลาย
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div>
            {/* Navbar*/}
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
                                                onClick={(e) => handleHelpOptionClick("ตัวเลือกที่ 1", e)}
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
                                {isSignUpDropdownOpen && (
                                    <ul className="absolute top-full left-0 mt-2 bg-white border border-gray-300 rounded shadow-md z-10">
                                        <li>
                                            <a
                                                href="#"
                                                onClick={(e) => handleSignUpOptionClick("สมัครสมาชิก", e)}
                                                className="block px-5 py-2 text-gray-700 hover:bg-blue-500 hover:text-white text-[10px] rounded"
                                            >
                                                สมัครสมาชิก
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                onClick={(e) => handleSignUpOptionClick("ลงชื่อเข้าใช้", e)}
                                                className="block px-5 py-2 text-gray-700 hover:bg-blue-500 hover:text-white text-[10px] rounded"
                                            >
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
        </div>
    );

}
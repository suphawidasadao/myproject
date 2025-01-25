"use client";

import Image from 'next/image';
import React, { useState } from "react";

export default function Home() {
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

    const [birthdate, setBirthdate] = useState('');
    const [phone, setPhone] = useState('+66');
    const [email, setEmail] = useState('');

    const handleBirthdateChange = (e) => {
        setBirthdate(e.target.value);
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    return (
        <div className="relative">
            {/* Navbar*/}
            <nav className="bg-white border-b shadow-md py-3 w-full">
                <div className="container mx-auto px-24">
                    <div className="flex justify-between items-center">
                        <Image
                            src="/Logo.svg"
                            alt="Logo"
                            width={100}
                            height={100}
                            className="object-cover"
                        />

                        <ul className="flex space-x-4 items-center text-[10px]">
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
                                                className="block px-2 py-2 text-gray-700 hover:bg-gray-100 text-[10px]"
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
                                                className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white text-[10px] rounded"
                                            >
                                                สมัครสมาชิก
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                onClick={(e) => handleSignUpOptionClick("ลงชื่อเข้าใช้", e)}
                                                className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white text-[10px] rounded"
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

            <div className="min-h-screen bg-gray-100">
                <div className="container mx-auto px-24 flex gap-4 py-8">
                    {/* Sidebar */}
                    <div className="w-60 bg-white p-6 rounded-lg shadow ">
                        <nav>
                            <div className="gap-4 mb-6 flex flex-col items-center">
                                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-xl font-bold text-gray-600">
                                    S
                                </div>
                                <h2 className="text-xl font-bold text-gray-700 text-center">SUPHAWIDA SADAO</h2>
                            </div>
                            <a
                                href="#"
                                className="block text-[10px] font-medium text-blue-600 bg-blue-50 py-2 px-4 rounded mb-2"
                            >
                                จัดการบัญชีโปรไฟล์
                            </a>
                            <a
                                href="#"
                                className="block text-[10px] font-medium text-blue-600 bg-blue-50 py-2 px-4 rounded mb-2"
                            >
                                การเช่ารถของฉัน
                            </a>
                            {/* Other links... */}
                        </nav>
                    </div>

                    {/* Profile Section */}
                    <div className="flex-1 bg-white p-6 rounded-lg shadow">
                        {/* Profile Header */}

                        {/* Profile Form */}
                        <form className="flex flex-col gap-6">
                            {/* Name */}
                            <div>
                                <label htmlFor="name" className="block text-sm text-gray-600">
                                    ชื่อ :
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value="SUPHAWIDA"
                                    readOnly
                                    className="mt-1 w-full px-4 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>

                            {/* Last Name */}
                            <div>
                                <label htmlFor="lastname" className="block text-sm text-gray-600">
                                    นามสกุล :
                                </label>
                                <input
                                    type="text"
                                    id="lastname"
                                    value="SADAO"
                                    readOnly
                                    className="mt-1 w-full px-4 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>

                            {/* Birthdate */}
                            <div>
                                <label htmlFor="birthdate" className="block text-sm text-gray-600">
                                    วันเกิด:
                                </label>
                                <input
                                    type="date"
                                    id="birthdate"
                                    value={birthdate}
                                    onChange={handleBirthdateChange}
                                    className="mt-1 w-full px-4 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label htmlFor="phone" className="block text-sm text-gray-600">
                                    เบอร์โทรศัพท์:
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    value={phone}
                                    onChange={handlePhoneChange}
                                    className="mt-1 w-full px-4 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm text-gray-600">
                                    อีเมล:
                                </label>
                                <input
                                    type="eamil"
                                    id="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    className="mt-1 w-full px-4 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>
                        </form>
                    </div>

                </div>
            </div>

        </div>

    );
}
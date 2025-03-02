"use client";

import Image from 'next/image';
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';
import { useSession } from "next-auth/react";

export default function Navbar() {
    const { data: session, status } = useSession();
    const router = useRouter();

    const [isClient, setIsClient] = useState(false);
    const [isHelpDropdownOpen, setIsHelpDropdownOpen] = useState(false);
    const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
    const [isSignUpDropdownOpen, setIsSignUpDropdownOpen] = useState(false);

    useEffect(() => {
        setIsClient(true); // ✅ ให้ Next.js รู้ว่า component ถูกเรนเดอร์บนไคลเอนต์
    }, []);

    const toggleHelpDropdown = () => {
        setIsHelpDropdownOpen(!isHelpDropdownOpen);
        setIsUserDropdownOpen(false);
        setIsSignUpDropdownOpen(false);
    };

    const toggleUserDropdown = () => {
        setIsUserDropdownOpen(!isUserDropdownOpen);
        setIsHelpDropdownOpen(false);
        setIsSignUpDropdownOpen(false);
    };

    const toggleSignUpDropdown = () => {
        setIsSignUpDropdownOpen(!isSignUpDropdownOpen);
        setIsHelpDropdownOpen(false);
        setIsUserDropdownOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!e.target.closest('.dropdown')) {
                setIsHelpDropdownOpen(false);
                setIsUserDropdownOpen(false);
                setIsSignUpDropdownOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <nav className="bg-white border-b shadow-md py-3 w-full">
            <div className="container mx-auto px-24">
                <div className="flex justify-between items-center">
                    <Image src="/logo.svg" alt="logo" width={100} height={100} className="object-cover" />

                    <ul className="flex space-x-4 items-center text-[12px]">
                        {/* ✅ Dropdown "ความช่วยเหลือ" */}
                        <li className="relative dropdown" onClick={toggleHelpDropdown}>
                            <a href="#" className="flex items-center">
                                ความช่วยเหลือ
                                <svg className={`w-3 h-3 ml-1 transition-transform ${isHelpDropdownOpen ? "rotate-180 text-red-500" : "text-blue-500"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M22.586,5.929l-9.879,9.879a1.021,1.021,0,0,1-1.414,0L1.42,5.934.006,7.348l9.873,9.874a3.075,3.075,0,0,0,4.243,0L24,7.343Z" />
                                </svg>
                            </a>
                            {isHelpDropdownOpen && (
                                <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg w-36 p-4 z-50">
                                    <button className="w-full text-black hover:text-blue-700 py-2 px-4 rounded-md hover:bg-blue-100 transition">
                                        วิธีการจองรถ
                                    </button>
                                </div>
                            )}
                        </li>

                        {/* ✅ ตรวจสอบสถานะ session และรอให้เป็น Client ก่อนแสดง */}
                        {!isClient ? (
                            <li>กำลังโหลด...</li> // ✅ ซ่อน UI ระหว่าง Hydration
                        ) : session ? (
                            <li className="relative dropdown">
                                <a href="#" className="flex items-center" onClick={toggleUserDropdown}>
                                    {session.user?.name}
                                    <svg className={`w-3 h-3 ml-1 transition-transform ${isUserDropdownOpen ? "rotate-180 text-red-500" : "text-blue-500"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M22.586,5.929l-9.879,9.879a1.021,1.021,0,0,1-1.414,0L1.42,5.934.006,7.348l9.873,9.874a3.075,3.075,0,0,0,4.243,0L24,7.343Z" />
                                    </svg>
                                </a>
                                {isUserDropdownOpen && (
                                    <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg w-48 p-4 z-50">
                                        <button onClick={() => router.push('/my-bookings')} className="w-full text-black hover:text-blue-700 py-2 px-4 rounded-md hover:bg-blue-100 transition">
                                            การจองของฉัน
                                        </button>
                                        <button onClick={() => router.push('/profilepage')} className="w-full text-black hover:text-blue-700 py-2 px-4 rounded-md hover:bg-blue-100 transition">
                                            จัดการบัญชีโปรไฟล์
                                        </button>
                                        <button onClick={() => signOut({ redirect: true, callbackUrl: '/' })} className="w-full text-black hover:text-blue-700 py-2 px-4 rounded-md hover:bg-blue-100 transition">
                                            ออกจากระบบ
                                        </button>
                                    </div>
                                )}
                            </li>
                        ) : (
                            <li className="relative dropdown" onClick={toggleSignUpDropdown}>
                                <a href="#" className="flex items-center">
                                    สมัครสมาชิก/ลงชื่อเข้าใช้
                                    <svg className={`w-3 h-3 ml-1 transition-transform ${isSignUpDropdownOpen ? "rotate-180 text-red-500" : "text-blue-500"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M22.586,5.929l-9.879,9.879a1.021,1.021,0,0,1-1.414,0L1.42,5.934.006,7.348l9.873,9.874a3.075,3.075,0,0,0,4.243,0L24,7.343Z" />
                                    </svg>
                                </a>
                                {isSignUpDropdownOpen && (
                                    <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg w-48 p-4 z-50">
                                        <div className=" text-gray-700 mb-4">
                                            Driveflex การจองที่รวดเร็วและไม่ยุ่งยาก!
                                        </div>
                                        <button onClick={() => router.push('/loginpage')} className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
                                            เข้าสู่ระบบ
                                        </button>
                                        <div className=" my-2 text-gray-500">เข้าเว็บไซต์ Driveflex เป็นครั้งแรกใช่ไหม?</div>
                                        <button onClick={() => router.push('/registerpage')} className="w-full border border-blue-500 text-blue-500 py-2 px-4 rounded-lg hover:text-blue-800 transition">
                                            สมัครสมาชิกเลย
                                        </button>
                                    </div>
                                )}
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

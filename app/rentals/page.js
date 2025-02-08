"use client";
 
import Image from 'next/image';
import Link from "next/link";
import React, { useState } from "react";
 
export default function ProfileManagement() {
    const [birthdate, setBirthdate] = useState('');
    const [phone, setPhone] = useState('+66');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('Nalinn');
    const [lastName, setLastName] = useState('Ruam');
 
    const handleBirthdateChange = (e) => {
        setBirthdate(e.target.value);
    };
 
    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };
 
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
 
    const handleNameChange = (e) => {
        setName(e.target.value);
    };
 
    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };
 
    const handleSave = () => {
        // Logic to save the profile data
        alert("ข้อมูลโปรไฟล์ถูกบันทึกแล้ว!");
    };
 
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Navbar */}
            <nav className="bg-white border-b shadow-md py-3 w-full">
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <Image
                        src="/Logo.svg"
                        alt="Logo"
                        width={120}
                        height={40}
                        className="object-cover"
                    />
                    <div className="text-sm text-gray-600 flex space-x-4">
                        <a href="#" className="hover:text-blue-500">เข้าสู่ระบบ</a>
                        <a href="#" className="hover:text-blue-500">สมัครสมาชิก</a>
                        <span className="text-gray-400">|</span>
                        <a href="tel:02-038-5222" className="hover:text-blue-500">02-038-5222</a>
                    </div>
                </div>
            </nav>
 
            {/* Main Content */}
            <div className="container mx-auto px-6 py-10 flex gap-6">
                {/* Sidebar */}
                <aside className="w-64 bg-white p-6 rounded-lg shadow">
                    <div className="flex flex-col items-center mb-8">
                        <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                            <Image
                                src="/profile3.svg"
                                alt="Profile"
                                width={96}
                                height={96}
                                className="object-cover"
                            />
                        </div>
                        <h2 className="text-lg font-semibold text-gray-800 text-center">{name}</h2>
                    </div>
                    <Link href="/profilepage" className="block py-2 px-4 text-gray-600 hover:bg-gray-100 rounded">
                            จัดการบัญชีโปรไฟล์
                        </Link>
                        <Link href="/rentals" className="block py-2 px-4 text-blue-600 bg-blue-50 rounded">
                            การเช่ารถของฉัน
                        </Link>
                        <Link href="/coupons" className="block py-2 px-4 text-gray-600 hover:bg-gray-100 rounded">
                            คูปองของฉัน
                        </Link>
                        <Link href="/notifications" className="block py-2 px-4 text-gray-600 hover:bg-gray-100 rounded">
                            การแจ้งเตือน
                        </Link>
                        <Link href="/logout" className="block py-2 px-4 text-gray-600 hover:bg-gray-100 rounded">
                            ออกจากระบบ
                        </Link>
                </aside>


                {/* Main Panel */}
                <div className="flex-1 bg-white p-6 rounded-lg shadow">
                    <h1 className="text-xl font-bold text-gray-800 mb-6">การเช่ารถของฉัน</h1>
                    <div className="text-center">
                        <Image
                            src="/car-placeholder.svg"
                            alt="No rentals"
                            width={120}
                            height={120}
                            className="mx-auto mb-4"
                        />
                        <p className="text-gray-600">คุณยังไม่มีรายการจอง</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

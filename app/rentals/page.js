"use client";

import Image from 'next/image';
import Link from "next/link";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
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
        <div className="relative">
            <div>
                <Navbar />
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-24 py-10 flex gap-6">
                {/* Sidebar */}
                <aside className="w-64 sm:w-48 bg-white p-4 rounded-lg shadow">
                    <div className="flex flex-col items-center mb-6">
                        <div className="w-20 h-20 rounded-full overflow-hidden mb-3">
                            <Image
                                src="/profile3.svg"
                                alt="Profile"
                                width={80}
                                height={80}
                                className="object-cover"
                            />
                        </div>
                        <h2 className="text-base font-semibold text-gray-800 text-center">{name}</h2>
                    </div>
                    <Link href="/profilepage" className="block text-sm py-2 px-4 text-gray-600 hover:bg-gray-100 rounded">
                        จัดการบัญชีโปรไฟล์
                    </Link>
                    <Link href="/rentals" className="block text-sm py-2 px-4 text-blue-600 bg-blue-50 rounded">
                        การเช่ารถของฉัน
                    </Link>
                    <a href="#" className="block text-sm py-2 px-4 text-gray-600 hover:bg-gray-100 rounded">คูปองของฉัน</a>
                    <a href="#" className="block text-sm py-2 px-4 text-gray-600 hover:bg-gray-100 rounded">การแจ้งเตือน</a>
                    <a href="#" className="block text-sm py-2 px-4 text-gray-600 hover:bg-gray-100 rounded">ออกจากระบบ</a>
                </aside>


                {/* Main Panel */}
                <div className="flex-1 bg-white p-6 rounded-lg shadow">
                    <h1 className="text-base font-bold text-gray-800 mb-6">การเช่ารถของฉัน</h1>
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

            <div>
                <Footer />
            </div>
        </div>
    );
}
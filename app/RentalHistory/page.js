"use client";

import Image from 'next/image';
import Link from "next/link";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

export default function RentalHistory() {

    const { data: session } = useSession();
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    // ดึงข้อมูลการเช่ารถจาก API
    const fetchBookings = async () => {
        if (!session?.user?.id) {
            console.log("User is not logged in");
            setLoading(false);
            return;
        }
        
        try {
            const res = await fetch(`/api/booking?userId=${session.user.id}`); // ส่ง userId ไปกับการเรียก API
            if (!res.ok) throw new Error("Failed to fetch bookings");
            const data = await res.json();
            setBookings(data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching bookings:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBookings(); // ดึงข้อมูลครั้งแรก

        // ตั้งค่า interval ให้รีเฟรชข้อมูลทุก 10 วินาที
        const interval = setInterval(fetchBookings, 10000);
        return () => clearInterval(interval); // ล้าง interval เมื่อ component ถูก unmount
    }, [session]); // รีเฟรชข้อมูลเมื่อ session เปลี่ยนแปลง

    return (
        <div className="relative">
            <Navbar />
            <ul className="container mx-auto px-24 flex items-center space-x-2 mt-5 text-sm text-gray-500">
                <li>
                    <Link href="/" className="hover:text-blue-600">
                        หน้าแรก
                    </Link>
                </li>
                <li>&gt;</li>
                <li>
                    <Link href="/profilepage" className="text-blue-600">
                        โปรไฟล์
                    </Link>
                </li>
            </ul>
            <div className="container mx-auto px-24 py-10 flex gap-6">
                {/* Sidebar */}
                <aside className="w-64 sm:w-48 bg-white p-4 rounded-lg shadow">
                    <div className="flex flex-col items-center mb-6">
                        <h2 className="text-lg font-semibold text-gray-800 text-center">{session?.user?.name}</h2>
                    </div>
                    <Link href="/profilepage" className="block text-sm py-2 px-4 text-gray-600 hover:bg-gray-100 rounded">จัดการบัญชีโปรไฟล์</Link>
                    <Link href="/rentals" className="block text-sm py-2 px-4 text-blue-600 bg-blue-50 rounded">การเช่ารถของฉัน</Link>
                    <a href="#" className="block text-sm py-2 px-4 text-gray-600 hover:bg-gray-100 rounded">คูปองของฉัน</a>
                </aside>

                {/* Main Panel */}
                <div className="w-3/4 p-6 border rounded-lg shadow-md">
                    <h3 className="font-bold text-lg mb-4">การเช่ารถของฉัน</h3>
                    {loading ? (
  <p>กำลังโหลดข้อมูล...</p>
) : bookings.length === 0 ? (
  <p>ไม่มีข้อมูลการเช่ารถ</p>
) : (
  bookings.map((booking) => (
    <div key={booking._id} className="border p-3 rounded-lg flex items-center space-x-3 bg-white mb-4">
      <div className="flex flex-col flex-grow space-y-1">
        <h4 className="font-bold text-base">{booking.carId.name}</h4>
        <p className="text-sm text-gray-600">วัน-เวลารับรถ: <span className='ml-2 font-medium text-gray-800'>{new Date(booking.startDate).toLocaleString()}</span></p>
        <p className="text-sm text-gray-600">วัน-เวลาคืนรถ: <span className='ml-2 font-medium text-gray-800'>{new Date(booking.endDate).toLocaleString()}</span></p>
        <p className="text-sm text-gray-600">ค่าเช่า: <span className='ml-2 font-medium text-gray-800'>฿{booking.totalPrice}</span></p>
        <p className="text-sm text-gray-600">สถานะ: <span className={`ml-2 font-semibold ${booking.status === 'confirmed' ? 'text-green-500' : 'text-yellow-500'}`}>{booking.status === 'confirmed' ? 'อนุมัติแล้ว' : 'กำลังรออนุมัติ'}</span></p>
      </div>
    </div>
  ))
)}
                </div>
            </div>
            <div className='mt-10'>
                <Footer />
            </div>
          
        </div>
    );
}

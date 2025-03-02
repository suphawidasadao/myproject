"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "@/app/components/sidebar";

export default function BookingManagement() {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    // ดึงข้อมูลการจองจาก API
    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await fetch("/api/booking");
                if (response.ok) {
                    const data = await response.json();
                    setBookings(data);
                } else {
                    console.error("❌ Failed to fetch bookings");
                }
            } catch (error) {
                console.error("❌ Error fetching bookings:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBookings();
    }, []);

    // ฟังก์ชันสำหรับอัปเดตสถานะการจอง
    const handleStatusChange = async (bookingId, newStatus) => {
        const confirmMessage = newStatus === "confirmed" ? "คุณต้องการอนุญาตการจองนี้หรือไม่?" : "คุณต้องการปฏิเสธการจองนี้หรือไม่?";
        const isConfirmed = window.confirm(confirmMessage);
    
        if (isConfirmed) {
            try {
                const response = await fetch(`/api/booking/${bookingId}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ status: newStatus }),
                });
    
                if (response.ok) {
                    setBookings((prevBookings) =>
                        prevBookings.map((booking) =>
                            booking._id === bookingId ? { ...booking, status: newStatus } : booking
                        )
                    );
    
                    // 🔥 แจ้งเตือนลูกค้าแบบเรียลไทม์ (ถ้ามี WebSocket)
                    // socket.emit("bookingUpdated", { bookingId, newStatus });
    
                } else {
                    console.error("❌ Error updating booking status");
                }
            } catch (error) {
                console.error("❌ Error sending status update:", error);
            }
        }
    };
    

    if (loading) {
        return <div className="text-center py-4">กำลังโหลดข้อมูลการจอง...</div>;
    }

    return (
        <div className="flex">
            <Sidebar />
            {/* Main Content */}
            <div className="flex-1 p-6">
                <header className="bg-white p-4 shadow rounded-md">
                    <h1 className="text-xl font-bold mb-2">Booking Management</h1>
                    <p className="text-base">View and manage car rental bookings</p>
                </header>

                {/* Table */}
                <div className="bg-white p-4 rounded-lg shadow-sm mt-2">
                    <table className="w-full text-sm border-collapse">
                        <thead>
                            <tr className="bg-blue-500 text-white">
                                <th className="p-2 text-left">ID</th>
                                <th className="p-2 text-left">User</th>
                                <th className="p-2 text-left">Car</th>
                                <th className="p-2 text-left">Pick-up</th>
                                <th className="p-2 text-left">Status</th>
                                <th className="p-2 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.map((booking, index) => (
                                <tr key={index} className="border-t">
                                    <td className="p-2">{booking._id}</td>
                                    <td className="p-2">{booking.firstname} {booking.lastname}</td>
                                    <td className="p-2">{booking.carId.name}</td>
                                    <td className="p-2">{new Date(booking.startDate).toLocaleDateString()}</td>
                                    <td className={`p-2 ${booking.status === "pending" ? "text-yellow-600" : booking.status === "confirmed" ? "text-green-600" : "text-red-600"}`}>
                                        {booking.status}
                                    </td>
                                    <td className="p-2 space-x-2">
                                        <button
                                            onClick={() => handleStatusChange(booking._id, "confirmed")}
                                            className="bg-green-500 text-white px-2 py-1 rounded text-xs"
                                        >
                                            Approve
                                        </button>
                                        <button
                                            onClick={() => handleStatusChange(booking._id, "cancelled")}
                                            className="bg-orange-500 text-white px-2 py-1 rounded text-xs"
                                        >
                                            Reject
                                        </button>
                                        <button className="bg-blue-500 text-white px-2 py-1 rounded text-xs">
                                            Details
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

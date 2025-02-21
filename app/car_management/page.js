"use client";
 
import React, { useState, useEffect } from "react";
import Link from "next/link";
 
export default function BookingManagement() {
  const [cars, setCars] = useState([]);
 
  useEffect(() => {
    setCars([
      { id: "#1001", user: "John Doe", car: "Sedan", pickupDate: "2024-02-21", status: "Available" },
      { id: "#1002", user: "Jane Smith", car: "SUV", pickupDate: "2024-02-22", status: "Available" },
      { id: "#1003", user: "Alice Brown", car: "Sedan", pickupDate: "2024-02-23", status: "Booked" },
      { id: "#1004", user: "Bob Johnson", car: "Truck", pickupDate: "2024-02-24", status: "Booked" },
    ]);
  }, []);
 
  return (
    <div className="relative bg-gray-100 min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-blue-700 text-white p-6 space-y-4 min-h-screen">
        <h2 className="text-2xl font-bold">MyCarRent</h2>
        <nav className="space-y-2">
          <Link href="/Overview" >
            <p className="p-2 rounded hover:bg-blue-500 cursor-pointer">Overview</p>
          </Link>
          <Link href="/car_management">
            <p className="p-2 hover:bg-blue-500 cursor-pointerrounded">Car Management</p>
          </Link>
          <Link href="/Booking">
            <p className="p-2 rounded hover:bg-blue-500 cursor-pointer">Booking Management</p>
          </Link>
        </nav>
      </div>
 
      {/* Main Content */}
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-bold mb-2">Booking Management</h2>
        <p className="text-gray-600 mb-4">View and manage car rental bookings</p>
 
        {/* Car List Table */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="p-2 text-left">Booking ID</th>
                <th className="p-2 text-left">User</th>
                <th className="p-2 text-left">Car</th>
                <th className="p-2 text-left">Pick-up Date</th>
                <th className="p-2 text-left">Status</th>
                <th className="p-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cars.map((car, index) => (
                <tr key={index} className="border-t">
                  <td className="p-2">{car.id}</td>
                  <td className="p-2">{car.user}</td>
                  <td className="p-2">{car.car}</td>
                  <td className="p-2">{car.pickupDate}</td>
                  <td className={`p-2 ${car.status === "Available" ? "text-green-600" : "text-yellow-600"}`}>
                    {car.status}
                  </td>
                  <td className="p-2 space-x-2">
                    <button className="bg-green-500 text-white px-2 py-1 rounded">Approve</button>
                    <button className="bg-orange-500 text-white px-2 py-1 rounded">Reject</button>
                    <button className="bg-blue-500 text-white px-2 py-1 rounded">View Details</button>
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
 
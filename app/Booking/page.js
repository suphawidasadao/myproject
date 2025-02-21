"use client";

import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function CarManagement() {
  const cars = [
    { id: "#1001", user: "John Doe", car: "Sedan", pickupDate: "2024-02-21", status: "Available" },
    { id: "#1002", user: "Jane Smith", car: "SUV", pickupDate: "2024-02-22", status: "Available" },
    { id: "#1003", user: "Alice Brown", car: "Sedan", pickupDate: "2024-02-23", status: "Booked" },
    { id: "#1004", user: "Bob Johnson", car: "Truck", pickupDate: "2024-02-24", status: "Booked" },
  ];

  return (
    <div className="relative bg-gray-100 min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-blue-700 text-white p-6 space-y-4 min-h-screen">
        <h2 className="text-2xl font-bold">MyCarRent</h2>
        <nav className="space-y-2">
          <p className="p-2 rounded hover:bg-blue-500 cursor-pointer">Overview</p>
          <p className="p-2 bg-blue-500 rounded">Car Management</p>
          <p className="p-2 rounded hover:bg-blue-500 cursor-pointer">Booking Management</p>
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
                  <td className="p-2">
                    <span
                      className={`px-2 py-1 rounded text-white ${
                        car.status === "Available" ? "bg-green-500" : "bg-red-500"
                      }`}
                    >
                      {car.status}
                    </span>
                  </td>
                  {/* Actions Column (ย้ายมาให้อยู่ตรงกับ Actions จริงๆ) */}
                  <td className="p-2 space-x-2">
                    <button className="bg-yellow-500 text-white px-2 py-1 rounded">Edit</button>
                    <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                    <button className="bg-blue-500 text-white px-2 py-1 rounded">Details</button>
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

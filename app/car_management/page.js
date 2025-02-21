"use client";

import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function CarManagement() {
  const cars = [
    { name: "Toyota Vios", type: "Sedan", price: 1700, status: "Available" },
    { name: "Honda Civic", type: "Sedan", price: 1900, status: "Available" },
    { name: "Honda Civic", type: "Sedan", price: 1900, status: "Booked" },
    { name: "Honda Civic", type: "Sedan", price: 1900, status: "Booked" },
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
        <h2 className="text-2xl font-bold mb-2">Car Management</h2>
        <p className="text-gray-600 mb-4">Manage the cars available for rent</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-600">
          Add New Car
        </button>

        {/* Car List Table */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="p-2 text-left">Car Name</th>
                <th className="p-2 text-left">Type</th>
                <th className="p-2 text-left">Price/Day</th>
                <th className="p-2 text-left">Status</th>
                <th className="p-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cars.map((car, index) => (
                <tr key={index} className="border-t">
                  <td className="p-2">{car.name}</td>
                  <td className="p-2">{car.type}</td>
                  <td className="p-2">{car.price}</td>
                  <td className="p-2">
                    <span
                      className={`px-2 py-1 rounded text-white ${
                        car.status === "Available" ? "bg-green-500" : "bg-red-500"
                      }`}
                    >
                      {car.status}
                    </span>
                  </td>
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

"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function CarManagement() {
  const [selectedCar, setSelectedCar] = useState(null);
  const [cars, setCars] = useState([
    { 
        name: "Toyota Yaris ATIV 2023", 
        type: "Sedan", 
        price: 1150, 
        status: "Available", 
        details: {
          doors: 4,
          seats: 4,
          transmission: "Automatic",
          engine: "1200 cc",
          fuel: "Petrol",
          luggage: "2-3 bags",
          interior: ["Remote Key", "Leather Seats"],
          convenience: ["USB", "Bluetooth", "Android Auto", "Apple CarPlay"],
          safety: [
            "Cruise Control", 
            "360-degree Camera", 
            "Rear Sensor", 
            "Lane Departure Warning", 
            "Blind Spot Monitoring"
          ],
          fees: { delivery: 100, insurance: 100 }
        }
      },
      { 
        name: "Toyota Yaris ATIV 2023", 
        type: "Sedan", 
        price: 1150, 
        status: "Available", 
        details: {
          doors: 4,
          seats: 4,
          transmission: "Automatic",
          engine: "1200 cc",
          fuel: "Petrol",
          luggage: "2-3 bags",
          interior: ["Remote Key", "Leather Seats"],
          convenience: ["USB", "Bluetooth", "Android Auto", "Apple CarPlay"],
          safety: [
            "Cruise Control", 
            "360-degree Camera", 
            "Rear Sensor", 
            "Lane Departure Warning", 
            "Blind Spot Monitoring"
          ],
          fees: { delivery: 100, insurance: 100 }
        }
      },
      { 
        name: "Toyota Yaris ATIV 2023", 
        type: "Sedan", 
        price: 1150, 
        status: "Available", 
        details: {
          doors: 4,
          seats: 4,
          transmission: "Automatic",
          engine: "1200 cc",
          fuel: "Petrol",
          luggage: "2-3 bags",
          interior: ["Remote Key", "Leather Seats"],
          convenience: ["USB", "Bluetooth", "Android Auto", "Apple CarPlay"],
          safety: [
            "Cruise Control", 
            "360-degree Camera", 
            "Rear Sensor", 
            "Lane Departure Warning", 
            "Blind Spot Monitoring"
          ],
          fees: { delivery: 100, insurance: 100 }
        }
      },
      { 
        name: "Toyota Yaris ATIV 2023", 
        type: "Sedan", 
        price: 1150, 
        status: "Available", 
        details: {
          doors: 4,
          seats: 4,
          transmission: "Automatic",
          engine: "1200 cc",
          fuel: "Petrol",
          luggage: "2-3 bags",
          interior: ["Remote Key", "Leather Seats"],
          convenience: ["USB", "Bluetooth", "Android Auto", "Apple CarPlay"],
          safety: [
            "Cruise Control", 
            "360-degree Camera", 
            "Rear Sensor", 
            "Lane Departure Warning", 
            "Blind Spot Monitoring"
          ],
          fees: { delivery: 100, insurance: 100 }
        }
      },
  ]);

  // ฟังก์ชันสำหรับลบรถ
  const handleDeleteCar = (index) => {
    const newCars = [...cars]; // คัดลอกรายการ cars ออกมา
    newCars.splice(index, 1); // ลบรถที่อยู่ใน index ที่เลือก
    setCars(newCars); // อัพเดตสถานะ cars ใหม่
  };

  return (
    <div className="relative bg-gray-100 min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-blue-700 text-white p-6 space-y-4 min-h-screen">
        <h2 className="text-sm font-bold">MyCarRent</h2>
        <nav className="space-y-2">
          <Link href="/Overview">
            <p className="p-2 rounded hover:bg-blue-500 cursor-pointer">Overview</p>
          </Link>
          <Link href="/car_management">
            <p className="p-2 bg-blue-500 rounded">Car Management</p>
          </Link>
          <Link href="/Booking">
            <p className="p-2 rounded hover:bg-blue-500 cursor-pointer">Booking Management</p>
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h2 className="text-sm font-bold mb-2">Car Management</h2>
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
                  <td className={`p-2 ${car.status === "Available" ? "text-green-600" : "text-red-600"}`}>
                    {car.status}
                  </td>
                  <td className="p-2 space-x-2">
                    <button className="bg-yellow-500 text-white px-2 py-1 rounded">Edit</button>
                    <button 
                      className="bg-red-500 text-white px-2 py-1 rounded"
                      onClick={() => handleDeleteCar(index)} // ลบตาม index
                    >
                      Delete
                    </button>
                    <button 
                      className="bg-blue-500 text-white px-2 py-1 rounded"
                      onClick={() => setSelectedCar(car)}
                    >
                      Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {selectedCar && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
              onClick={() => setSelectedCar(null)}
            >
              &times;
            </button>
            <h2 className="text-sm font-bold mb-4">{selectedCar.name} </h2>
            <p><strong>Type:</strong> {selectedCar.type}</p>
            <p><strong>Price/Day:</strong> {selectedCar.price} THB</p>
            <p><strong>Status:</strong> {selectedCar.status}</p>
            {selectedCar.details && (
              <div className="mt-4">
                <p><strong>Engine:</strong> {selectedCar.details.engine}</p>
                <p><strong>Fuel:</strong> {selectedCar.details.fuel}</p>
                <p><strong>Transmission:</strong> {selectedCar.details.transmission}</p>
                <p><strong>Luggage:</strong> {selectedCar.details.luggage}</p>
                <p><strong>Interior:</strong> {selectedCar.details.interior.join(", ")}</p>
                <p><strong>Convenience:</strong> {selectedCar.details.convenience.join(", ")}</p>
                <p><strong>Safety:</strong> {selectedCar.details.safety.join(", ")}</p>
                <p><strong>Delivery Fee:</strong> {selectedCar.details.fees.delivery} THB</p>
                <p><strong>Insurance Fee:</strong> {selectedCar.details.fees.insurance} THB</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

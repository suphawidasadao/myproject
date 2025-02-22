"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function CarManagement() {
    const [selectedCar, setSelectedCar] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [newCar, setNewCar] = useState({
      name: "", type: "", price: "", status: "Available", details: {
        image: "", doors: "", seats: "", transmission: "", engine: "", fuel: "",
        luggage: "", interior: [], convenience: [], safety: [], fees: { delivery: 0, insurance: 0 }
      }
    });
    const [cars, setCars] = useState([
      { 
        name: "Toyota Yaris ATIV 2023",
        type: "Sedan", 
        price: 1150, 
        status: "Available", 
        details: {
          image: "https://search.drivehub.com/_next/image?url=https%3A%2F%2Fdrivehubv3.s3-ap-southeast-1.amazonaws.com%2Fcars%2Fa03377b0-5d57-44c4-b3c4-cf92ca5d3a96%2Fphotos%2F1b2720c8-39ac-434c-9917-4fd450ebc664%2Flarge.png&w=3840&q=100", 
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
          image: "https://search.drivehub.com/_next/image?url=https%3A%2F%2Fdrivehubv3.s3-ap-southeast-1.amazonaws.com%2Fcars%2Fa03377b0-5d57-44c4-b3c4-cf92ca5d3a96%2Fphotos%2F1b2720c8-39ac-434c-9917-4fd450ebc664%2Flarge.png&w=3840&q=100", 
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
          image: "https://search.drivehub.com/_next/image?url=https%3A%2F%2Fdrivehubv3.s3-ap-southeast-1.amazonaws.com%2Fcars%2Fa03377b0-5d57-44c4-b3c4-cf92ca5d3a96%2Fphotos%2F1b2720c8-39ac-434c-9917-4fd450ebc664%2Flarge.png&w=3840&q=100", 
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
          image: "https://search.drivehub.com/_next/image?url=https%3A%2F%2Fdrivehubv3.s3-ap-southeast-1.amazonaws.com%2Fcars%2Fa03377b0-5d57-44c4-b3c4-cf92ca5d3a96%2Fphotos%2F1b2720c8-39ac-434c-9917-4fd450ebc664%2Flarge.png&w=3840&q=100", 
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
      }
    ]);
  
    const handleDeleteCar = (index) => {
      const newCars = cars.filter((_, carIndex) => carIndex !== index);
      setCars(newCars);
    };
  
    const handleAddCar = () => {
      setCars([...cars, newCar]);
      setShowForm(false);
      setNewCar({ name: "", type: "", price: "", status: "Available", details: { image: "", doors: "", seats: "", transmission: "", engine: "", fuel: "", luggage: "", interior: [], convenience: [], safety: [], fees: { delivery: 0, insurance: 0 } } });
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
        <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-600" onClick={() => setShowForm(true)}>
          Add New Car
        </button>
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
                      onClick={() => handleDeleteCar(index)}
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
            <h2 className="text-sm font-bold mb-4">{selectedCar.name}</h2>
            <p><strong>Type:</strong> {selectedCar.type}</p>
            <p><strong>Price/Day:</strong> {selectedCar.price} THB</p>
            <p><strong>Status:</strong> {selectedCar.status}</p>
            {selectedCar.details && (
              <div className="mt-4">
                {selectedCar.details.image && (
                  <img
                    src={selectedCar.details.image}
                    alt={selectedCar.name}
                    className="w-full h-auto mb-4 rounded"
                  />
                )}
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
       {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
            <button className="absolute top-2 right-2 text-gray-600 hover:text-black" onClick={() => setShowForm(false)}>&times;</button>
            <h2 className="text-sm font-bold mb-4">Add New Car</h2>
            <input type="text" placeholder="Car Name" className="w-full p-2 border mb-2" value={newCar.name} onChange={(e) => setNewCar({ ...newCar, name: e.target.value })} />
            <input type="text" placeholder="Type" className="w-full p-2 border mb-2" value={newCar.type} onChange={(e) => setNewCar({ ...newCar, type: e.target.value })} />
            <input type="number" placeholder="Price" className="w-full p-2 border mb-2" value={newCar.price} onChange={(e) => setNewCar({ ...newCar, price: e.target.value })} />
            <button className="bg-blue-500 text-white px-4 py-2 rounded w-full mt-2" onClick={handleAddCar}>Add Car</button>
          </div>
        </div>
      )}
    </div>
  );
}

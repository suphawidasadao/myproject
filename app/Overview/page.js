"use client";

import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import Link from "next/link";

export default function Dashboard() {
  const [adminName] = useState("Admin");

  const data = [
    { month: "JAN", bookings: 20 },
    { month: "FEB", bookings: 30 },
    { month: "MAR", bookings: 40 },
    { month: "APR", bookings: 50 },
    { month: "MAY", bookings: 60 },
    { month: "JUN", bookings: 70 },
    { month: "JUL", bookings: 75 },
    { month: "AUG", bookings: 80 },
    { month: "SEP", bookings: 85 },
    { month: "OCT", bookings: 90 },
    { month: "NOV", bookings: 95 },
    { month: "DEC", bookings: 100 },
  ];

  return (
    <div className="relative bg-gray-100 min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-blue-700 text-white p-6 space-y-4 min-h-screen">
        <h2 className="text-2xl font-bold">MyCarRent</h2>
        <nav className="space-y-2">
          <Link href="/Overview">
            <p className="p-2 bg-blue-500 rounded">Overview</p>
          </Link>
          <Link href="/car_management">
            <p className="p-2 hover:bg-blue-500 cursor-pointer">Car Management</p>
          </Link>
          <Link href="/Booking">
            <p className="p-2 rounded hover:bg-blue-500 cursor-pointer">Booking Management</p>
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Navbar */}
        <header className="flex flex-col bg-white p-4 shadow rounded-md">
  <h2 className="text-xl font-semibold">Overview</h2>
  <h3 className="text-gray-500">Welcome, {adminName}</h3>
</header>


        {/* Cards */}
        <div className="grid grid-cols-4 gap-4 mt-4">
          <div className="p-4 bg-white shadow rounded-md text-center">
            <p className="text-xl font-semibold">Total Cars</p>
            <h3 className="text-2xl font-bold">50</h3>
          </div>
          <div className="p-4 bg-white shadow rounded-md text-center">
            <p className="text-xl font-semibold">Bookings Today</p>
            <h3 className="text-2xl font-bold">10</h3>
          </div>
          <div className="p-4 bg-white shadow rounded-md text-center">
            <p className="text-xl font-semibold">Bookings This Month</p>
            <h3 className="text-2xl font-bold">10</h3>
          </div>
          <div className="p-4 bg-white shadow rounded-md text-center">
            <p className="text-xl font-semibold">Total Users</p>
            <h3 className="text-2xl font-bold">150</h3>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="bg-white shadow rounded-md p-6 mt-6">
          <h3 className="text-lg font-semibold mb-4">Bookings This Month</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="month" />
              <YAxis />
              <Bar dataKey="bookings" fill="#60A5FA" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

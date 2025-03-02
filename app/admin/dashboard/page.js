"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import Sidebar from '../../components/sidebar';

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // ตรวจสอบ session และ role ของผู้ใช้
  useEffect(() => {
    if (status === "loading") return;
    if (!session || session.user.role !== "admin") {
      router.replace("/loginpage");
    }
  }, [session, status, router]);

  if (status === "loading" || !session || session.user.role !== "admin") {
    return null;
  }

  // ข้อมูลสำหรับ Bar Chart
  const chartData = [
    { month: "FEB", bookings: 30 },
    { month: "MAR", bookings: 40 },
    { month: "APR", bookings: 50 },
  ];

  return (
    <div className="flex w-screen h-auto min-h-[600px]">
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gray-100 p-6">
        {/* Header */}
        <header className="bg-white p-4 shadow rounded-md">
          <h1 className="text-xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-base">Welcome, {session.user.name}!</p>
        </header>

        {/* Cards สรุปข้อมูล */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          <div className="p-6 bg-white shadow rounded-md text-center">
            <p className="text-base font-semibold">Total Cars</p>
            <h3 className="text-xl font-bold">50</h3>
          </div>
          <div className="p-6 bg-white shadow rounded-md text-center">
            <p className="text-base font-semibold">Bookings Today</p>
            <h3 className="text-xl font-bold">10</h3>
          </div>
          <div className="p-6 bg-white shadow rounded-md text-center">
            <p className="text-base font-semibold">Bookings This Month</p>
            <h3 className="text-xl font-bold">120</h3>
          </div>
          <div className="p-6 bg-white shadow rounded-md text-center">
            <p className="text-base font-semibold">Total Users</p>
            <h3 className="text-xl font-bold">150</h3>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="bg-white shadow rounded-md p-4 mt-4 text-left">
          <h3 className="text-lg font-bold mb-2">Bookings (Last 3 Months)</h3>
          <ResponsiveContainer width="90%" height={300} className="ml-0">
            <BarChart data={chartData} margin={{ left: 0, right: 300 }}>
              <XAxis dataKey="month" tick={{ fontSize: 10 }} />
              <YAxis tick={{ fontSize: 10 }} />
              <Bar dataKey="bookings" fill="#3B82F6" barSize={50} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

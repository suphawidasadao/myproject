"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import Sidebar from "@/app/components/sidebar";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    if (status === "loading") return;
    if (!session || session.user.role !== "admin") {
      router.replace("/loginpage");
    }
  }, [session, status, router]);

  // ดึงข้อมูลจาก API
  useEffect(() => {
    async function fetchData() {
        try {
            const summaryRes = await fetch("/api/bookings/summary");
            
            // ตรวจสอบว่า response ตอบกลับเป็น JSON หรือไม่
            if (!summaryRes.ok) {
                throw new Error("Network response was not ok");
            }

            const summaryData = await summaryRes.json();
            
            // ตรวจสอบข้อมูลที่ได้รับ
            console.log("Summary Data:", summaryData);
            
            setSummary(summaryData);  // ตั้งค่าข้อมูล summary
        } catch (error) {
            console.error("Error fetching summary data:", error);
        }
    }

    fetchData();
}, []);


  if (status === "loading" || !session || session.user.role !== "admin") {
    return null;
  }

  return (
    <div className="flex w-screen h-auto min-h-[600px]">
      <Sidebar />

      <div className="flex-1 flex flex-col bg-gray-100 p-6">
        <header className="bg-white p-4 shadow rounded-md">
          <h1 className="text-xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-base">Welcome, {session.user.name}!</p>
        </header>

        {summary && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            <div className="p-6 bg-white shadow rounded-md text-center">
              <p>Total Cars</p>
              <h3>{summary.totalCars}</h3>
            </div>
            <div className="p-6 bg-white shadow rounded-md text-center">
              <p>Bookings Today</p>
              <h3>{summary.bookingsToday}</h3>
            </div>
            <div className="p-6 bg-white shadow rounded-md text-center">
              <p>Bookings This Month</p>
              <h3>{summary.bookingsThisMonth}</h3>
            </div>
            <div className="p-6 bg-white shadow rounded-md text-center">
              <p>Total Users</p>
              <h3>{summary.totalUsers}</h3>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

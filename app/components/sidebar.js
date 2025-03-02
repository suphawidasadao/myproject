"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

export default function Sidebar() {
  const pathname = usePathname(); // ใช้เพื่อเช็คว่าอยู่ที่เส้นทางไหน
  const menuItems = [
    { name: "Overview", path: "/admin/dashboard" },
    { name: "Car Management", path: "carmanagement" },
    { name: "Booking Management", path: "booking" },
  ];

  return (
    <div className="w-56 bg-blue-700 text-white p-6 flex flex-col justify-between min-h-screen">
      <div>
        <h2 className="text-2xl font-bold">MyCarRent</h2>
        <nav className="space-y-2 mt-4">
          {menuItems.map((item) => (
            <Link key={item.path} href={item.path}>
              <p
                className={`p-2 rounded cursor-pointer ${
                  pathname === item.path ? "bg-blue-500" : "hover:bg-blue-500"
                }`}
              >
                {item.name}
              </p>
            </Link>
          ))}
        </nav>
      </div>
      <div>
        <button
          onClick={() => signOut({ redirect: true, callbackUrl: "/" })}
          className="p-1 bg-white text-blue-700 hover:text-white rounded w-full hover:bg-blue-500 cursor-pointer"
        >
          Signout
        </button>
      </div>
    </div>
  );
}

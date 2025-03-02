"use client"

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import React, { useState, useEffect } from "react";
import { signOut } from 'next-auth/react';

const Profile = () => {
  const { data: session } = useSession();
  console.log(session);

  if (!session) redirect("/")

  const [email, setEmail] = useState(session?.user?.email || "");  // Initialize with fallback value
  const [phone, setPhone] = useState(session?.user?.phone || '+66'); // Initialize with fallback value
  const [tempName, setTempName] = useState(session?.user?.name || ""); // Initialize with fallback value
  const [lastName, setLastName] = useState(session?.user?.lastname || ""); // Initialize with fallback value

  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingPhone, setIsEditingPhone] = useState(false);

  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleNameChange = (e) => setTempName(e.target.value); // Update tempName for name changes
  const handleLastNameChange = (e) => setLastName(e.target.value);

  const handleEditEmail = () => setIsEditingEmail(true);
  const handleConfirmEmail = () => setIsEditingEmail(false);

  const handleEditPhone = () => setIsEditingPhone(true);
  const handleConfirmPhone = () => setIsEditingPhone(false);

  return (
    <div className="relative">
      <Navbar session={session} />
      {/* Breadcrumb navigation */}
      <ul className="container mx-auto px-24 flex items-center space-x-2 mt-5 text-sm text-gray-500">
        <li>
          <Link href="/" className="hover:text-blue-600">
            หน้าแรก
          </Link>
        </li>
        <li>&gt;</li>
        <li>
          <Link href="/profilepage" className="text-blue-600">
            โปรไฟล์
          </Link>
        </li>
      </ul>

      <div className="container mx-auto px-24 py-4 flex gap-6">
        {/* Sidebar */}
        <aside className="w-64 sm:w-48 bg-white p-4 rounded-lg shadow text-sm">
          <div className="flex flex-col items-center text-lg mb-6">
            <h2 className="font-semibold text-gray-800 text-center">{session?.user?.name}</h2>
          </div>
          <Link
            href="/profilepage"
            className="block py-2 px-3 text-blue-600 bg-blue-50 rounded w-full"
          >
            จัดการบัญชีโปรไฟล์
          </Link>
          <Link
            href="/RentalHistory"
            className="block py-2 px-3 text-gray-600 hover:bg-gray-100 rounded w-full"
          >
            การเช่ารถของฉัน
          </Link>
          <button
            onClick={() => signOut({ redirect: true, callbackUrl: '/' })}
            className="py-2 px-3 text-gray-600 hover:bg-gray-100 rounded w-full flex "
          >
            ออกจากระบบ
          </button>
        </aside>

        {/* Main Profile Section */}
        <div className="flex-1 space-y-6">
          {/* Profile Form */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h1 className="text-base font-semibold text-gray-800 mb-6">จัดการบัญชีโปรไฟล์</h1>
            <form className="space-y-6">
              <div className="flex items-center space-x-4 w-full">
                <div className="flex-1">
                  <label className="text-xs text-gray-600 mb-1">ชื่อแสดงบนโปรไฟล์ (30 ตัวอักษร)</label>
                  <input
                    type="text"
                    value={tempName}
                    onChange={handleNameChange}
                    className="w-full px-4 py-2 text-xs border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-gray-600 mb-1">
                  ชื่อ (ตามบัตรประชาชน)
                </label>
                <input
                  type="text"
                  value={session?.user?.firstname || ""}
                  onChange={handleNameChange}
                  className="w-full px-4 py-2 text-xs border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              {/* Last Name */}
              <div>
                <label className="block text-xs text-gray-600 mb-1">นามสกุล (ตามบัตรประชาชน)</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={handleLastNameChange}
                  className="w-full px-4 py-2 text-xs border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </form>
          </section>

          {/* Email Section */}
          <section className="bg-white p-6 rounded-lg shadow">
            <label className="block text-xs text-gray-600 mb-1">อีเมล (เพื่อรับข้อมูลยืนยันการจอง)</label>
            {isEditingEmail ? (
              <div className="flex items-center space-x-4">
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  className="w-full px-4 py-2 text-xs border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <button
                  onClick={handleConfirmEmail}
                  className="text-xs text-green-600 hover:text-blue-600"
                >
                  ยืนยัน
                </button>
              </div>
            ) : (
              <div className="flex justify-between">
                <span className='text-xs'>{email || "ยังไม่ได้ระบุอีเมล"}</span>
                <button
                  onClick={handleEditEmail}
                  className="text-xs text-gray-600 hover:text-blue-600"
                >
                  แก้ไข
                </button>
              </div>
            )}
          </section>

          {/* Phone Number Section */}
          <section className="bg-white p-6 rounded-lg shadow">
            <label className="block text-xs text-gray-600 mb-1">เบอร์โทรศัพท์ (ใช้ติดต่อกับร้านเช่า)</label>
            {isEditingPhone ? (
              <div className="flex items-center space-x-4">
                <input
                  type="text"
                  value={phone}
                  onChange={handlePhoneChange}
                  className="w-full px-4 py-2 text-xs border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <button
                  onClick={handleConfirmPhone}
                  className="text-xs text-green-600 hover:text-blue-600"
                >
                  ยืนยัน
                </button>
              </div>
            ) : (
              <div className="flex justify-between">
                <span className='text-xs'>{phone}</span>
                <button
                  onClick={handleEditPhone}
                  className="text-xs text-gray-600 hover:text-blue-600"
                >
                  แก้ไข
                </button>
              </div>
            )}
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;

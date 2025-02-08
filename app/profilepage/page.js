"use client";

import Image from 'next/image';
import Link from "next/link";
import React, { useState } from "react";

export default function ProfileManagement() {
    const [birthdate, setBirthdate] = useState('');
    const [phone, setPhone] = useState('+66');
    const [email, setEmail] = useState('');
    const [name, setName] = useState("Nalinn"); // ชื่อหลักที่แสดงในโปรไฟล์
    const [tempName, setTempName] = useState(name); // ชื่อชั่วคราวที่ใช้แก้ไข
    const [lastName, setLastName] = useState("Ruam");
    const [isEditingEmail, setIsEditingEmail] = useState(false);
    const [isEditingPhone, setIsEditingPhone] = useState(false);


    
    
    const handleBirthdateChange = (e) => setBirthdate(e.target.value);
    const handlePhoneChange = (e) => setPhone(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleNameChange = (e) => setName(e.target.value);
    const handleLastNameChange = (e) => setLastName(e.target.value);

    const handleEditEmail = () => setIsEditingEmail(true);
    const handleConfirmEmail = () => setIsEditingEmail(false);

    const handleEditPhone = () => setIsEditingPhone(true);
    const handleConfirmPhone = () => setIsEditingPhone(false);
    

    const [showDeleteModal, setShowDeleteModal] = useState(false); // ใช้ state เพื่อเก็บสถานะของ Modal

    

  const handleDeleteAccount = () => {
    // ทำการลบบัญชีที่นี่
    alert("บัญชีถูกลบแล้ว!");
    setShowDeleteModal(false); // ปิด Modal หลังจากลบบัญชี
  };


    const handleSave = () => {
        alert("ข้อมูลโปรไฟล์ถูกบันทึกแล้ว!");
    };

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Navbar */}
            <nav className="bg-white border-b shadow-md py-3 w-full">
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <Image
                        src="/Logo.svg"
                        alt="Logo"
                        width={120}
                        height={40}
                        className="object-cover"
                    />
                    <div className="text-sm text-gray-600 flex space-x-4">
                        <a href="#" className="hover:text-blue-500">เข้าสู่ระบบ</a>
                        <a href="#" className="hover:text-blue-500">สมัครสมาชิก</a>
                        <span className="text-gray-400">|</span>
                        <a href="tel:02-038-5222" className="hover:text-blue-500">02-038-5222</a>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className="container mx-auto px-6 py-10 flex gap-6">
                {/* Sidebar */}
                <aside className="w-64 bg-white p-6 rounded-lg shadow">
                    <div className="flex flex-col items-center mb-8">
                        <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                            <Image
                                src="/profile3.svg"
                                alt="Profile"
                                width={96}
                                height={96}
                                className="object-cover"
                            />
                        </div>
                        <h2 className="text-lg font-semibold text-gray-800 text-center">{name}</h2>
                    </div>
                    <Link href="/profilepage" className="block py-2 px-4 text-blue-600 bg-blue-50 rounded">
                        จัดการบัญชีโปรไฟล์
                    </Link>
                    <Link href="/rentals" className="block py-2 px-4 text-gray-600 hover:bg-gray-100 rounded">
                        การเช่ารถของฉัน
                    </Link>
                    <Link href="/coupons" className="block py-2 px-4 text-gray-600 hover:bg-gray-100 rounded">
                        คูปองของฉัน
                    </Link>
                    <Link href="/notifications" className="block py-2 px-4 text-gray-600 hover:bg-gray-100 rounded">
                        การแจ้งเตือน
                    </Link>
                    <Link href="/logout" className="block py-2 px-4 text-gray-600 hover:bg-gray-100 rounded">
                        ออกจากระบบ
                    </Link>
                </aside>

                {/* Main Profile Section */}
                <div className="flex-1 space-y-6">
                    {/* Profile Form */}
                    <section className="bg-white p-6 rounded-lg shadow">
                        <h1 className="text-lg font-semibold text-gray-800 mb-6">จัดการบัญชีโปรไฟล์</h1>
                        <form className="space-y-6">
                            <div className="flex items-center space-x-4 w-full">
                                <Image
                                    src="/profile3.svg"
                                    alt="Profile"
                                    width={100}
                                    height={100}
                                    className="w-24 h-24 rounded-full object-cover"
                                />
                                <div className="flex-1">
                                    <label className="text-sm text-gray-600 mb-1">ชื่อแสดงบนโปรไฟล์ (30 ตัวอักษร)</label>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={handleNameChange}
                                        className="w-full px-4 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    />
                                </div>
                            </div>

                            {/* Last Name */}
                            <div>
                                <label className="block text-sm text-gray-600 mb-1">นามสกุล (ตามบัตรประชาชน)</label>
                                <input
                                    type="text"
                                    value={lastName}
                                    onChange={handleLastNameChange}
                                    className="w-full px-4 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>

                            {/* Birthdate */}
                            <div>
                                <label className="block text-sm text-gray-600 mb-1">วันเกิด (สิทธิพิเศษเฉพาะคุณ)</label>
                                <input
                                    type="date"
                                    value={birthdate}
                                    onChange={handleBirthdateChange}
                                    className="w-full px-4 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>
                        </form>
                    </section>

                    {/* Email Section */}
                    <section className="bg-white p-6 rounded-lg shadow">
                        <label className="block text-sm text-gray-600 mb-1">อีเมล (เพื่อรับข้อมูลยืนยันการจอง)</label>
                        {isEditingEmail ? (
                            <div className="flex items-center space-x-4">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    className="w-full px-4 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                                <button
                                    onClick={handleConfirmEmail}
                                    className="text-sm text-green-600 hover:text-blue-600"
                                >
                                    ยืนยัน
                                </button>
                            </div>
                        ) : (
                            <div className="flex justify-between">
                                <span>{email || "ยังไม่ได้ระบุอีเมล"}</span>
                                <button
                                    onClick={handleEditEmail}
                                    className="text-sm text-gray-600 hover:text-blue-600"
                                >
                                    แก้ไข
                                </button>
                            </div>
                        )}
                    </section>

                    {/* Phone Number Section */}
                    <section className="bg-white p-6 rounded-lg shadow">
                        <label className="block text-sm text-gray-600 mb-1">เบอร์โทรศัพท์ (ใช้ติดต่อกับร้านเช่า)</label>
                        {isEditingPhone ? (
                            <div className="flex items-center space-x-4">
                                <input
                                    type="text"
                                    value={phone}
                                    onChange={handlePhoneChange}
                                    className="w-full px-4 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                                <button
                                    onClick={handleConfirmPhone}
                                    className="text-sm text-green-600 hover:text-blue-600"
                                >
                                    ยืนยัน
                                </button>
                            </div>
                        ) : (
                            <div className="flex justify-between">
                                <span>{phone}</span>
                                <button
                                    onClick={handleEditPhone}
                                    className="text-sm text-gray-600 hover:text-blue-600"
                                >
                                    แก้ไข
                                </button>
                            </div>
                        )}
                    </section>

                      {/* Account Management Section */}
                      <section className="bg-white p-6 rounded-lg shadow">
                      <div className="relative">
        <label className="block text-sm text-gray-600 mb-1">จัดการบัญชี</label>
        <nav className="space-y-4 text-sm">
          <label className="block text-sm text-gray-600 mb-1">ลบบัญชีผู้ใช้ของคุณ</label>

          {/* Positioning the confirmation and edit options */}
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col items-end space-y-1">
            {/* Delete button with hover effect */}
            <button 
              onClick={() => setShowModal(true)} 
              className="cursor-pointer text-sm text-red-600 hover:text-red-800 focus:outline-none">
              ลบ
            </button>
          </div>
        </nav>
    </div>

   {/* Modal ยืนยันการลบบัญชี */}
{showDeleteModal && (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
      <h3 className="text-lg text-gray-700">คุณแน่ใจว่าต้องการลบบัญชีใช่หรือไม่?</h3>
      <div className="mt-4 flex justify-end space-x-4">
        <button
          onClick={() => setShowDeleteModal(false)} // ปิด Modal
          className="text-sm text-gray-600 hover:text-gray-800 focus:outline-none"
        >
          ยกเลิก
        </button>
        <button
          onClick={handleDeleteAccount} // ลบบัญชี
          className="text-sm text-red-600 hover:text-red-800 focus:outline-none"
        >
          ยืนยัน
        </button>
      </div>
    </div>
  </div>
)}

</section> 

    <section className="bg-white p-6 rounded-lg shadow">
      <div className="relative">
        <label className="block text-sm text-gray-600 mb-1">จัดการบัญชี</label>
        <nav className="space-y-4 text-sm">
          <label className="block text-sm text-gray-600 mb-1">ลบบัญชีผู้ใช้ของคุณ</label>

          {/* Positioning the confirmation and edit options */}
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col items-end space-y-1">
            {/* Delete button with hover effect */}
            <button
              onClick={() => setShowDeleteModal(true)} // เปิด Modal เมื่อคลิกปุ่มลบ
              className="cursor-pointer text-sm text-red-600 hover:text-red-800 focus:outline-none"
            >
              ลบ
            </button>
          </div>
        </nav>
      </div>

      {/* Modal ยืนยันการลบบัญชี */}
      {showDeleteModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg text-gray-700">คุณแน่ใจว่าต้องการลบบัญชีใช่หรือไม่?</h3>
            <div className="mt-4 flex justify-end space-x-4">
              <button
                onClick={() => setShowDeleteModal(false)} // ปิด Modal เมื่อคลิกยกเลิก
                className="text-sm text-gray-600 hover:text-gray-800 focus:outline-none"
              >
                ยกเลิก
              </button>
              <button
                onClick={handleDeleteAccount} // ลบบัญชี
                className="text-sm text-red-600 hover:text-red-800 focus:outline-none"
              >
                ยืนยัน
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  




                    {/* Save Button */}
                    <section className="bg-white p-6 rounded-lg shadow">
                        <div className="text-right">
                            <button
                                type="button"
                                onClick={handleSave}
                                className="w-full px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                บันทึกข้อมูล
                            </button>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

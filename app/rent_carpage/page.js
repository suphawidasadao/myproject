"use client";
 
import Image from 'next/image';
import React, { useState } from "react";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Link from 'next/link';
 
export default function Home() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        usage: "",
        details: "",
        contactFromAbroad: false
    });

    const isFormValid = formData.firstName && formData.lastName && formData.email && formData.phone;

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        });
    };
    return (
        <div className="relative">
            {/* Navbar */}
            <div>
                <Navbar />
            </div>
 
            {/* Main Content */}
            <div className="container mx-auto px-24 mt-4 flex gap-4">
                {/* Summary Section */}
                <div className="bg-white p-4 rounded-lg shadow-md w-96">
                    <h2 className="text-base font-bold mb-4 text-gray-800">สรุปทริปการเดินทาง</h2>
                    <div className="flex items-center mb-4">
                        <img
                            src="https://phetyont.com/wp-content/uploads/2024/09/Toyota-Yaris-895.jpg"
                            alt="Car"
                            className="w-32 h-26 rounded-md"
                        />
                        <div className="ml-4">
                            <h3 className="text-sm font-medium">Toyota Yaris 2023</h3>
                            <p className="text-xs text-gray-600">เกียร์ออโต้</p>
                        </div>
                    </div>
                    <div>
                        {/* เส้นขั้นแรก */}
                        <hr className="border-t border-gray-300 my-4 mx-4 mb-0" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="15" height="30" className="ml-[45px] translate-y-10">
                            <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="50" className="ml-[40px] translate-y-5">
                            <path d="M135.2 117.4L109.1 192l293.8 0-26.1-74.6C372.3 104.6 360.2 96 346.6 96L165.4 96c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32l181.2 0c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2l0 144 0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48L96 400l0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48L0 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
                        </svg>
                        {/* เส้นประแนวตั้ง */}
                        <div className="border-l border-dashed border-yellow-500 h-12 ml-[50px] translate-y-3"></div>
                        <div className="bg-white border border-yellow-500 p-4 rounded-full shadow-md mt-4 w-[60px] h-[40px] ml-6 flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="30">
                                <path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7L86.6 329.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128z" />
                            </svg>
                        </div>
                        {/* เส้นประแนวตั้ง */}
                        <div className="border-l border-dashed border-yellow-500 h-12 ml-[50px] mt-1 "></div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="15" height="30" className="ml-[45px]">
                            <path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7L86.6 329.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="50" className="ml-10 relative top-[-20px]">
                            <path d="M135.2 117.4L109.1 192l293.8 0-26.1-74.6C372.3 104.6 360.2 96 346.6 96L165.4 96c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32l181.2 0c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2l0 144 0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48L96 400l0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48L0 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
                        </svg>
                        <p className="text-sm text-gray-600 ml-28 transform translate-y-[-250px]">
                            <span className='text-gray-400'>รับรถ</span><br />
                            สนามบินดอนเมือง<br />
                            09/01/2025<br />
                            10:00 น.<br />
                            <span className='text-gray-400'>คืนรถ</span><br />
                            คืนรถ สนามบินดอนเมือง<br />
                            11/01/2025 <br />
                            10:00 น
                        </p>
                        {/* เส้นขั้นที่สอง */}
                        <hr className="border-t border-gray-300 my-4 mx-4 mt-0 transform -translate-y-40" />
                    </div>
                    <div className="text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                            <img
                                src="https://search.drivehub.com/_next/image?url=https%3A%2F%2Fdrivehubv3.s3-ap-southeast-1.amazonaws.com%2Flogo%2F45c687d4-adab-431b-bf64-2fd347be24bb%2Fmedium.png&w=1080&q=100"
                                alt="RN Rent A Car"
                                className="w-20 h-22 rounded-md mt-[-200px] "
                            />
                            <p className="ml-6 mt-[-200px] text-sm">
                                <span className=" text-gray-400">ร้านรถเช่า</span><br />
                                <span className=' text-orange-400'>Local</span><br />
                                RN Rent A Car<br />
                                กรุงเทพมหานคร
                            </p>
                        </div>
                    </div>
                </div>
                {/* Form Section */}
                <div className="bg-white p-4 rounded-lg shadow-md w-full h-[420px]">
                    <h3 className="text-base font-bold mb-4 text-gray-800">กรอกข้อมูล</h3>

                    <form className="flex flex-col gap-4">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="ชื่อจริง"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="p-2 border rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="นามสกุล"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="p-2 border rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="อีเมล (สำหรับติดต่อสอบถาม)"
                            value={formData.email}
                            onChange={handleChange}
                            className="p-2 border rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <input
                            type="text"
                            name="phone"
                            placeholder="เบอร์โทรศัพท์"
                            value={formData.phone}
                            onChange={handleChange}
                            className="p-2 border rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <input
                            type="text"
                            name="usage"
                            placeholder="การใช้งานของคุณ"
                            value={formData.usage}
                            onChange={handleChange}
                            className="p-2 border rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            name="details"
                            placeholder="รายละเอียดเพิ่มเติม (ถ้ามี)"
                            value={formData.details}
                            onChange={handleChange}
                            className="p-2 border rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <label className="flex items-center gap-2 text-xs">
                            <input
                                type="checkbox"
                                name="contactFromAbroad"
                                checked={formData.contactFromAbroad}
                                onChange={handleChange}
                                className="w-4 h-4"
                            />
                            ติดต่อเรื่องรถจากต่างประเทศ
                        </label>
                    </form>
                </div>
            </div>
            {/* ปุ่มยืนยัน */}
            <div className="bg-white border p-4 rounded-md shadow-md mt-[-260px] w-[555px] ml-[465px]">
                <p className="text-center text-black mb-4 text-xs">
                    กรุณาตรวจสอบข้อมูลการเช่าให้ครบถ้วนก่อนการกดยืนยัน
                </p>
                <Link href={isFormValid ? "/rent_carpage2" : "#"} passHref>
                    <button
                        type="submit"
                        className={`text-xs p-2 rounded-md w-full block mx-auto ${
                            isFormValid ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                        disabled={!isFormValid}
                    >
                        ยืนยันข้อมูล
                    </button>
                </Link>
            </div>
 
            <div className='mt-48'>
                <Footer />
            </div>
 
        </div>
    );
}
 

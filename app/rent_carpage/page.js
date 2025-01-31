"use client";
 
import Image from 'next/image';
import React, { useState } from "react";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
 
export default function Home() {
 
 
    return (
        <div className="relative">
            {/* Navbar */}
            <div>
                <Navbar/>
            </div>
 
            {/* Main Content */}
            <div className="container mx-auto px-24 mt-4 flex gap-4">
                {/* Summary Section */}
                <div className="bg-white p-4 rounded-lg shadow-md w-1/2">
                    <h2 className="text-lg font-bold mb-4 text-gray-800">สรุปทริปการเดินทาง</h2>
                    <div className="flex items-center mb-4">
                        <img
                            src="https://phetyont.com/wp-content/uploads/2024/09/Toyota-Yaris-895.jpg"
                            alt="Car"
                            className="w-40 h-26 rounded-md"
                        />
                        <div className="ml-5">
                            <h3 className="text-base font-bold">Toyota Yaris 2023</h3>
                            <p className="text-sm text-gray-600">เกียร์ออโต้</p>
                        </div>
                    </div>
                    <div>
                        {/* เส้นขั้นแรก */}
                        <hr className="border-t border-gray-300 my-4 mx-4" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="15" height="30" className="ml-[85px] translate-y-10">
                            <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="50" className="ml-[80px] translate-y-5">
                            <path d="M135.2 117.4L109.1 192l293.8 0-26.1-74.6C372.3 104.6 360.2 96 346.6 96L165.4 96c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32l181.2 0c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2l0 144 0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48L96 400l0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48L0 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/>
                        </svg>
                          {/* เส้นประแนวตั้ง */}
                          <div className="border-l border-dashed border-yellow-500 h-12 ml-[90px] translate-y-3"></div>
                            <div className="bg-white border border-yellow-500 p-4 rounded-full shadow-md mt-4 w-[60px] h-[40px] ml-16 flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="30">
                                <path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7L86.6 329.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128z"/>
                            </svg>
                            </div>
                         {/* เส้นประแนวตั้ง */}
                         <div className="border-l border-dashed border-yellow-500 h-12 ml-[90px] mt-1 "></div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="15" height="30" className="ml-[85px]">
                            <path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7L86.6 329.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="50" className="ml-20 relative top-[-20px]">
                            <path d="M135.2 117.4L109.1 192l293.8 0-26.1-74.6C372.3 104.6 360.2 96 346.6 96L165.4 96c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32l181.2 0c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2l0 144 0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48L96 400l0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48L0 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/>
                        </svg>                          
                            <p className="text-base text-gray-600 ml-56 transform translate-y-[-250px]">
                                <span className='text-gray-400'>รับรถ</span><br/>
                                สนามบินดอนเมือง<br />
                                09/01/2025<br />
                                10:00 น.<br />
                                <span className='text-gray-400'>คืนรถ</span><br/>
                                คืนรถ สนามบินดอนเมือง<br />
                                11/01/2025 <br />
                                10:00 น
                            </p>
                        {/* เส้นขั้นที่สอง */}
                        <hr className="border-t border-gray-300 my-4 mx-4 transform -translate-y-40" />
                    </div>
                    <div className="text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                            <img
                                src="https://search.drivehub.com/_next/image?url=https%3A%2F%2Fdrivehubv3.s3-ap-southeast-1.amazonaws.com%2Flogo%2F45c687d4-adab-431b-bf64-2fd347be24bb%2Fmedium.png&w=1080&q=100"
                                alt="RN Rent A Car"
                                className="w-24 h-22 rounded-md mt-[-200px] ml-10"
                            />
                            <p className="ml-16 mt-[-200px]">
                                <span className="text-lg text-gray-400">ร้านรถเช่า</span><br/>
                                <span className='text-sm text-orange-400'>Local</span><br/>
                                RN Rent A Car<br/>
                                กรุงเทพมหานคร
                            </p>
                        </div>
                    </div>
                </div>
                {/* Form Section */}
                <div className="bg-white p-4 rounded-lg shadow-md w-1/2 h-[500px]">
                    <h3 className="text-lg font-bold mb-4 text-gray-800">กรอกข้อมูล</h3>
 
                    {/* ข้อความข้อมูลผู้ขับขี่ */}
                    <div className="mb-4 text-sm text-gray-600">
                        <p>ข้อมูลผู้ขับขี่ (ชื่อผู้ขับขี่ต้องเป็นชื่อเดียวกับผู้ที่มารับรถ)</p>
                    </div>
 
                    <form className="flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="ชื่อจริง"
                            className="p-2 border rounded-md text-sm"
                            required
                        />
                        <input
                            type="text"
                            placeholder="นามสกุล"
                            className="p-2 border rounded-md text-sm"
                            required
                        />
                        <input
                            type="email"
                            placeholder="อีเมล (สำหรับติดต่อสอบถาม)"
                            className="p-2 border rounded-md text-sm"
                            required
                        />
                        <input
                            type="text"
                            placeholder="เบอร์โทรศัพท์"
                            className="p-2 border rounded-md text-sm"
                            required
                        />
                        <input
                            type="text"
                            placeholder="การใช้งานของคุณ"
                            className="p-2 border rounded-md text-sm"
                        />
                        <input
                            type="text"
                            placeholder="รายละเอียดเพิ่มเติม (ถ้ามี)"
                            className="p-2 border rounded-md text-sm"
                        />
                        <label className="flex items-center gap-2 text-sm">
                            <input type="checkbox" className="w-4 h-4" />
                            ติดต่อเรื่องรถจากต่างประเทศ
                        </label>
                    </form>
                </div>
            </div>
            <div className="bg-white border p-4 rounded-md shadow-md mt-[-260px] w-[415px] ml-[610px]">
    <p className="text-center text-black mb-4 text-sm">
        กรุณาตรวจสอบข้อมูลการเช่าให้ครบถ้วนก่อนการกดยืนยัน
    </p>
    <button
        type="submit"
        className="bg-blue-500 text-white text-sm p-2 rounded-md hover:bg-blue-600 w-full block mx-auto">
        ยืนยันข้อมูล
    </button>
</div>
 
            <div>
                <Footer />
            </div>
 
        </div>
    );
}
 

"use client";

import Image from 'next/image';
import React, { useState } from "react";

export default function Home() {
    const [isHelpDropdownOpen, setIsHelpDropdownOpen] = useState(false);
    const [isSignUpDropdownOpen, setIsSignUpDropdownOpen] = useState(false);

    const toggleHelpDropdown = () => {
        setIsHelpDropdownOpen(!isHelpDropdownOpen);
    };

    const toggleSignUpDropdown = () => {
        setIsSignUpDropdownOpen(!isSignUpDropdownOpen);
    };

    const handleClickOutside = (e) => {
        if (!e.target.closest('.dropdown')) {
            setIsHelpDropdownOpen(false);
            setIsSignUpDropdownOpen(false);
        }
    };

    React.useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative">
            {/* Navbar */}
            <nav className="bg-white border-b shadow-md py-1 w-full">
                <div className="container mx-auto px-12">
                    <div className="flex justify-between items-center">
                        <Image
                            src="/Logo.svg"
                            alt="Logo"
                            width={100}
                            height={100}
                            className="object-cover"
                        />

                        <ul className="flex space-x-4 items-center text-[10px]">
                            <li className="relative dropdown" onClick={toggleHelpDropdown}>
                                <a href="#" className="flex items-center">
                                    ความช่วยเหลือ
                                    <svg
                                        className={`w-3 h-3 ml-1 transition-transform ${isHelpDropdownOpen ? "rotate-180 text-red-500" : "text-blue-500"}`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M22.586,5.929l-9.879,9.879a1.021,1.021,0,0,1-1.414,0L1.42,5.934.006,7.348l9.873,9.874a3.075,3.075,0,0,0,4.243,0L24,7.343Z" />
                                    </svg>
                                </a>
                                {isHelpDropdownOpen && (
                                    <ul className="absolute top-full left-0 mt-2 bg-white border rounded shadow-md z-10">
                                        <li>
                                            <a href="#" className="block px-2 py-2 text-gray-700 hover:bg-gray-100 text-[10px]">
                                                วิธีการจองรถ
                                            </a>
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li className="relative dropdown" onClick={toggleSignUpDropdown}>
                                <a href="#" className="flex items-center">
                                    สมัครสมาชิก/ลงชื่อเข้าใช้
                                    <svg
                                        className={`w-3 h-3 ml-1 transition-transform ${isSignUpDropdownOpen ? "rotate-180 text-red-500" : "text-blue-500"}`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M22.586,5.929l-9.879,9.879a1.021,1.021,0,0,1-1.414,0L1.42,5.934.006,7.348l9.873,9.874a3.075,3.075,0,0,0,4.243,0L24,7.343Z" />
                                    </svg>
                                </a>
                                {isSignUpDropdownOpen && (
                                    <ul className="absolute top-full left-0 mt-2 bg-white border rounded shadow-md z-10">
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white text-[10px] rounded">
                                                สมัครสมาชิก
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white text-[10px] rounded">
                                                ลงชื่อเข้าใช้
                                            </a>
                                        </li>
                                    </ul>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className="container mx-auto px-4 mt-4 flex gap-4">
                {/* Summary Section */}
                <div className="bg-white p-4 rounded-lg shadow-md w-1/2">
                    <h2 className="text-xl font-bold mb-4">สรุปทริปการเดินทาง</h2>
                    <div className="flex items-center mb-4">
                        <img
                            src="https://phetyont.com/wp-content/uploads/2024/09/Toyota-Yaris-895.jpg"
                            alt="Car"
                            className="w-1/3 rounded-md"
                        />
                        <div className="ml-5">
                            <h3 className="text-lg font-bold">Toyota Yaris 2023</h3>
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
                            <p className="text-xl text-gray-600 ml-56 transform translate-y-[-250px]">
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
                                className="w-28 h-22 rounded-md mt-[-200px] ml-10"
                            />
                            <span className="ml-16 mt-[-200px]">
                                <p className="font-bold text-lg">ร้านรถเช่า</p>Local<br />RN Rent A Car<br />กรุงเทพมหานคร
                            </span>
                        </div>
                    </div>
                </div>
                {/* Form Section */}
                <div className="bg-white p-4 rounded-lg shadow-md w-1/2 h-[500px]">
                    <h3 className="text-lg font-bold mb-4">กรอกข้อมูล</h3>

                    {/* ข้อความข้อมูลผู้ขับขี่ */}
                    <div className="mb-4 text-sm text-gray-600">
                        <p>ข้อมูลผู้ขับขี่ (ชื่อผู้ขับขี่ต้องเป็นชื่อเดียวกับผู้ที่มารับรถ)</p>
                    </div>

                    <form className="flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="ชื่อจริง"
                            className="p-2 border rounded-md"
                            required
                        />
                        <input
                            type="text"
                            placeholder="นามสกุล"
                            className="p-2 border rounded-md"
                            required
                        />
                        <input
                            type="email"
                            placeholder="อีเมล (สำหรับติดต่อสอบถาม)"
                            className="p-2 border rounded-md"
                            required
                        />
                        <input
                            type="text"
                            placeholder="เบอร์โทรศัพท์"
                            className="p-2 border rounded-md"
                            required
                        />
                        <input
                            type="text"
                            placeholder="การใช้งานของคุณ"
                            className="p-2 border rounded-md"
                        />
                        <input
                            type="text"
                            placeholder="รายละเอียดเพิ่มเติม (ถ้ามี)"
                            className="p-2 border rounded-md"
                        />
                        <label className="flex items-center gap-2 text-sm">
                            <input type="checkbox" className="w-4 h-4" />
                            ติดต่อเรื่องรถจากต่างประเทศ
                        </label>
                    </form>
                </div>
            </div>
            <div className="bg-white border p-4 rounded-md shadow-md mt-[-300px] w-[620px] ml-[730px]">
                <p className="text-center text-black mb-4">
                    กรุณาตรวจสอบข้อมูลการเช่าให้ครบถ้วนก่อนการกดยืนยัน
                </p>
                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 w-[550px] block mx-auto">
                    ยืนยันข้อมูล
                </button>
            </div>
            
            <footer className="bg-gray-800 text-white py-8 mt-52 flex items-center">
    <div className="ml-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="pl-2 -translate-y-8">
            <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2">
                <Image
                    src="logocar.svg"
                    alt="Logo"
                    width={100}
                    height={100}
                    className="object-cover"
                />
                <span>DRIVEFLEX</span>
            </h2>
      <p className="text-sm -translate-y-8 ml-5">University of Phayao</p>
      <span className="text-sm mt-4">
        <div className="flex space-x-4 -translate-y-5 ">
          <span className="block ml-5">📞 01-234-5678</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 510"
            width="20"
            height="20">
            <path
              fill="#ffffff"
              d="M311 196.8v81.3c0 2.1-1.6 3.7-3.7 3.7h-13c-1.3 0-2.4-.7-3-1.5l-37.3-50.3v48.2c0 2.1-1.6 3.7-3.7 3.7h-13c-2.1 0-3.7-1.6-3.7-3.7V196.9c0-2.1 1.6-3.7 3.7-3.7h12.9c1.1 0 2.4 .6 3 1.6l37.3 50.3V196.9c0-2.1 1.6-3.7 3.7-3.7h13c2.1-.1 3.8 1.6 3.8 3.5zm-93.7-3.7h-13c-2.1 0-3.7 1.6-3.7 3.7v81.3c0 2.1 1.6 3.7 3.7 3.7h13c2.1 0 3.7-1.6 3.7-3.7V196.8c0-1.9-1.6-3.7-3.7-3.7zm-31.4 68.1H150.3V196.8c0-2.1-1.6-3.7-3.7-3.7h-13c-2.1 0-3.7 1.6-3.7 3.7v81.3c0 1 .3 1.8 1 2.5c.7 .6 1.5 1 2.5 1h52.2c2.1 0 3.7-1.6 3.7-3.7v-13c0-1.9-1.6-3.7-3.5-3.7zm193.7-68.1H327.3c-1.9 0-3.7 1.6-3.7 3.7v81.3c0 1.9 1.6 3.7 3.7 3.7h52.2c2.1 0 3.7-1.6 3.7-3.7V265c0-2.1-1.6-3.7-3.7-3.7H344V247.7h35.5c2.1 0 3.7-1.6 3.7-3.7V230.9c0-2.1-1.6-3.7-3.7-3.7H344V213.5h35.5c2.1 0 3.7-1.6 3.7-3.7v-13c-.1-1.9-1.7-3.7-3.7-3.7zM512 93.4V419.4c-.1 51.2-42.1 92.7-93.4 92.6H92.6C41.4 511.9-.1 469.8 0 418.6V92.6C.1 41.4 42.2-.1 93.4 0H419.4c51.2 .1 92.7 42.1 92.6 93.4zM441.6 233.5c0-83.4-83.7-151.3-186.4-151.3s-186.4 67.9-186.4 151.3c0 74.7 66.3 137.4 155.9 149.3c21.8 4.7 19.3 12.7 14.4 42.1c-.8 4.7-3.8 18.4 16.1 10.1s107.3-63.2 146.5-108.2c27-29.7 39.9-59.8 39.9-93.1z"/>
          </svg>
            <span className="block">@driveflex</span>
            </div>
          </span>          
        </div>

        <div className="pl-20">
            <h3 className="text-lg font-semibold mb-4">ติดตามเรา</h3>
            <div className="flex space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24">
                    <path fill="#ffffff" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24">
                    <path fill="#ffffff" d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24">
                    <path fill="#ffffff" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
            </div>
        </div>


        {/* Help Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4 items-center">ความช่วยเหลือ</h3>
          <ul className="space-y-2 text-sm ">
            <li>วิธีการจอง</li>
          </ul>
        </div>
      </div>
    </footer>

        </div>
    );
}


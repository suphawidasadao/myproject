"use client";

import Image from 'next/image';
import React, { useState } from "react";

export default function Home() {
    const [isHelpDropdownOpen, setIsHelpDropdownOpen] = useState(false);
    const [isSignUpDropdownOpen, setIsSignUpDropdownOpen] = useState(false);
    const [helpOptionSelected, setHelpOptionSelected] = useState(null);
    const [signUpOptionSelected, setSignUpOptionSelected] = useState(null);

    // เปิดเมนูเมื่อคลิกที่ "ความช่วยเหลือ" หรือ "สมัครสมาชิก"
    const toggleHelpDropdown = () => {
        setIsHelpDropdownOpen(!isHelpDropdownOpen);
    };

    const toggleSignUpDropdown = () => {
        setIsSignUpDropdownOpen(!isSignUpDropdownOpen);
    };

    // เมื่อเลือกตัวเลือกใน dropdown จะทำการปิด dropdown
    const handleHelpOptionClick = (option, e) => {
        e.stopPropagation();
        setHelpOptionSelected(option);
        setIsHelpDropdownOpen(false);
    };

    const handleSignUpOptionClick = (option, e) => {
        e.stopPropagation();
        setSignUpOptionSelected(option);
        setIsSignUpDropdownOpen(false);
    };

    // ปิด dropdown เมื่อคลิกที่พื้นที่อื่นบนหน้าจอ
    const handleClickOutside = (e) => {
        if (!e.target.closest('.dropdown')) {
            setIsHelpDropdownOpen(false);
            setIsSignUpDropdownOpen(false);
        }
    };

    // เพิ่ม event listener เมื่อคลิกที่พื้นที่อื่น
    React.useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        // ลบ event listener เมื่อคอมโพเนนต์ถูกทำลาย
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const [isBox1Focused, setIsBox1Focused] = useState(false);
    const [isBox2Focused, setIsBox2Focused] = useState(false);
    const [selectedProvince, setSelectedProvince] = useState("");

    const handleClear = () => {
        setSelectedProvince("");
    };

    

    

    const [expandedRegions, setExpandedRegions] = useState({});

    const toggleRegion = (regionName) => {
        setExpandedRegions((prevState) => ({
            ...prevState,
            [regionName]: !prevState[regionName],
        }));
    };


    return (
        <div className="relative">
            {/* Navbar*/}
            <nav className="bg-white border-b shadow-md py-1 w-full">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center">
                        <Image
                            src="/Logo.svg"
                            alt="Logo"
                            width={100}
                            height={100}
                            className="object-cover"
                        />

                        <ul className="flex space-x-4 items-center text-[10px]">
                            {/* Dropdown 1 */}
                            <li
                                className="relative dropdown"
                                onClick={toggleHelpDropdown}
                            >
                                <a href="#" className="flex items-center">
                                    ความช่วยเหลือ
                                    <svg
                                        className={`w-3 h-3 ml-1 transition-transform ${isHelpDropdownOpen ? "rotate-180 text-red-500" : "text-blue-500"
                                            }`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M22.586,5.929l-9.879,9.879a1.021,1.021,0,0,1-1.414,0L1.42,5.934.006,7.348l9.873,9.874a3.075,3.075,0,0,0,4.243,0L24,7.343Z" />
                                    </svg>
                                </a>
                                {isHelpDropdownOpen && (
                                    <ul className="absolute top-full left-0 mt-2 bg-white border rounded shadow-md z-10">
                                        <li>
                                            <a
                                                href="#"
                                                onClick={(e) => handleHelpOptionClick("ตัวเลือกที่ 1", e)}
                                                className="block px-2 py-2 text-gray-700 hover:bg-gray-100 text-[10px]"
                                            >
                                                วิธีการจองรถ
                                            </a>
                                        </li>
                                    </ul>
                                )}
                            </li>

                            {/* Dropdown 2 */}
                            <li
                                className="relative dropdown"
                                onClick={toggleSignUpDropdown}
                            >
                                <a href="#" className="flex items-center">
                                    สมัครสมาชิก/ลงชื่อเข้าใช้
                                    <svg
                                        className={`w-3 h-3 ml-1 transition-transform ${isSignUpDropdownOpen ? "rotate-180 text-red-500" : "text-blue-500"
                                            }`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M22.586,5.929l-9.879,9.879a1.021,1.021,0,0,1-1.414,0L1.42,5.934.006,7.348l9.873,9.874a3.075,3.075,0,0,0,4.243,0L24,7.343Z" />
                                    </svg>
                                </a>
                                {isSignUpDropdownOpen && (
                                    <ul className="absolute top-full left-0 mt-2 bg-white border border-gray-300 rounded shadow-md z-10">
                                        <li>
                                            <a
                                                href="#"
                                                onClick={(e) => handleSignUpOptionClick("สมัครสมาชิก", e)}
                                                className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white text-[10px] rounded"
                                            >
                                                สมัครสมาชิก
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                onClick={(e) => handleSignUpOptionClick("ลงชื่อเข้าใช้", e)}
                                                className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white text-[10px] rounded"
                                            >
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


            <div className="relative w-full h-[300px]">
                <Image
                    src="/bg.svg"
                    alt="Logo"
                    layout="fill"
                    objectFit="cover"
                />
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="container mx-auto px-4">
                        <div className="bg-white p-6 rounded shadow-md flex space-x-4">
                            <div
                                className={`bg-gray-100 p-2 rounded shadow-md w-[35%] ${isBox1Focused ? "ring-2 ring-blue-500" : ""
                                    }`}
                                onFocus={() => setIsBox1Focused(true)}
                                onBlur={() => setIsBox1Focused(false)}
                                tabIndex={-1}
                            >
                                <div className="flex items-center mb-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 text-blue-500 mr-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <h2 className="text-[10px] font-bold">จุดรับ-คืนรถ</h2>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <input
                                        type="text"
                                        value={selectedProvince}
                                        onChange={(e) => setSelectedProvince(e.target.value)}
                                        placeholder="เลือกหรือพิมพ์จังหวัด"
                                        className="border border-gray-300 rounded px-3 py-1 text-gray-700 focus:outline-none text-[10px] w-full"
                                    />

                                    {selectedProvince && (
                                        <button
                                            onClick={handleClear}
                                            className="bg-gray-300 hover:bg-gray-400 text-white font-bold px-2 py-1 rounded-full text-xs"
                                            title="ลบตัวเลือก"
                                        >
                                            ✕
                                        </button>
                                    )}
                                </div>
                            </div>

                            <div
                                className={`bg-gray-100 p-2 rounded shadow-md w-[55%] ${isBox2Focused ? "ring-2 ring-blue-500" : ""
                                    }`}
                                onFocus={() => setIsBox2Focused(true)}
                                onBlur={() => setIsBox2Focused(false)}
                                tabIndex={-1}
                            >
                                <h2 className="text-[10px] font-bold">กล่องที่ 2</h2>
                                <p className="text-[10px]">เนื้อหาภายในกล่องที่ 2</p>
                            </div>

                            {/* ปุ่ม */}
                            <div className="flex items-start">
                                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-12 rounded text-xs">
                                    ปุ่ม
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-6">
                <h1 className="text-base font-bold text-gray-800 mb-4">
                    รถเช่าราคาพิเศษ
                </h1>
                
                

            <div className="flex justify-center">
            
            
            <div className="p-6 space-y-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden border p-4 flex">
  {/* รูปภาพทางซ้าย */}
  <div className="w-1/3">
    <img
      src="/images/honda-city-2020.jpg"
      alt="Honda City 2020"
      className="w-full h-full object-cover rounded-md"
    />
  </div>

  {/* ข้อมูลทางขวา */}
  <div className="w-2/3 pl-4 flex flex-col justify-between">
    <div>
      <h2 className="text-lg font-bold text-gray-800">TOYOTA YARIS 1.2 G 2014</h2>
      <p className="text-sm text-gray-600 mt-2">
        รถเก๋ง 4 ประตู, เกียร์อัตโนมัติ, 1,200cc น้ำมันเบนซิน
      </p>
      <div className="flex items-center mt-2">
        <p className="text-sm text-gray-500">ฟรีประกันภัย</p>
        <span className="mx-1">•</span>
        <p className="text-sm text-gray-500">ใช้น้ำมันพื้นฐาน</p>
      </div>
      <div className="flex items-center mt-2">
        <span className="text-yellow-500 text-sm">⭐</span>
        <p className="text-sm text-gray-600 ml-1">4.5 (100 รีวิว)</p>
      </div>

      <div className="mt-4">
        <p className="text-sm text-gray-500">ชำระเมื่อจอง หรือโอนผ่านแอป</p>
        <p className="text-lg font-bold text-blue-600">฿ 1,190</p>
      </div>
    </div>

    <div className="mt-6">
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-md text-sm hover:bg-blue-600 w-full"
      >
        รายละเอียดรถเช่า
      </button>
    </div>
  </div>
</div>




  <div className="bg-white rounded-lg shadow-md overflow-hidden border p-4 flex">
  {/* รูปภาพทางซ้าย */}
  <div className="w-1/3">
    <img
      src="/images/honda-city-2020.jpg"
      alt="Honda City 2020"
      className="w-full h-full object-cover rounded-md"
    />
  </div>

  {/* ข้อมูลทางขวา */}
  <div className="w-2/3 pl-4 flex flex-col justify-between">
    <div>
      <h2 className="text-lg font-bold text-gray-800">HONDA CITY 2020</h2>
      <p className="text-sm text-gray-600 mt-2">
        รถเก๋ง 4 ประตู, เกียร์อัตโนมัติ, 1,200cc น้ำมันเบนซิน
      </p>
      <div className="flex items-center mt-2">
        <p className="text-sm text-gray-500">ฟรีประกันภัย</p>
        <span className="mx-1">•</span>
        <p className="text-sm text-gray-500">ใช้น้ำมันพื้นฐาน</p>
      </div>
      <div className="flex items-center mt-2">
        <span className="text-yellow-500 text-sm">⭐</span>
        <p className="text-sm text-gray-600 ml-1">4.5 (100 รีวิว)</p>
      </div>

      <div className="mt-4">
        <p className="text-sm text-gray-500">ชำระเมื่อจอง หรือโอนผ่านแอป</p>
        <p className="text-lg font-bold text-blue-600">฿ 1,590</p>
      </div>
    </div>

    <div className="mt-6">
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-md text-sm hover:bg-blue-600 w-full"
      >
        รายละเอียดรถเช่า
      </button>
    </div>
  </div>
</div>


  <div className="bg-white rounded-lg shadow-md overflow-hidden border p-4 flex">
  {/* รูปภาพทางซ้าย */}
  <div className="w-1/3">
  <img
  src="https://www.priceusedcar.com/Picture/87554/%E0%B8%82%E0%B8%B2%E0%B8%A2%E0%B8%A3%E0%B8%96%E0%B9%80%E0%B8%81%E0%B9%8B%E0%B8%87%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%AA%E0%B8%AD%E0%B8%87-suzuki-%E0%B8%8B%E0%B8%B9%E0%B8%8B%E0%B8%B9%E0%B8%81%E0%B8%B4-%E0%B8%A3%E0%B8%96%E0%B8%9B%E0%B8%B52018-%E0%B8%A3%E0%B8%AB%E0%B8%B1%E0%B8%AA87554-3e26ef4b.jpg?v=0001"
  alt="Suzuki Car"
  className="w-full h-full object-cover rounded-md"
/>

  </div>

  {/* ข้อมูลทางขวา */}
  <div className="w-2/3 pl-4 flex flex-col justify-between">
    <div>
      <h2 className="text-lg font-bold text-gray-800">SUZUKI CIAZ 1.2 GL 2018</h2>
      <p className="text-sm text-gray-600 mt-2">
        รถเก๋ง 4 ประตู, เกียร์อัตโนมัติ, 1,200cc น้ำมันเบนซิน
      </p>
      <div className="flex items-center mt-2">
        <p className="text-sm text-gray-500">ฟรีประกันภัย</p>
        <span className="mx-1">•</span>
        <p className="text-sm text-gray-500">ใช้น้ำมันพื้นฐาน</p>
      </div>
      <div className="flex items-center mt-2">
        <span className="text-yellow-500 text-sm">⭐</span>
        <p className="text-sm text-gray-600 ml-1">4.5 (100 รีวิว)</p>
      </div>

      <div className="mt-4">
        <p className="text-sm text-gray-500">ชำระเมื่อจอง หรือโอนผ่านแอป</p>
        <p className="text-lg font-bold text-blue-600">฿ 1,400</p>
      </div>
    </div>

    <div className="mt-6">
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-md text-sm hover:bg-blue-600 w-full"
      >
        รายละเอียดรถเช่า
      </button>
    </div>
  </div>
</div>


<div className="bg-white rounded-lg shadow-md overflow-hidden border p-4 flex">
  {/* รูปภาพทางซ้าย */}
  <div className="w-1/3">
    <img
      src="/images/honda-city-2020.jpg"
      alt="Honda City 2020"
      className="w-full h-full object-cover rounded-md"
    />
  </div>

  {/* ข้อมูลทางขวา */}
  <div className="w-2/3 pl-4 flex flex-col justify-between">
    <div>
      <h2 className="text-lg font-bold text-gray-800">Toyota Vios 1.5 G 2013</h2>
      <p className="text-sm text-gray-600 mt-2">
        รถเก๋ง 4 ประตู, เกียร์อัตโนมัติ, 1,200cc น้ำมันเบนซิน
      </p>
      <div className="flex items-center mt-2">
        <p className="text-sm text-gray-500">ฟรีประกันภัย</p>
        <span className="mx-1">•</span>
        <p className="text-sm text-gray-500">ใช้น้ำมันพื้นฐาน</p>
      </div>
      <div className="flex items-center mt-2">
        <span className="text-yellow-500 text-sm">⭐</span>
        <p className="text-sm text-gray-600 ml-1">4.5 (100 รีวิว)</p>
      </div>

      <div className="mt-4">
        <p className="text-sm text-gray-500">ชำระเมื่อจอง หรือโอนผ่านแอป</p>
        <p className="text-lg font-bold text-blue-600">฿ 1,080</p>
      </div>
    </div>

    <div className="mt-6">
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-md text-sm hover:bg-blue-600 w-full"
      >
        รายละเอียดรถเช่า
      </button>
    </div>
  </div>
</div>


  
  <div className="bg-white rounded-lg shadow-md overflow-hidden border p-4 flex">
  {/* รูปภาพทางซ้าย */}
  <div className="w-1/3">
  <img
  src="https://www.gurumalist.com/_image.aspx/ogEZWmrkOiJ95n1YahWL0LgR3JTbMkQfodW9aIcZ8R2GXyjOJ_-aZpeTN1wkhhZN/Car"
  alt="Car"
  className="w-full h-full object-cover rounded-md"
/>

  </div>

  {/* ข้อมูลทางขวา */}
  <div className="w-2/3 pl-4 flex flex-col justify-between">
    <div>
      <h2 className="text-lg font-bold text-gray-800">Toyota Yaris Ativ 1.2 2023</h2>
      <p className="text-sm text-gray-600 mt-2">
        รถเก๋ง 4 ประตู, เกียร์อัตโนมัติ, 1,200cc น้ำมันเบนซิน
      </p>
      <div className="flex items-center mt-2">
        <p className="text-sm text-gray-500">ฟรีประกันภัย</p>
        <span className="mx-1">•</span>
        <p className="text-sm text-gray-500">ใช้น้ำมันพื้นฐาน</p>
      </div>
      <div className="flex items-center mt-2">
        <span className="text-yellow-500 text-sm">⭐</span>
        <p className="text-sm text-gray-600 ml-1">4.5 (100 รีวิว)</p>
      </div>

      <div className="mt-4">
        <p className="text-sm text-gray-500">ชำระเมื่อจอง หรือโอนผ่านแอป</p>
        <p className="text-lg font-bold text-blue-600">฿ 2,390</p>
      </div>
    </div>

    <div className="mt-6">
      <button
        className="mt-2 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
      >
        รายละเอียดรถเช่า
      </button>
    </div>
  </div>
</div>






  
  
</div>







  
            </div>

            </div>

        </div>

    );
}
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
        <div className="container mx-auto px-8">
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



          <div class="bg-gray-200 w-screen h-auto py-5">
            <div class="max-w-4xl mx-auto px-4">
              <div class="bg-white rounded-lg shadow-md overflow-hidden border p-4 flex flex-col md:flex-row">
                <div class="w-full md:w-1/3">
                  <img
                    src="https://img.kaidee.com/prd/20220929/366882204/m/5352b453-bf01-4f67-9a3c-923aed0d29f0.jpg"
                    alt="Car"
                    class="w-full h-48 md:h-full object-cover rounded-md"
                  />
                </div>
                <div class="w-full md:w-2/3 pl-0 md:pl-4 flex flex-col justify-between mt-4 md:mt-0">
                  <div>
                    <h2 class="text-lg font-bold text-gray-800">TOYOTA YARIS 1.2 G 2014</h2>
                    <p class="text-sm text-gray-600 mt-2">
                      รถเก๋ง 4 ประตู, เกียร์อัตโนมัติ, 1,200cc น้ำมันเบนซิน
                    </p>
                    <div class="flex items-center mt-2">
                      <p class="text-sm text-gray-500">ฟรีประกันภัย</p>
                      <span class="mx-1">•</span>
                      <p class="text-sm text-gray-500">ใช้น้ำมันพื้นฐาน</p>
                    </div>
                    <div class="flex flex-col items-end mt-4 md:mt-0">
                      <div class="flex items-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="18" height="18">
                          <path fill="#FFD43B" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                        </svg>

                        <p class="text-sm text-gray-600 ml-1">4.5 (100 รีวิว)</p>
                      </div>
                      <hr className="w-full border-gray-300 my-4" />
                      <div class="flex justify-between w-full ">
                        <div class="flex items-center space-x-1">
                            <Image
                                                        src="/money.svg"
                                                        alt="Logo"
                                                        width={30}
                                                        height={30}
                                                        className="object-cover"
                                                    />
                          <p class="text-sm text-gray-500">ชำระเมื่อจอง หรือโอนผ่านแอป</p>
                          </div>
                        <p class="text-lg font-bold text-blue-600">฿ 1,190</p>
                      </div>
                    </div>
                  </div>
                  <div class="flex justify-end items-end mt-4">
                    <button
                      class="bg-blue-500 text-white py-1 px-3 rounded-md text-sm hover:bg-blue-600"
                    >
                      รายละเอียดรถเช่า
                    </button>
                  </div>
                </div>
              </div>
            </div>





            <div class="bg-gray-200 w-screen h-auto py-5">
              <div class="max-w-4xl mx-auto px-4">
                <div class="bg-white rounded-lg shadow-md overflow-hidden border p-4 flex flex-col md:flex-row">
                  <div class="w-full md:w-1/3">
                    <img
                      src="https://i.ytimg.com/vi/wm4JTjmHHWA/maxresdefault.jpg"
                      alt="Car"
                      class="w-full h-48 md:h-full object-cover rounded-md"
                    />
                  </div>
                  <div class="w-full md:w-2/3 pl-0 md:pl-4 flex flex-col justify-between mt-4 md:mt-0">
                    <div>
                      <h2 class="text-lg font-bold text-gray-800">HONDA CITY 2020</h2>
                      <p class="text-sm text-gray-600 mt-2">
                        รถเก๋ง 4 ประตู, เกียร์อัตโนมัติ, 1,200cc น้ำมันเบนซิน
                      </p>
                      <div class="flex items-center mt-2">
                        <p class="text-sm text-gray-500">ฟรีประกันภัย</p>
                        <span class="mx-1">•</span>
                        <p class="text-sm text-gray-500">ใช้น้ำมันพื้นฐาน</p>
                      </div>
                      <div class="flex flex-col items-end mt-4 md:mt-0">
                        <div class="flex items-center space-x-1">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="18" height="18">
                            <path fill="#FFD43B" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                          </svg>

                          <p class="text-sm text-gray-600 ml-1">4.5 (100 รีวิว)</p>
                        </div>
                        <hr className="w-full border-gray-300 my-4" />
                        <div class="flex justify-between w-full ">
                        <div class="flex items-center space-x-1">
                            <Image
                                                        src="/money.svg"
                                                        alt="Logo"
                                                        width={30}
                                                        height={30}
                                                        className="object-cover"
                                                    />
                          <p class="text-sm text-gray-500">ชำระเมื่อจอง หรือโอนผ่านแอป</p>
                          </div>
                          <p class="text-lg font-bold text-blue-600">฿ 1,590</p>
                        </div>
                      </div>
                    </div>
                    <div class="flex justify-end items-end mt-4">
                      <button
                        class="bg-blue-500 text-white py-1 px-3 rounded-md text-sm hover:bg-blue-600"
                      >
                        รายละเอียดรถเช่า
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-gray-200 w-screen h-auto py-4">
              <div class="max-w-4xl mx-auto px-4">
                <div class="bg-white rounded-lg shadow-md overflow-hidden border p-4 flex flex-col md:flex-row">
                  <div class="w-full md:w-1/3">
                    <img
                      src="https://www.priceusedcar.com/Picture/87554/%E0%B8%82%E0%B8%B2%E0%B8%A2%E0%B8%A3%E0%B8%96%E0%B9%80%E0%B8%81%E0%B9%8B%E0%B8%87%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%AA%E0%B8%AD%E0%B8%87-suzuki-%E0%B8%8B%E0%B8%B9%E0%B8%8B%E0%B8%B9%E0%B8%81%E0%B8%B4-%E0%B8%A3%E0%B8%96%E0%B8%9B%E0%B8%B52018-%E0%B8%A3%E0%B8%AB%E0%B8%B1%E0%B8%AA87554-3e26ef4b.jpg?v=0001"
                      alt="Car"
                      class="w-full h-48 md:h-full object-cover rounded-md"
                    />
                  </div>
                  <div class="w-full md:w-2/3 pl-0 md:pl-4 flex flex-col justify-between mt-4 md:mt-0">
                    <div>
                      <h2 class="text-lg font-bold text-gray-800">SUZUKI CIAZ 1.2 GL 2018</h2>
                      <p class="text-sm text-gray-600 mt-2">
                        รถเก๋ง 4 ประตู, เกียร์อัตโนมัติ, 1,200cc น้ำมันเบนซิน
                      </p>
                      <div class="flex items-center mt-2">
                        <p class="text-sm text-gray-500">ฟรีประกันภัย</p>
                        <span class="mx-1">•</span>
                        <p class="text-sm text-gray-500">ใช้น้ำมันพื้นฐาน</p>
                      </div>
                      <div class="flex flex-col items-end mt-4 md:mt-0">
                        <div class="flex items-center space-x-1">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="18" height="18">
                            <path fill="#FFD43B" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                          </svg>

                          <p class="text-sm text-gray-600 ml-1">4.5 (100 รีวิว)</p>
                        </div>
                        <hr className="w-full border-gray-300 my-4" />
                        <div class="flex justify-between w-full ">
                        <div class="flex items-center space-x-1">
                            <Image
                                                        src="/money.svg"
                                                        alt="Logo"
                                                        width={30}
                                                        height={30}
                                                        className="object-cover"
                                                    />
                          <p class="text-sm text-gray-500">ชำระเมื่อจอง หรือโอนผ่านแอป</p>
                          </div>
                          <p class="text-lg font-bold text-blue-600">฿ 1,400</p>
                        </div>
                      </div>
                    </div>
                    <div class="flex justify-end items-end mt-4">
                      <button
                        class="bg-blue-500 text-white py-1 px-3 rounded-md text-sm hover:bg-blue-600"
                      >
                        รายละเอียดรถเช่า
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>




            <div class="bg-gray-200 w-screen h-auto py">
              <div class="max-w-4xl mx-auto px-4">
                <div class="bg-white rounded-lg shadow-md overflow-hidden border p-4 flex flex-col md:flex-row">
                  <div class="w-full md:w-1/3">
                    <img
                      src="https://www.priceusedcar.com/Picture/68295/%E0%B8%82%E0%B8%B2%E0%B8%A2%E0%B8%A3%E0%B8%96%E0%B9%80%E0%B8%81%E0%B9%8B%E0%B8%87%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%AA%E0%B8%AD%E0%B8%87-toyota-%E0%B9%82%E0%B8%95%E0%B9%82%E0%B8%A2%E0%B8%95%E0%B9%89%E0%B8%B2-vios-%E0%B8%A7%E0%B8%B5%E0%B8%AD%E0%B8%AD%E0%B8%AA-%E0%B8%A3%E0%B8%96%E0%B8%9B%E0%B8%B52013-%E0%B8%A3%E0%B8%AB%E0%B8%B1%E0%B8%AA68295-f0520a93.jpg"
                      alt="Car"
                      class="w-full h-48 md:h-full object-cover rounded-md"
                    />
                  </div>
                  <div class="w-full md:w-2/3 pl-0 md:pl-4 flex flex-col justify-between mt-4 md:mt-0">
                    <div>
                      <h2 class="text-lg font-bold text-gray-800">Toyota Vios 1.5 G 2013</h2>
                      <p class="text-sm text-gray-600 mt-2">
                        รถเก๋ง 4 ประตู, เกียร์อัตโนมัติ, 1,200cc น้ำมันเบนซิน
                      </p>
                      <div class="flex items-center mt-2">
                        <p class="text-sm text-gray-500">ฟรีประกันภัย</p>
                        <span class="mx-1">•</span>
                        <p class="text-sm text-gray-500">ใช้น้ำมันพื้นฐาน</p>
                      </div>
                      <div class="flex flex-col items-end mt-4 md:mt-0">
                        <div class="flex items-center space-x-1">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="18" height="18">
                            <path fill="#FFD43B" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                          </svg>

                          <p class="text-sm text-gray-600 ml-1">4.5 (100 รีวิว)</p>
                        </div>
                        <hr className="w-full border-gray-300 my-4" />
                        <div class="flex justify-between w-full">
                        <div class="flex items-center space-x-1">
                            <Image
                                                        src="/money.svg"
                                                        alt="Logo"
                                                        width={30}
                                                        height={30}
                                                        className="object-cover"
                                                    />
                          <p class="text-sm text-gray-500">ชำระเมื่อจอง หรือโอนผ่านแอป</p>
                          </div>
                          
                          
                          <p class="text-lg font-bold text-blue-600">฿ 1,080</p>
                        
                      </div>
                    </div>
                    </div>
                    <div class="flex justify-end items-end mt-4">
                      <button
                        class="bg-blue-500 text-white py-1 px-3 rounded-md text-sm hover:bg-blue-600"
                      >
                        รายละเอียดรถเช่า
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>



            <div class="bg-gray-200 w-screen h-auto py-5">
              <div class="max-w-4xl mx-auto px-4">
                <div class="bg-white rounded-lg shadow-md overflow-hidden border p-4 flex flex-col md:flex-row">
                  <div class="w-full md:w-1/3">
                    <img
                      src="https://www.gurumalist.com/_image.aspx/ogEZWmrkOiJ95n1YahWL0LgR3JTbMkQfodW9aIcZ8R2GXyjOJ_-aZpeTN1wkhhZN/Car"
                      alt="Car"
                      class="w-full h-48 md:h-full object-cover rounded-md"
                    />
                  </div>
                  <div class="w-full md:w-2/3 pl-0 md:pl-4 flex flex-col justify-between mt-4 md:mt-0">
                    <div>
                      <h2 class="text-lg font-bold text-gray-800">Toyota Yaris Ativ 1.2 2023</h2>
                      <p class="text-sm text-gray-600 mt-2">
                        รถเก๋ง 4 ประตู, เกียร์อัตโนมัติ, 1,200cc น้ำมันเบนซิน
                      </p>
                      <div class="flex items-center mt-2">
                        <p class="text-sm text-gray-500">ฟรีประกันภัย</p>
                        <span class="mx-1">•</span>
                        <p class="text-sm text-gray-500">ใช้น้ำมันพื้นฐาน</p>
                      </div>
                      <div class="flex flex-col items-end mt-4 md:mt-0">
                        <div class="flex items-center space-x-1">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="18" height="18">
                            <path fill="#FFD43B" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                          </svg>

                          <p class="text-sm text-gray-600 ml-1">4.5 (100 รีวิว)</p>
                        </div>
                        <hr className="w-full border-gray-300 my-4" />
                        <div class="flex justify-between w-full ">
                          
                          <div class="flex items-center space-x-1">
                            <Image
                                                        src="/money.svg"
                                                        alt="Logo"
                                                        width={30}
                                                        height={30}
                                                        className="object-cover"
                                                    />
                            <p class="text-sm text-gray-500">ชำระเมื่อจอง หรือโอนผ่านแอป</p>
                          </div>
                          
                          <p class="text-lg font-bold text-blue-600">฿ 2,390</p>
                        </div>
                      </div>
                    </div>
                    <div class="flex justify-end items-end mt-4">
                      <button
                        class="bg-blue-500 text-white py-1 px-3 rounded-md text-sm hover:bg-blue-600"
                      >
                        รายละเอียดรถเช่า
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-200 w-screen h-auto py-5">
  <div className="max-w-4xl mx-auto px-4">
    <div className="bg-white rounded-lg shadow-md overflow-hidden border p-4 flex flex-col md:flex-row">
      <div className="w-full md:w-1/3">
        <img
          src="https://www.gurumalist.com/_image.aspx/ogEZWmrkOiJ95n1YahWL0LgR3JTbMkQfodW9aIcZ8R2GXyjOJ_-aZpeTN1wkhhZN/Car"
          alt="Car"
          className="w-full h-48 md:h-full object-cover rounded-md"
        />
      </div>
      <div className="w-full md:w-2/3 pl-0 md:pl-4 flex flex-col justify-between mt-4 md:mt-0">
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
          <div className="flex flex-col items-end mt-4 md:mt-0">
            <div className="flex items-center space-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="18" height="18">
                <path
                  fill="#FFD43B"
                  d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                />
              </svg>
              <p className="text-sm text-gray-600 ml-1">4.5 (100 รีวิว)</p>
            </div>
            {/* แก้ไขให้แท็ก hr เป็น self-closing */}
            <hr className="w-full border-gray-300 my-4" />
            <div className="flex justify-between w-full">
              <div className="flex items-center space-x-1">
                <img
                  src="/money.svg"
                  alt="Logo"
                  className="object-cover"
                  width={30}
                  height={30}
                />
                <p className="text-sm text-gray-500">ชำระเมื่อจอง หรือโอนผ่านแอป</p>
              </div>
              <p className="text-lg font-bold text-blue-600">฿ 2,390</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-end mt-4">
          <button
            className="bg-blue-500 text-white py-1 px-3 rounded-md text-sm hover:bg-blue-600"
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













      </div>



    </div>

  );
}
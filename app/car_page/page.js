"use client";

import Image from 'next/image';
import React, { useState } from "react";
import Navbar from '../components/navbar';

export default function Home() {

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
      <div>
        <Navbar/>
      </div>


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



          <div className="bg-gray-200 w-screen h-auto py-5">
            <div className="max-w-4xl mx-auto px-4">
              <div className="bg-white rounded-lg shadow-md overflow-hidden border p-4 flex flex-col md:flex-row">
                <div className="w-full md:w-1/3">
                  <img
                    src="https://img.kaidee.com/prd/20220929/366882204/m/5352b453-bf01-4f67-9a3c-923aed0d29f0.jpg"
                    alt="Car"
                    className="w-full h-48 md:h-full object-cover rounded-md"
                  />
                </div>
                <div className="w-full md:w-2/3 pl-0 md:pl-4 flex flex-col justify-between mt-4 md:mt-0">
                  <div>
                    <h2 className="text-lg font-bold text-gray-800">TOYOTA YARIS 1.2 G 2014</h2>
                    <p className="text-sm text-gray-600 mt-2">
                      รถเก๋ง 4 ประตู, เกียร์อัตโนมัติ, 1,200cc น้ำมันเบนซิน
                    </p>
                    <div className="flex items-center mt-2">
                    <img
                  src="/car.svg"
                  alt="Logo"
                  className="object-cover"
                  width={20}
                  height={20}
                />
                      <p className="text-sm text-gray-500">ฟรีประกันภัย</p>
                      <span className="mx-1">•</span>
                      <p className="text-sm text-gray-500">1 ขั้นพื้นฐาน</p>
                    </div>
                    <div className="flex flex-col items-end mt-4 md:mt-0">
                      <div className="flex items-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="18" height="18">
                          <path fill="#FFD43B" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                        </svg>

                        <p className="text-sm text-gray-600 ml-1">4.5 (100 รีวิว)</p>
                      </div>
                      <hr className="w-full border-gray-300 my-4" />
                      <div className="flex justify-between w-full ">
                        <div className="flex items-center space-x-1">
                            <Image
                                                        src="/money.svg"
                                                        alt="Logo"
                                                        width={25}
                                                        height={25}
                                                        className="object-cover"
                                                    />
                          <p className="text-sm text-gray-500">ชำระเงินสด หรือ โอนผ่านแอพ</p>
                          </div>
                        <p className="text-lg font-bold text-blue-600">฿ 1,190</p>
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





            <div className="bg-gray-200 w-screen h-auto py-5">
              <div className="max-w-4xl mx-auto px-4">
                <div className="bg-white rounded-lg shadow-md overflow-hidden border p-4 flex flex-col md:flex-row">
                  <div className="w-full md:w-1/3">
                    <img
                      src="https://i.ytimg.com/vi/wm4JTjmHHWA/maxresdefault.jpg"
                      alt="Car"
                      className="w-full h-48 md:h-full object-cover rounded-md"
                    />
                  </div>
                  <div className="w-full md:w-2/3 pl-0 md:pl-4 flex flex-col justify-between mt-4 md:mt-0">
                    <div>
                      <h2 className="text-lg font-bold text-gray-800">HONDA CITY 2020</h2>
                      <p className="text-sm text-gray-600 mt-2">
                        รถเก๋ง 4 ประตู, เกียร์อัตโนมัติ, 1,200cc น้ำมันเบนซิน
                      </p>
                      <div className="flex items-center mt-2">
                      <img
                  src="/car.svg"
                  alt="Logo"
                  className="object-cover"
                  width={20}
                  height={20}
                />
                        <p className="text-sm text-gray-500">ฟรีประกันภัย</p>
                        <span className="mx-1">•</span>
                        <p className="text-sm text-gray-500">1 ขั้นพื้นฐาน</p>
                      </div>
                      <div className="flex flex-col items-end mt-4 md:mt-0">
                        <div className="flex items-center space-x-1">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="18" height="18">
                            <path fill="#FFD43B" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                          </svg>

                          <p className="text-sm text-gray-600 ml-1">4.5 (100 รีวิว)</p>
                        </div>
                        <hr className="w-full border-gray-300 my-4" />
                        <div className="flex justify-between w-full ">
                        <div className="flex items-center space-x-1">
                            <Image
                                                        src="/money.svg"
                                                        alt="Logo"
                                                        width={25}
                                                        height={25}
                                                        className="object-cover"
                                                    />
                          <p className="text-sm text-gray-500">ชำระเงินสด หรือ โอนผ่านแอป</p>
                          </div>
                          <p className="text-lg font-bold text-blue-600">฿ 1,590</p>
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

            <div className="bg-gray-200 w-screen h-auto py-4">
              <div className="max-w-4xl mx-auto px-4">
                <div className="bg-white rounded-lg shadow-md overflow-hidden border p-4 flex flex-col md:flex-row">
                  <div className="w-full md:w-1/3">
                    <img
                      src="https://www.priceusedcar.com/Picture/87554/%E0%B8%82%E0%B8%B2%E0%B8%A2%E0%B8%A3%E0%B8%96%E0%B9%80%E0%B8%81%E0%B9%8B%E0%B8%87%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%AA%E0%B8%AD%E0%B8%87-suzuki-%E0%B8%8B%E0%B8%B9%E0%B8%8B%E0%B8%B9%E0%B8%81%E0%B8%B4-%E0%B8%A3%E0%B8%96%E0%B8%9B%E0%B8%B52018-%E0%B8%A3%E0%B8%AB%E0%B8%B1%E0%B8%AA87554-3e26ef4b.jpg?v=0001"
                      alt="Car"
                      className="w-full h-48 md:h-full object-cover rounded-md"
                    />
                  </div>
                  <div className="w-full md:w-2/3 pl-0 md:pl-4 flex flex-col justify-between mt-4 md:mt-0">
                    <div>
                      <h2 className="text-lg font-bold text-gray-800">SUZUKI CIAZ 1.2 GL 2018</h2>
                      <p className="text-sm text-gray-600 mt-2">
                        รถเก๋ง 4 ประตู, เกียร์อัตโนมัติ, 1,200cc น้ำมันเบนซิน
                      </p>
                      <div className="flex items-center mt-2">
                      <img
                  src="/car.svg"
                  alt="Logo"
                  className="object-cover"
                  width={20}
                  height={20}
                />
                        <p className="text-sm text-gray-500">ฟรีประกันภัย</p>
                        <span className="mx-1">•</span>
                        <p className="text-sm text-gray-500">1 ขั้นพื้นฐาน</p>
                      </div>
                      <div className="flex flex-col items-end mt-4 md:mt-0">
                        <div className="flex items-center space-x-1">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="18" height="18">
                            <path fill="#FFD43B" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                          </svg>

                          <p className="text-sm text-gray-600 ml-1">4.5 (100 รีวิว)</p>
                        </div>
                        <hr className="w-full border-gray-300 my-4" />
                        <div className="flex justify-between w-full ">
                        <div className="flex items-center space-x-1">
                            <Image
                                                        src="/money.svg"
                                                        alt="Logo"
                                                        width={25}
                                                        height={25}
                                                        className="object-cover"
                                                    />
                          <p className="text-sm text-gray-500">ชำระเงินสด หรือ โอนผ่านแอพ</p>
                          </div>
                          <p className="text-lg font-bold text-blue-600">฿ 1,400</p>
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




            <div className="bg-gray-200 w-screen h-auto py">
              <div className="max-w-4xl mx-auto px-4">
                <div className="bg-white rounded-lg shadow-md overflow-hidden border p-4 flex flex-col md:flex-row">
                  <div className="w-full md:w-1/3">
                    <img
                      src="https://www.priceusedcar.com/Picture/68295/%E0%B8%82%E0%B8%B2%E0%B8%A2%E0%B8%A3%E0%B8%96%E0%B9%80%E0%B8%81%E0%B9%8B%E0%B8%87%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%AA%E0%B8%AD%E0%B8%87-toyota-%E0%B9%82%E0%B8%95%E0%B9%82%E0%B8%A2%E0%B8%95%E0%B9%89%E0%B8%B2-vios-%E0%B8%A7%E0%B8%B5%E0%B8%AD%E0%B8%AD%E0%B8%AA-%E0%B8%A3%E0%B8%96%E0%B8%9B%E0%B8%B52013-%E0%B8%A3%E0%B8%AB%E0%B8%B1%E0%B8%AA68295-f0520a93.jpg"
                      alt="Car"
                      className="w-full h-48 md:h-full object-cover rounded-md"
                    />
                  </div>
                  <div className="w-full md:w-2/3 pl-0 md:pl-4 flex flex-col justify-between mt-4 md:mt-0">
                    <div>
                      <h2 className="text-lg font-bold text-gray-800">Toyota Vios 1.5 G 2013</h2>
                      <p className="text-sm text-gray-600 mt-2">
                        รถเก๋ง 4 ประตู, เกียร์อัตโนมัติ, 1,200cc น้ำมันเบนซิน
                      </p>
                      <div className="flex items-center mt-2">
                      <img
                  src="/car.svg"
                  alt="Logo"
                  className="object-cover"
                  width={20}
                  height={20}
                />
                        <p className="text-sm text-gray-500">ฟรีประกันภัย</p>
                        <span className="mx-1">•</span>
                        <p className="text-sm text-gray-500">1 ขั้นพื้นฐาน</p>
                      </div>
                      <div className="flex flex-col items-end mt-4 md:mt-0">
                        <div className="flex items-center space-x-1">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="18" height="18">
                            <path fill="#FFD43B" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                          </svg>

                          <p className="text-sm text-gray-600 ml-1">4.5 (100 รีวิว)</p>
                        </div>
                        <hr className="w-full border-gray-300 my-4" />
                        <div className="flex justify-between w-full">
                        <div className="flex items-center space-x-1">
                            <Image
                                                        src="/money.svg"
                                                        alt="Logo"
                                                        width={25}
                                                        height={25}
                                                        className="object-cover"
                                                    />
                          <p className="text-sm text-gray-500">ชำระเงินสด หรือ โอนผ่านแอป</p>
                          </div>
                          
                          
                          <p className="text-lg font-bold text-blue-600">฿ 1,080</p>
                        
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
                      <img
                  src="/car.svg"
                  alt="Logo"
                  className="object-cover"
                  width={20}
                  height={20}
                />
                        <p className="text-sm text-gray-500">ฟรีประกันภัย</p>
                        <span className="mx-1">•</span>
                        <p className="text-sm text-gray-500">1 ขั้นพื้นฐาน</p>
                      </div>
                      <div className="flex flex-col items-end mt-4 md:mt-0">
                        <div className="flex items-center space-x-1">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="18" height="18">
                            <path fill="#FFD43B" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                          </svg>

                          <p className="text-sm text-gray-600 ml-1">4.5 (100 รีวิว)</p>
                        </div>
                        <hr className="w-full border-gray-300 my-4" />
                        <div className="flex justify-between w-full ">
                          
                          <div className="flex items-center space-x-1">
                            <Image
                                                        src="/money.svg"
                                                        alt="Logo"
                                                        width={25}
                                                        height={25}
                                                        className="object-cover"
                                                    />
                            <p className="text-sm text-gray-500">ชำระเงินสด หรือ โอนผ่านแอพ</p>
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
            <img src="/car.svg" alt="Logo" className="object-cover" width={20} height={20} />
            <p className="text-sm text-gray-500">ฟรีประกันภัย</p>
            <span className="mx-1">•</span>
            <p className="text-sm text-gray-500">1 ขั้นพื้นฐาน</p>
          </div>
          <div className="flex flex-col items-end mt-2">
            <div className="flex items-center space-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="18" height="18">
                <path fill="#FFD43B" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
              </svg>
              <p className="text-sm text-gray-600 ml-1">4.5 (100 รีวิว)</p>
            </div>
            <hr className="w-full border-gray-300 my-2" />
            <div className="flex justify-between w-full">
              <div className="flex items-center space-x-1">
                <img src="/money.svg" alt="Logo" className="object-cover" width={25} height={25} />
                <p className="text-sm text-gray-500">ชำระเงินสด หรือ โอนผ่านแอพ</p>
              </div>
              <p className="text-lg font-bold text-blue-600">฿ 2,390</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-end mt-2">
          <button className="bg-blue-500 text-white py-1 px-3 rounded-md text-sm hover:bg-blue-600">
            รายละเอียดรถเช่า
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

<footer className="bg-gray-800 text-white py-8 mt-10 flex items-center">
  <div className="ml-auto grid grid-cols-1 md:grid-cols-4 gap-4">
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
    {/* Footer sections */}
  
</footer>


          </div>
        </div>
        

      </div>
    </div>

  );
}
"use client";
 
import Image from 'next/image';
import React, { useState } from "react";
import Navbar from '../components/navbar';
import Search from '../components/search';
import Footer from '../components/footer';
 
export default function Carpage() {
 
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
        <Navbar />
      </div>
 
      <div>
        <Search />
      </div>
      <div className="container mx-auto px-24 py-6">
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
                    <h2 className="text-base font-bold text-gray-800">TOYOTA YARIS 1.2 G 2014</h2>
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
                      className="bg-blue-500 text-white py-2 px-3 rounded-md text-sm hover:bg-blue-600"
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
                      <h2 className="text-base font-bold text-gray-800">HONDA CITY 2020</h2>
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
                        className="bg-blue-500 text-white py-2 px-3 rounded-md text-sm hover:bg-blue-600"
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
                      <h2 className="text-base font-bold text-gray-800">SUZUKI CIAZ 1.2 GL 2018</h2>
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
                        className="bg-blue-500 text-white py-2 px-3 rounded-md text-sm hover:bg-blue-600"
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
                      <h2 className="text-base font-bold text-gray-800">Toyota Vios 1.5 G 2013</h2>
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
                        className="bg-blue-500 text-white py-2 px-3 rounded-md text-sm hover:bg-blue-600"
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
                      <h2 className="text-base font-bold text-gray-800">Toyota Yaris Ativ 1.2 2023</h2>
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
                        className="bg-blue-500 text-white py-2 px-3 rounded-md text-sm hover:bg-blue-600"
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
                      <h2 className="text-base font-bold text-gray-800">Toyota Yaris Ativ 1.2 2023</h2>
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
                      <button className="bg-blue-500 text-white py-2 px-3 rounded-md text-sm hover:bg-blue-600">
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
      <div>
        <Footer />
      </div>
    </div>
  );
}
"use client";

import Image from 'next/image';
import React, { useState, useEffect } from "react";

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

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    const data = [
        {
            location: "นครศรีธรรมราช",
            service: "บริษัทรถเช่าที่ให้บริการ",
            smallCarPrice: 595,
            bigCarPrice: 1229,
            image: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQiNkafFJbpZGh5mbBBucJzbmRoCXWa_g_0r_WWXJ0RJZrkoNp0podahQQTPwLdCxqHIXtgdyi60aWKf7u7rPG0Nk6xAkxeJsZRzla9PG0",
        },
        {
            location: "อุบลราชธานี",
            service: "บริษัทรถเช่าที่ให้บริการ",
            smallCarPrice: 750,
            bigCarPrice: 959,
            image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTxhDE3Ken_mXv-zBKHD6pyavg2x1SBsjNkvjhK_sXq7LxKl5kHSkOV3HheVKS9aGx9yoGp8ocnvzAXagAzSnJdHuOIBlbRq6gxKpWhnA",
        },
        {
            location: "อุดรธานี",
            service: "บริษัทรถเช่าที่ให้บริการ",
            smallCarPrice: 799,
            bigCarPrice: 959,
            image: "https://lh3.googleusercontent.com/gps-cs-s/APrbqlV8SstPsochwKVjCgs8invHkM0EkoZ38FGeR8Pl7SdPEWAmPc4ZSW_0XINySCvYjiNEIqK_V1LTXrcx0qXeqXTr32YCijwCB4y7o4qyOXLnQemvGXY5tYmZ4d3ze58uXt4ISKw=w675-h390-n-k-no",
        },
        {
            location: "เชียงใหม่",
            service: "บริษัทรถเช่าที่ให้บริการ",
            smallCarPrice: 650,
            bigCarPrice: 1200,
            image: "https://via.placeholder.com/300x200?text=เชียงใหม่",
        },
        {
            location: "ภูเก็ต",
            service: "บริษัทรถเช่าที่ให้บริการ",
            smallCarPrice: 700,
            bigCarPrice: 1100,
            image: "https://via.placeholder.com/300x200?text=ภูเก็ต",
        },
    ];

    // คำนวณรายการที่จะแสดงในหน้าแต่ละหน้า
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const regions = [
        {
            name: "ภาคกลาง",
            places: ["กรุงเทพมหานคร", "นนทบุรี", "นครปฐม", "ปทุมธานี", "พิษณุโลก", "สมุทรปราการ", "อยุธยา"],
            image: "https://s359.kapook.com//pagebuilder/c258ffbb-c1e1-4830-998f-a2ef343cb480.jpg",
        },
        {
            name: "ภาคเหนือ",
            places: ["เชียงใหม่", "สนามบินเชียงใหม่", "เชียงราย", "สนามบินเชียงราย", "น่าน", "ลำปาง", "พะเยา"],
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Intanon_03.jpg/800px-Intanon_03.jpg",
        },
        {
            name: "ภาคใต้",
            places: ["ภูเก็ต", "กระบี่", "สุราษฎร์ธานี", "นครศรีธรรมราช", "หาดใหญ่", "ตรัง", "สตูล"],
            image: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/33000/33610-Angthong-National-Park.jpg",
        },
        {
            name: "ภาคตะวันออก",
            places: ["ชลบุรี", "ระยอง", "จันทบุรี", "ตราด", "พัทยา", "ปราจีนบุรี", "สระแก้ว"],
            image: "https://s359.kapook.com/r/600/auto/pagebuilder/77ddc683-1f23-4ff4-9892-1ec6ea9208dd.jpg",
        },
        {
            name: "ภาคอีสาน",
            places: ["ขอนแก่น", "อุดรธานี", "โคราช", "มหาสารคาม", "ร้อยเอ็ด", "บุรีรัมย์", "สุรินทร์"],
            image: "https://s359.kapook.com/pagebuilder/5403c92f-e77b-4f3e-8ba2-bda993eeef48.jpg",
        },
        {
            name: "ภาคตะวันตก",
            places: ["กาญจนบุรี", "ราชบุรี", "เพชรบุรี", "ประจวบคีรีขันธ์", "หัวหิน", "สมุทรสาคร", "นครปฐม"],
            image: "https://cms.kapook.com/uploads/tag/10/ID_9502_58196d09bc8bd.jpg",
        },
    ];

    const [expandedRegions, setExpandedRegions] = useState({});

    const toggleRegion = (regionName) => {
        setExpandedRegions((prevState) => ({
            ...prevState,
            [regionName]: !prevState[regionName],
        }));
    };

    // State สำหรับวันเวลารับรถและคืนรถ
    const [pickupDate, setPickupDate] = useState('');
    const [returnDate, setReturnDate] = useState('');

    // ฟังก์ชันที่จะตั้งค่า default values ของ pickup และ return
    useEffect(() => {
        const now = new Date();
        const defaultPickup = new Date(now.getTime() + 24 * 60 * 60 * 1000).toISOString().slice(0, 16);
        const defaultReturn = new Date(now.getTime() + 48 * 60 * 60 * 1000).toISOString().slice(0, 16);

        setPickupDate(defaultPickup);
        setReturnDate(defaultReturn);
    }, []);

    // ตรวจสอบและอัปเดตวันที่คืนรถถ้ามีการเปลี่ยนแปลง
    const handlePickupChange = (e) => {
        const newPickupDate = new Date(e.target.value);
        const newReturnDate = new Date(returnDate);

        if (newPickupDate >= newReturnDate) {
            const adjustedReturnDate = new Date(newPickupDate.getTime() + 24 * 60 * 60 * 1000);
            setReturnDate(adjustedReturnDate.toISOString().slice(0, 16));
        }
        setPickupDate(e.target.value);
    };

    const handleReturnChange = (e) => {
        const newPickupDate = new Date(pickupDate);
        const newReturnDate = new Date(e.target.value);

        if (newReturnDate <= newPickupDate) {
            alert('วัน-เวลาคืนรถต้องหลังจากวัน-เวลารับรถ');
            const adjustedReturnDate = new Date(newPickupDate.getTime() + 24 * 60 * 60 * 1000);
            setReturnDate(adjustedReturnDate.toISOString().slice(0, 16));
        } else {
            setReturnDate(e.target.value);
        }
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
                        <div className="bg-white p-4 rounded shadow-md flex space-x-4">
                            {/* กล่องเลือกจังหวัด */}
                            <div
                                className={`bg-gray-100 p-2 rounded shadow-md w-[35%] ${isBox1Focused ? "ring-2 ring-blue-500" : ""}`}
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

                            {/* กล่องวันเวลารับคืน */}
                            <div
                                className={`bg-gray-100 p-2 rounded shadow-md w-[55%] ${isBox2Focused ? "ring-2 ring-blue-500" : ""}`}
                                onFocus={() => setIsBox2Focused(true)}
                                onBlur={() => setIsBox2Focused(false)}
                                tabIndex={-1}
                            >
                                <div className="flex items-center mb-2 space-x-4">
                                    <div className="flex flex-col w-1/2">
                                        <label htmlFor="pickup" className="text-[10px] text-gray-600 mb-1">วัน-เวลารับรถ</label>
                                        <input
                                            type="datetime-local"
                                            id="pickup"
                                            name="pickup"
                                            className="text-[10px] p-2 border border-gray-300 rounded-md focus:outline-none"
                                            value={pickupDate}
                                            onChange={handlePickupChange}
                                        />
                                    </div>

                                    <div className="text-2xl text-yellow-500 mx-2">&#8594;</div>

                                    <div className="flex flex-col w-1/2">
                                        <label htmlFor="return" className="text-[10px] text-gray-600 mb-1">วัน-เวลาคืนรถ</label>
                                        <input
                                            type="datetime-local"
                                            id="return"
                                            name="return"
                                            className="text-[10px] p-2 border border-gray-300 rounded-md focus:outline-none"
                                            value={returnDate}
                                            onChange={handleReturnChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* ปุ่มค้นหารถเช่า */}
                            <div className="flex items-center">
                                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-md text-[10px] whitespace-nowrap transition transform duration-300 hover:scale-105">
                                    ค้นหารถเช่า
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
                    <div className="flex overflow-x-auto space-x-3">
                        {currentItems.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-md overflow-hidden w-48 hover:shadow-lg transition-shadow"
                            >
                                <Image
                                    src={item.image}
                                    alt={item.location}
                                    width={200}
                                    height={120}
                                    className="object-cover"
                                    unoptimized
                                />
                                <div className="p-2">
                                    <h3 className="text-[12px] font-bold text-gray-800 truncate">
                                        {item.location}
                                    </h3>
                                    <p className="text-gray-500 text-[10px] truncate">{item.service}</p>
                                    <div className="mt-2">
                                        <div className="flex items-center justify-between text-xs">
                                            <span className="bg-orange-500 text-white rounded px-1 py-0.5 text-[10px] mr-1">
                                                รถเช่าท้องถิ่น
                                            </span>
                                            <span>{item.smallCarPrice} บาท/วัน</span>
                                        </div>
                                        <div className="flex items-center justify-between text-xs mt-1">
                                            <span className="bg-blue-500 text-white rounded px-1 py-0.5 text-[10px] mr-1">
                                                รถเช่ารายใหญ่
                                            </span>
                                            <span>{item.bigCarPrice} บาท/วัน</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-4 space-x-2">
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageChange(index + 1)}
                            className={`px-3 py-1 rounded ${currentPage === index + 1
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200 text-gray-700"
                                }`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-4 py-6">
                <h1 className="text-base font-bold text-gray-800 mb-2">
                    เช่ารถกับไดรฟ์เฟลกซ์
                </h1>
                <p className="text-sm font-bold text-gray-400 mb-4 ">
                    เช่ารถกับเราดียังไง
                </p>
                <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col justify-between">
                        <p className="text-[14px] font-bold text-grain-h-fuly-800">ไม่มีบัตรเครดิตก็เช่าได้</p>
                        <p className="text-[12px] text-gray-500">แค่ใช้เอกสารยืนยันเท่านั้น</p>
                    </div>
                    <div className="flex flex-col justify-between">
                        <p className="text-[14px] font-bold text-gray-800">เจ้าหน้าที่ดูแล</p>
                        <p className="text-[12px] text-gray-500">มีเจ้าหน้าที่ดูแลตลอดการเช่า</p>
                    </div>
                    <div className="flex flex-col justify-between">
                        <p className="text-[14px] font-bold text-gray-800">เปรียบเทียบราคา</p>
                        <p className="text-[12px] text-gray-500">เทียบราคารถเช่าทุกร้านได้ทันที</p>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 py-10">
                <div className="container mx-auto px-4">
                    <div className="mb-6">
                        <h1 className="text-2xl font-bold text-gray-800">เช่ารถตามภูมิภาค</h1>
                        <p className="text-gray-500">รวมรถเช่าจากบริษัทรถเช่าทั่วประเทศ</p>
                    </div>

                    {/* Region Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {regions.map((region, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow max-w-sm w-full"
                            >
                                <Image
                                    src={region.image}
                                    alt={region.name}
                                    width={300}
                                    height={50}
                                    className="object-cover"
                                    unoptimized
                                />
                                <div className="p-3">
                                    <h3 className="text-sm font-semibold text-gray-800">{region.name}</h3>
                                    <ul className="mt-2 space-y-1">
                                        {region.places.slice(0, 5).map((place, idx) => (
                                            <li key={idx} className="text-xs text-gray-600">
                                                {place}
                                            </li>
                                        ))}

                                        {/*  (ถ้ามีการกดดูเพิ่มเติม) */}
                                        {expandedRegions[region.name] &&
                                            region.places.slice(5).map((place, idx) => (
                                                <li key={idx} className="text-xs text-gray-600">
                                                    {place}
                                                </li>
                                            ))}
                                    </ul>
                                    {/* ปุ่ม "ดูเพิ่มเติม" */}
                                    <button
                                        onClick={() => toggleRegion(region.name)}
                                        className="mt-3 text-xs text-blue-600 hover:text-blue-800"
                                    >
                                        {expandedRegions[region.name] ? 'ย่อ' : 'ดูเพิ่มเติม'}
                                    </button>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='bg-blue-100'>
                <div className="container mx-auto px-4 pt-6">
                    <p>ตรวจสอบการจองของคุณ</p>
                    <div className="flex items-center space-x-4 pt-4"> {/* Flexbox สำหรับจัดเรียงในแถวเดียว */}
                        <input
                            type="text"
                            placeholder="* กรอกหมายเลขการจอง"
                            className="border border-gray-300 rounded mb-6 px-3 py-2 text-gray-700 focus:outline-none text-[10px] w-80"
                        />
                        <input
                            type="text"
                            placeholder="* กรอกนามสกุล"
                            className="border border-gray-300 rounded mb-6 px-3 py-2 text-gray-700 focus:outline-none text-[10px] w-80"
                        />
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-12 mb-6 rounded text-xs">
                            ปุ่ม
                        </button>
                    </div>
                </div>
            </div>



        </div>

    );
}

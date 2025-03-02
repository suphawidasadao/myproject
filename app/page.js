"use client";

import Image from 'next/image';
import React, { useState, useEffect } from "react";
import Navbar from './components/navbar';
import Search from './components/search';
import Footer from './components/footer';
import { useSession } from "next-auth/react";

export default function Home() {

    const { data: session } = useSession();
      console.log(session);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

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
            image: "https://travel.mthai.com/app/uploads/2018/09/udonthani-1.jpg",
        },
        {
            location: "เชียงใหม่",
            service: "บริษัทรถเช่าที่ให้บริการ",
            smallCarPrice: 650,
            bigCarPrice: 1200,
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/At_the_Top.jpg/1200px-At_the_Top.jpg",
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
            <div>
                <Navbar session={session}/>
            </div>

            <div className="relative w-full h-[400px]">
                <Image
                    src="/bg.svg"
                    alt="Logo"
                    layout="fill"
                    objectFit="cover"
                />
                <div>
                    <Search />
                </div>
            </div>
            <div className='bg-gray-100'>
                <div className="container mx-auto px-24 py-6">
                    <h1 className="text-xl font-bold text-gray-800 mb-4">
                        รถเช่าราคาพิเศษ
                    </h1>
                    <div className="flex justify-center">
                        <div className="flex overflow-x-auto space-x-3">
                            {currentItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-lg shadow-md overflow-hidden w-72 hover:shadow-lg transition-shadow"
                                >
                                    <div className="relative w-full h-40">
                                        <Image
                                            src={item.image}
                                            alt={item.location}
                                            layout="fill"
                                            objectFit="cover"
                                            unoptimized
                                        />
                                    </div>

                                    <div className="p-2">
                                        <h3 className="text-[14px] font-bold text-gray-800 truncate">
                                            {item.location}
                                        </h3>
                                        <p className="text-gray-500 text-[12px] truncate">{item.service}</p>
                                        <div className="mt-2">
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="bg-orange-500 text-white rounded px-1 py-0.5 text-[10px] mr-1 flex justify-between">
                                                    <svg width="16" height="20" className='mr-1' viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 7.5H1.81944M1.81944 7.5H7.55556M1.81944 7.5V3.28511M8.375 7.5H7.55556M7.55556 7.5V3.28511M1.81944 3.28511C1.80412 3.27736 1.78909 3.26917 1.77437 3.26056L1.55312 3.13056C1.39672 3.03861 1.28094 2.90205 1.22521 2.74379C1.16949 2.58553 1.1772 2.4152 1.24706 2.26136L1.61335 1.45392C1.67419 1.31991 1.77919 1.20504 1.91481 1.12414C2.05043 1.04323 2.21044 0.99999 2.37421 1H7.00079C7.16456 0.99999 7.32457 1.04323 7.46019 1.12414C7.59581 1.20504 7.70081 1.31991 7.76165 1.45392L8.12794 2.26136C8.1978 2.4152 8.20551 2.58553 8.14979 2.74379C8.09406 2.90205 7.97828 3.03861 7.82187 3.13056L7.60063 3.26056C7.58591 3.26917 7.57087 3.27736 7.55556 3.28511M1.81944 3.28511C1.9518 3.35249 2.10291 3.38589 2.25568 3.38155C2.40845 3.37722 2.5568 3.3353 2.68396 3.26056L3.45833 2.80556L4.23271 3.26056C4.36737 3.33974 4.52562 3.382 4.6875 3.382C4.84938 3.382 5.00763 3.33974 5.14229 3.26056L5.91667 2.80556L6.69104 3.26056C6.8182 3.3353 6.96655 3.37722 7.11932 3.38155C7.27209 3.38589 7.4232 3.35249 7.55556 3.28511" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M5.50693 7.50001V5.69445C5.50693 5.50291 5.4206 5.31921 5.26692 5.18376C5.11325 5.04832 4.90482 4.97223 4.68749 4.97223C4.47016 4.97223 4.26173 5.04832 4.10805 5.18376C3.95438 5.31921 3.86804 5.50291 3.86804 5.69445V7.50001" stroke="white" />
                                                    </svg>
                                                    <p className='text-[10px]'>รถเช่าท้องถิ่น</p>
                                                </span>
                                                <span>
                                                    {item.smallCarPrice}
                                                    <span className="text-[12px] text-gray-600"> บาท/วัน</span>
                                                </span>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center mt-4 space-x-1">
                        {Array.from({ length: totalPages }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handlePageChange(index + 1)}
                                className={`px-2 py-1 rounded text-[10px] ${currentPage === index + 1
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-200 text-gray-700"
                                    }`}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-24 py-6">
                <h1 className="text-xl font-bold text-gray-800 mb-2">
                    เช่ารถกับไดรฟ์เฟลกซ์
                </h1>
                <p className="text-base text-gray-400 mb-4 ">
                    เช่ารถกับเราดียังไง
                </p>
                <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col justify-between">
                        <Image
                            src="/creditcard.svg"
                            alt="logo"
                            width={40}
                            height={40}
                            className="object-cover mb-2"
                        />
                        <p className="text-[16px] text-grain-h-fuly-800">ไม่มีบัตรเครดิตก็เช่าได้</p>
                        <p className="text-[12px] text-gray-500 tracking-wider">แค่ใช้เอกสารยืนยันเท่านั้น</p>
                    </div>
                    <div className="flex flex-col justify-between">
                        <Image
                            src="/officer.svg"
                            alt="logo"
                            width={40}
                            height={40}
                            className="object-cover mb-2"
                        />
                        <p className="text-[16px] text-gray-800">เจ้าหน้าที่ดูแล</p>
                        <p className="text-[12px] text-gray-500 tracking-wider">มีเจ้าหน้าที่ดูแลตลอดการเช่า</p>
                    </div>
                    <div className="flex flex-col justify-between">
                        <Image
                            src="/price.svg"
                            alt="logo"
                            width={35}
                            height={35}
                            className="object-cover mb-2"
                        />
                        <p className="text-[16px] text-gray-800">เปรียบเทียบราคา</p>
                        <p className="text-[12px] text-gray-500 tracking-wider">เทียบราคารถเช่าทุกร้านได้ทันที</p>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 py-10">
                <div className="container mx-auto px-24">
                    <div className="mb-6">
                        <h1 className="text-xl font-bold text-gray-800">เช่ารถตามภูมิภาค</h1>
                        <p className="text-gray-500 text-base">รวมรถเช่าจากบริษัทรถเช่าทั่วประเทศ</p>
                    </div>

                    {/* Region Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {regions.map((region, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow max-w-sm w-full"
                            >
                                <div className="relative w-full h-28">
                                    <Image
                                        src={region.image}
                                        alt={region.name}
                                        layout="fill"
                                        className="object-cover"
                                        unoptimized
                                    />
                                </div>
                                <div className="p-3">
                                    <h3 className="text-base font-semibold text-gray-800">{region.name}</h3>
                                    <ul className="mt-2 space-y-1">
                                        {region.places.slice(0, 5).map((place, idx) => (
                                            <li
                                                key={idx}
                                                onClick={() => router.push(`/search?province=${place}`)} // เปลี่ยนเส้นทางไปหน้าค้นหา
                                                className="text-sm text-gray-600 cursor-pointer hover:text-blue-600 transition-colors"
                                            >
                                                {place}
                                            </li>
                                        ))}

                                        {/* (ถ้ามีการกดดูเพิ่มเติม) */}
                                        {expandedRegions[region.name] &&
                                            region.places.slice(5).map((place, idx) => (
                                                <li
                                                    key={idx}
                                                    onClick={() => router.push(`/search?province=${place}`)} // เปลี่ยนเส้นทางไปหน้าค้นหา
                                                    className="text-sm text-gray-600 cursor-pointer hover:text-blue-600 transition-colors"
                                                >
                                                    {place}
                                                </li>
                                            ))}
                                    </ul>
                                    {/* ปุ่ม "ดูเพิ่มเติม" */}
                                    <button
                                        onClick={() => toggleRegion(region.name)}
                                        className="mt-3 text-sm text-blue-600 hover:text-blue-800"
                                    >
                                        {expandedRegions[region.name] ? 'ย่อ' : 'ดูเพิ่มเติม'}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>

    );
}

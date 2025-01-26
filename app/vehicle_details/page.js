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
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold mb-4">Toyota Yaris ATIV 2023</h1>

                {/* Images */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                <img
                            src="https://search.drivehub.com/_next/image?url=https%3A%2F%2Fdrivehubv3.s3-ap-southeast-1.amazonaws.com%2Fcars%2Fa03377b0-5d57-44c4-b3c4-cf92ca5d3a96%2Fphotos%2F1b2720c8-39ac-434c-9917-4fd450ebc664%2Flarge.png&w=3840&q=100"
                            alt="Car"
                            className="w-1/3 rounded-md"
                        />
                <img
                            src="https://search.drivehub.com/_next/image?url=https%3A%2F%2Fdrivehubv3.s3-ap-southeast-1.amazonaws.com%2Fcars%2Fa03377b0-5d57-44c4-b3c4-cf92ca5d3a96%2Fphotos%2F7c3de337-9297-42a1-a350-977a1a9d20a2%2Flarge.png&w=3840&q=100"
                            alt="Car"
                            className="w-1/3 rounded-md"
                        />
                <img
                            src="https://search.drivehub.com/_next/image?url=https%3A%2F%2Fdrivehubv3.s3-ap-southeast-1.amazonaws.com%2Fcars%2Fa03377b0-5d57-44c4-b3c4-cf92ca5d3a96%2Fphotos%2F2ba7ee84-0494-4249-bf4e-94befaa17854%2Flarge.png&w=3840&q=100"
                            alt="Car"
                            className="w-1/3 rounded-md"
                        />
                <img
                            src="https://search.drivehub.com/_next/image?url=https%3A%2F%2Fdrivehubv3.s3-ap-southeast-1.amazonaws.com%2Fcars%2Fa03377b0-5d57-44c4-b3c4-cf92ca5d3a96%2Fphotos%2F896856af-855c-49b7-bf9e-e75e260df9e3%2Flarge.png&w=3840&q=100"
                            alt="Car"
                            className="w-1/3 rounded-md"
                        />
                <img
                            src="https://search.drivehub.com/_next/image?url=https%3A%2F%2Fdrivehubv3.s3-ap-southeast-1.amazonaws.com%2Fcars%2Fa03377b0-5d57-44c4-b3c4-cf92ca5d3a96%2Fphotos%2F2f31754d-624d-4541-9374-b0ade7738789%2Flarge.png&w=3840&q=100"
                            alt="Car"
                            className="w-1/3 rounded-md"
                        />
                </div>

                {/* Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-xl font-semibold mb-2">ข้อมูลรถ</h2>
                        <ul className="list-disc list-inside">
                            <li>ระบบเกียร์: อัตโนมัติ</li>
                            <li>ประเภทเครื่องยนต์: เบนซิน</li>
                            <li>ขนาดเครื่องยนต์: 1200 cc</li>
                            <li>จำนวนที่นั่ง: 4 ที่นั่ง</li>
                            <li>จำนวนประตู: 4 ประตู</li>
                            <li>กระเป๋าเดินทาง: 2-3 ใบ</li>
                        </ul>

                        <div className="mt-4">
                            <h3 className="font-medium">อุปกรณ์ความบันเทิง</h3>
                            <ul className="list-disc list-inside">
                                <li>Android Auto</li>
                                <li>Apple CarPlay</li>
                                <li>USB</li>
                                <li>Bluetooth</li>
                            </ul>
                        </div>

                        <div className="mt-4">
                            <h3 className="font-medium">อุปกรณ์ด้านความปลอดภัย</h3>
                            <ul className="list-disc list-inside">
                                <li>ระบบเตือนเมื่อเปลี่ยนเลน</li>
                                <li>ระบบเตือนจุดอับสายตา</li>
                                <li>ระบบเบรกฉุกเฉิน</li>
                                <li>Cruise Control</li>
                            </ul>
                        </div>

                        <div className="mt-4">
                            <h3 className="font-medium">อุปกรณ์ภายใน</h3>
                            <ul className="list-disc list-inside">
                                <li>พวงมาลัยหนัง</li>
                                <li>เบาะหนัง</li>
                            </ul>
                        </div>
                    </div>

                    {/* Price Section */}
                    <div className="bg-gray-100 p-4 rounded shadow-md">
                        <h2 className="text-xl font-semibold mb-4">ราคาและรายละเอียด</h2>
                        <p>ค่าเช่า 2 วัน: <span className="font-bold">฿2,300</span></p>
                        <p>รวมประกันพื้นฐาน</p>
                        <p className="mt-2">ค่ามัดจำ: <span className="font-bold">฿2,500</span></p>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">เช่ารถคันนี้</button>
                    </div>
                </div>

                {/* Reviews Section */}
                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-4">รีวิวร้านค้า</h2>
                    <div className="bg-gray-100 p-4 rounded shadow-md">
                        <div className="flex items-center mb-4">
                            <Image src="/reviewer.jpg" alt="Reviewer" width={50} height={50} className="rounded-full" />
                            <div className="ml-4">
                                <p className="font-bold">BPJ Car Rental</p>
                                <p className="text-sm text-gray-600">สาขาพหลโยธิน</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p>คะแนนรีวิวโดยรวม</p>
                                <p className="font-bold text-2xl">4.9</p>
                            </div>
                            <div>
                                <p>ความสะอาดของรถ</p>
                                <p className="font-bold text-xl">5.0</p>
                            </div>
                        </div>

                        <div className="mt-4">
                            <p className="text-gray-600 text-sm">ไม่ใช่เรื่องดีเลิศอะไรมาก แต่คุณภาพถือว่าดีเยี่ยม</p>
                        </div>
                    </div>
                </div>

                {/* Shop Info Section */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">ข้อมูลร้านค้า</h2>
                    <p className="mb-2">
                        <strong>เวลาทำการ:</strong> จันทร์-อาทิตย์ 08:00 - 20:00
                    </p>
                    <div className="mb-2">
                        <strong>เงื่อนไขเวลารับ-คืนรถ:</strong>
                        <ul className="list-disc ml-6">
                            <li>เวลารับรถ 09:00 - 17:59 ค่าบริการ 8,000 บาท</li>
                            <li>เวลาคืนรถ 20:00 - 23:59 ค่าบริการ 840 บาท/ชั่วโมง</li>
                        </ul>
                    </div>
                    <p className="mb-2">
                        <strong>จุดรับรถ:</strong> พื้นที่รับส่ง
                                                เซ็นทรัล ลาดพร้าว: ค่าส่ง-รับรถ 200 บาท (ต่อเที่ยว)
                                                MRT ลาดพร้าว: ค่าส่ง-รับรถ 100 บาท (ต่อเที่ยว)
                                                เซ็นทรัล ปิ่นเกล้า: ค่าส่งรถ 500 บาท, ค่ารับรถ 300 บาท
                                                สุขุมวิท 13 (ใกล้ BTS นานา): ค่าส่งรถ 300 บาท, ค่ารับรถ 200 บาท
                                                BTS อ่อนนุช: ค่าส่งรถ 300 บาท, ค่ารับรถ 200 บาท
                                                สนามบินดอนเมือง: ค่าส่ง-รับรถ 100 บาท (ต่อเที่ยว)
                                                สถานีรถไฟ หัวลำโพง: ค่าส่งรถ 300 บาท, ค่ารับรถ 200 บาท
                                                ลาดพร้าว 122 (ซ.มหาดไทย): ค่าส่ง-รับรถ 300 บาท (ต่อเที่ยว)
                                                กรุงเทพกรีฑา: ค่าส่งรถ 400 บาท, ค่ารับรถ 300 บาท
                                                แยกติวานนท์: ค่าส่ง-รับรถฟรีวงเวียนพระราม 5: ค่าส่ง-รับรถ 50 บาท (ต่อเที่ยว)
                                                MRT ศูนย์ราชการนนทบุรี: ค่าส่ง-รับรถฟรี
                                                สำนักงานสลากกินแบ่งรัฐบาล: ค่าส่ง-รับรถฟรีโรบินสัน 
                                                ศรีสมาน: ค่าส่งรถ 300 บาท, ค่ารับรถ 200 บาท
                                                เดอะมอลล์ งามวงศ์วาน: ค่าส่ง-รับรถฟรี
                                                เซ็นทรัล รัตนาธิเบศร์: ค่าส่ง-รับรถ 50 บาท (ต่อเที่ยว)
                                                เตาปูน: ค่าส่ง-รับรถ 50 บาท (ต่อเที่ยว)
                                                ถนน เพชรบุรี: ค่าส่ง-รับรถ 200 บาท (ต่อเที่ยว)
                                                เซ็นทรัล บางนา: ค่าส่งรถ 400 บาท, ค่ารับรถ 300 บาทBTS 
                                                เอกมัย: ค่าส่ง-รับรถ 200 บาท (ต่อเที่ยว)
                                                วงเวียนใหญ่: ค่าส่ง-รับรถ 350 บาท (ต่อเที่ยว)
                                                เมืองทองธานี: ค่าส่งรถ 100 บาท, ค่ารับรถ 50 บาท
                                                ลาดกระบัง: ค่าส่ง-รับรถ 500 บาท (ต่อเที่ยว)
                                                หทัยราษฎร์: ค่าส่ง-รับรถ 300 บาท (ต่อเที่ยว)
                                                BTS หมอชิต: ค่าส่งรถ 200 บาท, ค่ารับรถ 100 บาทBTS 
                                                วุฒากาศ: ค่าส่ง-รับรถ 500 บาท (ต่อเที่ยว)
                                                ถนน เทพารักษ์: ค่าส่งรถ 500 บาท, ค่ารับรถ 300 บาท
                                                เมกา บางนา: ค่าส่งรถ 500 บาท, ค่ารับรถ 300 บาท
                                                โลตัส นวมินทร์: ค่าส่ง-รับรถ 350 บาท (ต่อเที่ยว)
                                                มหาวิทยาลัยกรุงเทพ: ค่าส่งรถ 500 บาท, ค่ารับรถ 3,000 บาท
                                                ธรรมศาสตร์ รังสิต: ค่าส่งรถ 300 บาท, ค่ารับรถ 400 บาท
                                                MRT รัชดาภิเษก/ห้วยขวาง: ค่าส่ง-รับรถ 200 บาท (ต่อเที่ยว)
                                                เคหะร่มเกล้า: ค่าส่ง-รับรถ 500 บาท (ต่อเที่ยว)
                                                ตั้งฮั่วเส็ง บางลำพู: ค่าส่ง-รับรถ 500 บาท (ต่อเที่ยว)
                                                ฟิวเจอร์พาร์ค รังสิต: ค่าส่ง-รับรถ 500 บาท (ต่อเที่ยว)
                                                BTS สำโรง: ค่าส่ง-รับรถ 300 บาท (ต่อเที่ยว)
                                                BTS กรุงธนบุรี: ค่าส่ง-รับรถ 300 บาท (ต่อเที่ยว)
                                                สาขาถนนนาราธิวาสราชนครินทร์: ค่าส่งรถ 500 บาท, ค่ารับรถ 350 บาท
                                                เดอะมอลล์ บางแค: ค่าส่ง-รับรถ 500 บาท (ต่อเที่ยว)
                                                MRT ลุมพินี: ค่าส่ง-รับรถ 300 บาท (ต่อเที่ยว)
                                                ซีคอนสแควร์ ศรีนครินทร์: ค่าส่ง-รับรถ 300 บาท (ต่อเที่ยว)
                                                เซ็นทรัล พระราม 3: ค่าส่ง-รับรถ 300 บาท (ต่อเที่ยว)
                                                BTS พระโขนง: ค่าส่งรถ 400 บาท, ค่ารับรถ 200 บาท
                                                ศรีนครินทร์ พัฒนาการ: ค่าส่ง-รับรถ 400 บาท (ต่อเที่ยว)
                                                ซีคอนสแควร์ บางแค: ค่าส่งรถ 300 บาท, ค่ารับรถ 350 บาท
                                                BTS อโศก: ค่าส่ง-รับรถ 350 บาท (ต่อเที่ยว)
                                                BTS บางนา: ค่าส่งรถ 500 บาท, ค่ารับรถ 400 บาท
                                                BTS ตลาดพลู: ค่าส่งรถ 300 บาท, ค่ารับรถ 400 บาท
                                                สถานีกลางกรุงเทพอภิวัฒน์: ค่าส่งรถ 100 บาท, ค่ารับรถฟรี
                                                สนามบินสุวรรณภูมิ: ค่าส่ง-รับรถ 400 บาท (ต่อเที่ยว)
                                                ถนนพระราม 9 RCA (ตึกรอยัลซิตี้อเวนิว): ค่าส่งรถ 200 บาท, ค่ารับรถ 100 บาท
                                                BTS อารีย์: ค่าส่ง-รับรถ 200 บาท (ต่อเที่ยว)
                                                BTS สะพานตากสิน: ค่าส่ง-รับรถ 300 บาท (ต่อเที่ยว)
                                                BTS อนุสาวรีย์ชัยสมรภูมิ: ค่าส่ง-รับรถ 200 บาท (ต่อเที่ยว)
                                                สถานีขนส่งสายใต้: ค่าส่ง-รับรถ 500 บาท (ต่อเที่ยว)
                                                โลตัส บางนา: ค่าส่ง-รับรถ 500 บาท (ต่อเที่ยว)
                                                บิ๊กซี วงศ์สว่าง: ค่าส่ง-รับรถฟรี
                                                มิลเลนเนียม ออโต้ ลาดพร้าว: ค่าส่งรถ 200 บาท, ค่ารับรถ 250 บาท
                                                ถนนสาทรเหนือ (อาคารโครนอส สาทร): ค่าส่ง-รับรถ 300 บาท (ต่อเที่ยว)
                                                ไอทีสแควร์: ค่าส่ง-รับรถ 200 บาท (ต่อเที่ยว)
                                                BTS พร้อมพงษ์: ค่าส่งรถ 500 บาท, ค่ารับรถฟรี
                                                เดอะมอลล์ บางกะปิ: ค่าส่ง-รับรถ 200 บาท (ต่อเที่ยว)
                                                BTS อุดมสุข: ค่าส่งรถ 400 บาท, ค่ารับรถ 300 บาท
                                                MRT บางใหญ่: ค่าส่ง-รับรถฟรีBTS 
                                                บางหว้า: ค่าส่งรถ 300 บาท, ค่ารับรถ 400 บาท
                                                เซ็นทรัล รามอินทรา: ค่าส่ง-รับรถ 200 บาท (ต่อเที่ยว)
                                                BTS ช่องนนทรี: ค่าส่ง-รับรถ 300 บาท (ต่อเที่ยว)
                                                สถานีรถไฟดอนเมือง: ค่าส่ง-รับรถ 100 บาท (ต่อเที่ยว)
                                                มหาวิทยาลัยหอการค้าไทย: ค่าส่งรถ 300 บาท, ค่ารับรถ 200 บาท
                                                แยกพระราม4 รัชดาภิเษก: ค่าส่ง-รับรถ 300 บาท (ต่อเที่ยว)
                                                เซ็นทรัล พระราม 9: ค่าส่ง-รับรถ 200 บาท (ต่อเที่ยว)
                                                แอร์พอร์ตลิงก์ ลาดกระบัง: ค่าส่ง-รับรถ 400 บาท (ต่อเที่ยว)
                                                เมเจอร์รัชโยธิน: ค่าส่ง-รับรถ 200 บาท (ต่อเที่ยว)
                                                BTS สยาม: ค่าส่ง-รับรถ 300 บาท (ต่อเที่ยว)
                                                เซ็นทรัล พระราม 2: ค่าส่งรถ 350 บาท, ค่ารับรถ 300 บาท
                                                The Circle ราชพฤกษ์: ค่าส่ง-รับรถ 200 บาท (ต่อเที่ยว)
                                                แยกรัชดา-ลาดพร้าว: ค่าส่ง-รับรถ 200 บาท (ต่อเที่ยว)
                                                แฟชั่นไอส์แลนด์: ค่าส่ง-รับรถ 500 บาท (ต่อเที่ยว)
                                                เซ็นทรัล อีสต์วิลล์: ค่าส่ง-รับรถ 200 บาท (ต่อเที่ยว)
                                                BTS แบริ่ง: ค่าส่ง-รับรถ 350 บาท (ต่อเที่ยว)
                                                เซ็นทรัล เวสต์เกต: ค่าส่งรถ 100 บาท, ค่ารับรถฟรี
                                                แอร์พอร์ตลิงก์ รามคำแหง: ค่าส่งรถ 400 บาท, ค่ารับรถ 200 บาท
                                                เซ็นทรัล แจ้งวัฒนะ: ค่าส่ง-รับรถ 100 บาท (ต่อเที่ยว)
                    </p>
                </section>

                {/* Booking Conditions Section */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">เงื่อนไขการจอง</h2>
                    <ul className="list-disc ml-6">
                        <li>กรุณาแจ้งการเปลี่ยนแปลงล่วงหน้า</li>
                        <li>ไม่สามารถแก้ไขได้เมื่อยืนยันการจอง</li>
                    </ul>
                </section>

                {/* Payment Section */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">การชำระเงิน</h2>
                    <p>
                        <strong>ค่ามัดจำ:</strong> ฿2,500 <br />
                        <strong>ค่าชำระ:</strong> สามารถจ่ายผ่านโอนเงิน, พร้อมเพย์
                    </p>
                </section>

                {/* Car Return Section */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">การคืนรถ</h2>
                    <p>กรุณาส่งคืนในสภาพเรียบร้อยพร้อมเอกสารครบถ้วน</p>
                </section>

                {/* Required Documents Section */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">เอกสารที่ต้องใช้</h2>
                    <ul className="list-disc ml-6">
                        <li>สำเนาบัตรประชาชน</li>
                        <li>ใบขับขี่ที่ยังไม่หมดอายุ</li>
                    </ul>
                </section>

                {/* Additional Notes Section */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">โน้ตเพิ่มเติม</h2>
                    <p>อายุขั้นต่ำในการเช่า: 21 ปี</p>
                </section>
            </div>
             {/* Bottom Navbar */}
        <div className="bg-gray-800 text-white py-2 w-full min-h-[250] flex items-center justify-center mt-12">
            <div className="text-center">
                <p>&copy; 2025 Company Name. All rights reserved.</p>
            </div>
        </div>
        </div>
    );
}


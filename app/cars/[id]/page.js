"use client";
 
import Image from 'next/image';
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from 'next/navigation';
import { useParams } from "next/navigation";
import Footer from '@/app/components/footer';
import Navbar from '@/app/components/navbar';
import Link from 'next/link';
 
const CarDetailPage = () => {
    const { id } = useParams();
    const searchParams = useSearchParams();
    const router = useRouter();
    const [car, setCar] = useState(null);
    const [loading, setLoading] = useState(true);
    const [days, setDays] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);
    const [deliveryFee, setDeliveryFee] = useState(0); // ✅ เก็บค่ารับ-ส่งจาก `locations`
 
    // ✅ ดึงค่าจาก URL
    const pickupDateStr = searchParams.get("pickup");
    const returnDateStr = searchParams.get("return");
 
    // ✅ แปลงวันที่ให้อ่านง่าย
    const formatDateTime = (dateStr) => {
        if (!dateStr) return "ไม่ระบุ";
        const date = new Date(dateStr);
        return date.toLocaleString("th-TH", {
            year: "numeric", month: "long", day: "numeric",
            hour: "2-digit", minute: "2-digit", hour12: false
        }) + " น.";
    };
 
    // ✅ โหลดข้อมูลรถ
    useEffect(() => {
        if (!id) return;
 
        fetch(`/api/cars/${id}`)
            .then(res => res.json())
            .then(data => {
                setCar(data.car || null);
                setLoading(false);
 
                // ✅ ถ้ามี locations ให้นำค่ารับ-ส่งมาใช้
                if (data.car.locations && data.car.locations.length > 0) {
                    const fee = data.car.locations.reduce((acc, loc) => acc + loc.fee, 0); // รวมค่ารับ-ส่ง
                    setDeliveryFee(fee);
                }
            })
            .catch(error => {
                console.error("❌ Fetch error:", error);
                setLoading(false);
            });
    }, [id]);
 
    // ✅ คำนวณจำนวนวัน
    useEffect(() => {
        if (!pickupDateStr || !returnDateStr) return;
 
        const pickupDate = new Date(pickupDateStr);
        const returnDate = new Date(returnDateStr);
        const diffTime = returnDate - pickupDate;
        const calculatedDays = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
 
        setDays(calculatedDays);
    }, [pickupDateStr, returnDateStr]);
 
    // ✅ คำนวณราคารวม
    useEffect(() => {
        if (car) {
            const pricePerDay = car.price || 0;
            setTotalPrice(pricePerDay * days + deliveryFee); // ✅ บวกค่ารับ-ส่งจาก locations
        }
    }, [car, days, deliveryFee]);
 
    if (loading) return <p className="text-center text-gray-500">กำลังโหลดข้อมูล...</p>;
    if (!car) return <p className="text-center text-red-500">ไม่พบข้อมูลรถ</p>;
 
    return (
        <div className="relative">
            <Navbar />
 
            <div className="container mx-auto px-6 lg:px-24 py-6">
                {/* 🔗 Breadcrumbs */}
                <ul className="mb-4 flex space-x-2 text-sm text-gray-500">
                    <li><Link href="/" className="hover:text-blue-600">หน้าแรก</Link></li>
                    <li>&gt;</li>
                    <li><Link href="/cars" className="hover:text-blue-600">ผลการค้นหา</Link></li>
                    <li>&gt;</li>
                    <li><Link href="#" className="text-blue-600">รายละเอียดรถ</Link></li>
                </ul>
 
                {/* ✅ **หัวข้อชื่อรถ** */}
                <h1 className="text-xl font-bold text-gray-800 mb-6">{car.name}</h1>
 
                {/* ✅ **รูปภาพรถ** */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                    {car.images.map((image, index) => (
                        <Image
                            key={index}
                            src={image || "/placeholder-car.jpg"}
                            alt={car.name}
                            width={600}
                            height={400}
                            className="rounded-lg object-cover"
                        />
                    ))}
                </div>
 
                {/* ✅ **ข้อมูลรถ** */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* ✅ **ซ้าย: รายละเอียดรถ** */}
                    <div className="grid grid-cols-2 gap-x-12 gap-y-8">
                        {[
                            { icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none"  className="w-8 h-8 rounded-full bg-gray-200 p-2"xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 6L19 10H21C22.11 10 23 10.89 23 12V15H21C21 15.7956 20.6839 16.5587 20.1213 17.1213C19.5587 17.6839 18.7956 18 18 18C17.2044 18 16.4413 17.6839 15.8787 17.1213C15.3161 16.5587 15 15.7956 15 15H9C9 15.7956 8.68393 16.5587 8.12132 17.1213C7.55871 17.6839 6.79565 18 6 18C5.20435 18 4.44129 17.6839 3.87868 17.1213C3.31607 16.5587 3 15.7956 3 15H1V12C1 10.89 1.89 10 3 10L6 6H16ZM10.5 7.5H6.75L4.86 10H10.5V7.5ZM12 7.5V10H17.14L15.25 7.5H12ZM6 13.5C5.60218 13.5 5.22064 13.658 4.93934 13.9393C4.65804 14.2206 4.5 14.6022 4.5 15C4.5 15.3978 4.65804 15.7794 4.93934 16.0607C5.22064 16.342 5.60218 16.5 6 16.5C6.39782 16.5 6.77936 16.342 7.06066 16.0607C7.34196 15.7794 7.5 15.3978 7.5 15C7.5 14.6022 7.34196 14.2206 7.06066 13.9393C6.77936 13.658 6.39782 13.5 6 13.5ZM18 13.5C17.6022 13.5 17.2206 13.658 16.9393 13.9393C16.658 14.2206 16.5 14.6022 16.5 15C16.5 15.3978 16.658 15.7794 16.9393 16.0607C17.2206 16.342 17.6022 16.5 18 16.5C18.3978 16.5 18.7794 16.342 19.0607 16.0607C19.342 15.7794 19.5 15.3978 19.5 15C19.5 14.6022 19.342 14.2206 19.0607 13.9393C18.7794 13.658 18.3978 13.5 18 13.5Z" fill="#7D7D7D"/>
                        </svg>, label: "ประเภทรถ", value: car.type },
                            { icon:  <svg width="26" height="26" viewBox="0 0 20 24" fill="none" className="w-8 h-8 rounded-full bg-gray-200 p-2" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.75024 15.6666V8.33331M15.2497 12H5.75024M10.5 15.6666V8.33331M15.2497 15.6666V8.33331" stroke="#7D7D7D" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M2.18786 23H18.8121C19.4676 23 20 22.4526 20 21.778V2.22203C20 1.54736 19.4682 1 18.8121 1H2.18786C1.87292 1 1.57087 1.12873 1.34812 1.35789C1.12537 1.58705 1.00015 1.89787 1 2.22203V21.778C1 22.4526 1.5318 23 2.18786 23Z" stroke="#D9D9D9" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>, label: "ระบบเกียร์", value: car.transmission },
                            { icon: <svg width="24" height="24" viewBox="0 -4 21 35" fill="none" className="w-8 h-8  rounded-full bg-gray-200" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.5 6.00001C7.95 6.00001 7.47933 5.80434 7.088 5.41301C6.69667 5.02167 6.50067 4.55067 6.5 4.00001C6.49933 3.44934 6.69533 2.97867 7.088 2.58801C7.48067 2.19734 7.95133 2.00134 8.5 2.00001C9.04867 1.99867 9.51967 2.19467 9.913 2.58801C10.3063 2.98134 10.502 3.45201 10.5 4.00001C10.498 4.54801 10.3023 5.01901 9.913 5.41301C9.52367 5.80701 9.05267 6.00267 8.5 6.00001ZM14 20H7.55C7 20 6.496 19.8043 6.038 19.413C5.58 19.0217 5.29233 18.5507 5.175 18L3 7.00001H5.05L7.25 18H14V20ZM19.5 22L16.6 17H9.65C9.16667 17 8.74567 16.8543 8.387 16.563C8.02833 16.2717 7.79933 15.884 7.7 15.4L6.6 10.05C6.41667 9.25001 6.60433 8.54167 7.163 7.92501C7.72167 7.30834 8.40067 7.00001 9.2 7.00001C9.78333 7.00001 10.3127 7.17501 10.788 7.52501C11.2633 7.87501 11.5673 8.35001 11.7 8.95001L12.8 14H16.05C16.4 14 16.725 14.0917 17.025 14.275C17.325 14.4583 17.5667 14.7 17.75 15L21.25 21L19.5 22Z" fill="#7D7D7D"/>
                            </svg>, label: "จำนวนที่นั่ง", value: `${car.seats} ที่นั่ง` },
                            { icon: <svg id="Layer_1" viewBox="0 -10 24 45" className="w-8 h-8  rounded-full bg-gray-200" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m22.638 2h-6.638v-2h-8v2h-6.638c-.247.613-1.302 2.58-1.362 7.5.062 4.925 1.114 6.881 1.362 7.5h21.276c.246-.613 1.302-2.58 1.362-7.5 0-4.513-1.362-7.5-1.362-7.5zm-13.638-1h6v1h-6zm12.981 15h-19.962c-.29-.773-1.019-3.059-1.019-6.5s.729-5.727 1.019-6.5h19.962c.29.773 1.019 3.059 1.019 6.5s-.729 5.727-1.019 6.5zm-9.981-10.2-2.122 2.079c-1.169 1.169-1.169 3.073 0 4.242 1.117 1.164 3.126 1.164 4.243 0 1.165-1.119 1.165-3.126-.004-4.246l-2.117-2.076zm1.414 5.614c-.756.756-2.073.756-2.829 0-.78-.78-.78-2.048-.003-2.825l1.418-1.389 1.414 1.386c.776.745.776 2.083 0 2.828zm5.586 6.586c-1.483 0-2.71 1.084-2.949 2.5h-8.102c-.24-1.416-1.466-2.5-2.949-2.5-1.654 0-3 1.346-3 3s1.346 3 3 3c1.483 0 2.71-1.084 2.949-2.5h8.101c.24 1.416 1.466 2.5 2.949 2.5 1.654 0 3-1.346 3-3s-1.346-3-3-3zm-14 5c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm14 0c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"  fill="#7D7D7D"/></svg>, label: "ระบบเชื้อเพลิง", value: car.fuel },
                            { icon: <svg width="24" height="24" viewBox="0 -7 24 40 " fill="none" className="w-8 h-8 rounded-full bg-gray-200" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 4V6H10V8H7L5 10V13H3V10H1V18H3V15H5V18H8L10 20H18V16H20V19H23V9H20V12H18V8H12V6H15V4H7Z" fill="#7D7D7D"/>
                            </svg>, label: "ความจุเครื่องยนต์", value: `${car.engine} CC` },
                            { icon:  <svg width="24" height="24" viewBox="0 -5 25 40" fill="none" className="w-8 h-8 rounded-full bg-gray-200" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 14H16V16H19V14ZM22 21H3V11L11 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V21ZM11.83 5L5.83 11H20V5H11.83Z" fill="#7D7D7D"/>
                            </svg>, label: "จำนวนประตู", value: `${car.doors} ประตู` },
                            { icon: <svg width="24" height="24" viewBox="0 -4 25 33" fill="none" className="w-8 h-8  rounded-full bg-gray-200" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.46195 20C7.01728 20 6.63695 19.8417 6.32095 19.525C6.00495 19.2083 5.84661 18.8283 5.84595 18.385V8C5.84595 7.556 6.00428 7.176 6.32095 6.86C6.63695 6.54267 7.01695 6.384 7.46095 6.384H9.61595V4.615C9.61595 4.171 9.77395 3.791 10.0899 3.475C10.4059 3.159 10.7859 3.00067 11.2299 3H12.7699C13.2139 3 13.5939 3.15833 13.9099 3.475C14.2259 3.79167 14.3843 4.17167 14.3849 4.615V6.385H16.5389C16.9829 6.385 17.3629 6.543 17.6789 6.859C17.9956 7.17567 18.1539 7.556 18.1539 8V18.385C18.1539 18.829 17.9956 19.209 17.6789 19.525C17.3623 19.841 16.9826 19.9993 16.5399 20V20.23C16.5399 20.4367 16.4633 20.6167 16.3099 20.77C16.1566 20.9233 15.9766 21 15.7699 21C15.5633 21 15.3833 20.9233 15.2299 20.77C15.0766 20.6167 15.0003 20.4367 15.0009 20.23V20H8.99995V20.23C8.99995 20.4367 8.92328 20.6167 8.76995 20.77C8.61661 20.9233 8.43661 21 8.22995 21C8.02328 21 7.84361 20.9233 7.69095 20.77C7.53828 20.6167 7.46161 20.4367 7.46095 20.23L7.46195 20ZM10.1149 9.154C9.97295 9.154 9.85428 9.20167 9.75895 9.297C9.66361 9.39233 9.61595 9.51133 9.61595 9.654V16.731C9.61595 16.8723 9.66361 16.991 9.75895 17.087C9.85495 17.183 9.97395 17.231 10.1159 17.231C10.2579 17.231 10.3766 17.183 10.4719 17.087C10.5673 16.991 10.6153 16.8723 10.6159 16.731V9.654C10.6159 9.512 10.5676 9.39333 10.4709 9.298C10.3743 9.20267 10.2556 9.15467 10.1149 9.154ZM13.8839 9.154C13.7419 9.154 13.6233 9.202 13.5279 9.298C13.4319 9.39333 13.3839 9.512 13.3839 9.654V16.731C13.3839 16.8723 13.4323 16.991 13.5289 17.087C13.6256 17.183 13.7443 17.231 13.8849 17.231C14.0256 17.231 14.1443 17.183 14.2409 17.087C14.3376 16.991 14.3856 16.8723 14.3849 16.731V9.654C14.3849 9.512 14.3369 9.39333 14.2409 9.298C14.1449 9.202 14.0259 9.154 13.8839 9.154ZM10.6159 6.384H13.3849V4.616C13.3849 4.43667 13.3273 4.28933 13.2119 4.174C13.0966 4.05867 12.9489 4.00067 12.7689 4H11.2309C11.0509 4 10.9036 4.05767 10.7889 4.173C10.6736 4.28833 10.6159 4.436 10.6159 4.616V6.384Z" fill="#7D7D7D"/>
                            </svg>, label: "จำนวนสัมภาระ", value: `${car.luggage} ใบ` },
                            { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C9.89206 1.99989 7.86926 2.83176 6.37124 4.31479C4.87323 5.79782 4.02108 7.81216 4 9.92C4 15.4 11.05 21.5 11.35 21.76C11.5311 21.9149 11.7616 22.0001 12 22.0001C12.2384 22.0001 12.4689 21.9149 12.65 21.76C13 21.5 20 15.4 20 9.92C19.9789 7.81216 19.1268 5.79782 17.6288 4.31479C16.1307 2.83176 14.1079 1.99989 12 2ZM12 19.65C10.33 18.06 6 13.65 6 9.92C6 8.3287 6.63214 6.80258 7.75736 5.67736C8.88258 4.55214 10.4087 3.92 12 3.92C13.5913 3.92 15.1174 4.55214 16.2426 5.67736C17.3679 6.80258 18 8.3287 18 9.92C18 13.62 13.67 18.06 12 19.65Z" fill="#7D7D7D"/>
                            <path d="M12 6C11.3078 6 10.6311 6.20527 10.0555 6.58986C9.47993 6.97444 9.03133 7.52107 8.76642 8.16061C8.50152 8.80015 8.4322 9.50388 8.56725 10.1828C8.7023 10.8618 9.03564 11.4854 9.52513 11.9749C10.0146 12.4644 10.6383 12.7977 11.3172 12.9327C11.9961 13.0678 12.6999 12.9985 13.3394 12.7336C13.9789 12.4687 14.5256 12.0201 14.9101 11.4445C15.2947 10.8689 15.5 10.1922 15.5 9.5C15.5 8.57174 15.1313 7.6815 14.4749 7.02513C13.8185 6.36875 12.9283 6 12 6ZM12 11C11.7033 11 11.4133 10.912 11.1666 10.7472C10.92 10.5824 10.7277 10.3481 10.6142 10.074C10.5007 9.79994 10.4709 9.49834 10.5288 9.20736C10.5867 8.91639 10.7296 8.64912 10.9393 8.43934C11.1491 8.22956 11.4164 8.0867 11.7074 8.02882C11.9983 7.97094 12.2999 8.00065 12.574 8.11418C12.8481 8.22771 13.0824 8.41997 13.2472 8.66665C13.412 8.91332 13.5 9.20333 13.5 9.5C13.5 9.89782 13.342 10.2794 13.0607 10.5607C12.7794 10.842 12.3978 11 12 11Z" fill="#7D7D7D"/>
                            </svg>
                            , label: "จังหวัด", value: car.province },
                        ].map((item, index) => (
                            <div key={index} className="flex items-center gap-4">
                                <span className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-lg">
                                    {item.icon}
                                </span>
                                <div>
                                    <span className="text-xs text-gray-400">{item.label}</span>
                                    <p className="text-sm">{item.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>
 
                    {/* ✅ **ขวา: กล่องข้อมูลราคาและปุ่มจอง** */}
                    <div className="bg-white p-4 rounded-xl shadow-md w-full max-w-sm mx-auto">
                        <h2 className="text-base font-semibold mb-4">รายละเอียด</h2>
 
                        {/* ✅ ค่าเช่ารถ */}
                        <div className="mb-4">
                            <p className="flex justify-between">
                                <span className="text-sm">ค่าเช่ารถ {days} วัน</span>
                                <span className="font-semibold text-sm">฿{car.price * days}</span>
                            </p>
                            <ul className="ml-4 text-gray-600 text-sm mt-2">
                                <li>ราคาต่อวัน ฿{car.price} × {days} วัน</li>
                            </ul>
                        </div>
 
                        {/* ✅ ค่ารับ-ค่าส่ง (จาก locations) */}
                        <div className="mb-4 text-sm">
                            <p className="text-sm font-semibold">ค่ารับ - ค่าส่ง</p>
 
                            {/* ✅ ถ้ามีค่ารับ-ส่ง แสดงรายการ */}
                            {car.locations?.length > 0 ? (
                                <ul className="ml-4 text-gray-600 text-sm mt-2">
                                    {car.locations.map((loc, index) => (
                                        <li key={index} className="flex justify-between">
                                            <span>{loc.place}</span>
                                            <span className="font-semibold text-green-500">
                                                {loc.fee > 0 ? `฿${loc.fee}` : "ฟรี"}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-green-500 font-semibold mt-2">ฟรี</p>
                            )}
                        </div>
 
                        {/* ✅ ราคารวมทั้งหมด */}
                        <hr className="border-gray-300 my-4" />
                        <div className="mb-4">
                            <p className="flex justify-between text-sm font-bold">
                                <span>ราคารวมทั้งหมด</span>
                                <span className='text-base'>฿{totalPrice}</span>
                            </p>
                            <p className="flex justify-between text-sm mt-2">
                                <span className='text-gray-600 text-sm'>ค่ามัดจำในวันรับรถ (ได้คืนในวันคืนรถ)</span>
                                <span>฿3000</span>
                            </p>
                        </div>
 
                        {/* ✅ ปุ่มเช่ารถ */}
                        <button
                            onClick={() => {
                                // แปลง pickupDateStr และ returnDateStr ให้เป็น Date ใน onClick
                                const pickupDate = new Date(pickupDateStr);
                                const returnDate = new Date(returnDateStr);
 
                                // ส่งข้อมูลไปยัง URL
                                router.push(`/rent_car1?carId=${car._id}&name=${car.name}&pickup=${pickupDate.toISOString()}&return=${returnDate.toISOString()}&price=${car.price}&province=${car.province}`);
                            }}
                            className="w-full bg-green-500 text-white py-2 rounded-lg mt-3 text-sm hover:bg-green-600 transition"
                        >
                            เช่ารถคันนี้
                        </button>
 
                    </div>
                </div>
            </div>
                            <div className='mt-10'>
                                <Footer />
                            </div>

        </div>
    );
};
 
export default CarDetailPage;
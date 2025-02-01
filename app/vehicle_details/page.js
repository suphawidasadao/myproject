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
                <h1 className="text-base font-bold mb-4">Toyota Yaris ATIV 2023</h1>

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

                <div className="flex flex-col lg:flex-row gap-6 w-full max-w-5xl mx-auto p-6">
                {/* Left Section */}
                <div>
                    <h2 className="text-lg font-semibold mb-4">ข้อมูลรถ</h2>
                    <div className="grid grid-cols-2 gap-4 text-gray-600">
                    <div className="flex items-center gap-2">
                    <svg width="26" height="26" viewBox="0 0 25 25" fill="none"  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 p-2"xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 6L19 10H21C22.11 10 23 10.89 23 12V15H21C21 15.7956 20.6839 16.5587 20.1213 17.1213C19.5587 17.6839 18.7956 18 18 18C17.2044 18 16.4413 17.6839 15.8787 17.1213C15.3161 16.5587 15 15.7956 15 15H9C9 15.7956 8.68393 16.5587 8.12132 17.1213C7.55871 17.6839 6.79565 18 6 18C5.20435 18 4.44129 17.6839 3.87868 17.1213C3.31607 16.5587 3 15.7956 3 15H1V12C1 10.89 1.89 10 3 10L6 6H16ZM10.5 7.5H6.75L4.86 10H10.5V7.5ZM12 7.5V10H17.14L15.25 7.5H12ZM6 13.5C5.60218 13.5 5.22064 13.658 4.93934 13.9393C4.65804 14.2206 4.5 14.6022 4.5 15C4.5 15.3978 4.65804 15.7794 4.93934 16.0607C5.22064 16.342 5.60218 16.5 6 16.5C6.39782 16.5 6.77936 16.342 7.06066 16.0607C7.34196 15.7794 7.5 15.3978 7.5 15C7.5 14.6022 7.34196 14.2206 7.06066 13.9393C6.77936 13.658 6.39782 13.5 6 13.5ZM18 13.5C17.6022 13.5 17.2206 13.658 16.9393 13.9393C16.658 14.2206 16.5 14.6022 16.5 15C16.5 15.3978 16.658 15.7794 16.9393 16.0607C17.2206 16.342 17.6022 16.5 18 16.5C18.3978 16.5 18.7794 16.342 19.0607 16.0607C19.342 15.7794 19.5 15.3978 19.5 15C19.5 14.6022 19.342 14.2206 19.0607 13.9393C18.7794 13.658 18.3978 13.5 18 13.5Z" fill="#7D7D7D"/>
                    </svg>
                        <span className="material-icons">ประเภทรถ<br/>
                        รถเก๋ง 4 ประตู
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                    <svg width="26" height="26" viewBox="0 0 26 24" fill="none" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 p-2" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.75024 15.6666V8.33331M15.2497 12H5.75024M10.5 15.6666V8.33331M15.2497 15.6666V8.33331" stroke="#7D7D7D" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2.18786 23H18.8121C19.4676 23 20 22.4526 20 21.778V2.22203C20 1.54736 19.4682 1 18.8121 1H2.18786C1.87292 1 1.57087 1.12873 1.34812 1.35789C1.12537 1.58705 1.00015 1.89787 1 2.22203V21.778C1 22.4526 1.5318 23 2.18786 23Z" stroke="#D9D9D9" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                        <span className="material-icons">ระบบเกียร์ <br/>
                        เกียร์ออโต้
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 25 35" fill="none" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.5 6.00001C7.95 6.00001 7.47933 5.80434 7.088 5.41301C6.69667 5.02167 6.50067 4.55067 6.5 4.00001C6.49933 3.44934 6.69533 2.97867 7.088 2.58801C7.48067 2.19734 7.95133 2.00134 8.5 2.00001C9.04867 1.99867 9.51967 2.19467 9.913 2.58801C10.3063 2.98134 10.502 3.45201 10.5 4.00001C10.498 4.54801 10.3023 5.01901 9.913 5.41301C9.52367 5.80701 9.05267 6.00267 8.5 6.00001ZM14 20H7.55C7 20 6.496 19.8043 6.038 19.413C5.58 19.0217 5.29233 18.5507 5.175 18L3 7.00001H5.05L7.25 18H14V20ZM19.5 22L16.6 17H9.65C9.16667 17 8.74567 16.8543 8.387 16.563C8.02833 16.2717 7.79933 15.884 7.7 15.4L6.6 10.05C6.41667 9.25001 6.60433 8.54167 7.163 7.92501C7.72167 7.30834 8.40067 7.00001 9.2 7.00001C9.78333 7.00001 10.3127 7.17501 10.788 7.52501C11.2633 7.87501 11.5673 8.35001 11.7 8.95001L12.8 14H16.05C16.4 14 16.725 14.0917 17.025 14.275C17.325 14.4583 17.5667 14.7 17.75 15L21.25 21L19.5 22Z" fill="#7D7D7D"/>
                    </svg>
                        <span className="material-icons">จำนวนที่นั่ง <br/>
                        4 ที่นั่ง
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                    <svg id="Layer_1" viewBox="0 0 25 42" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m22.638 2h-6.638v-2h-8v2h-6.638c-.247.613-1.302 2.58-1.362 7.5.062 4.925 1.114 6.881 1.362 7.5h21.276c.246-.613 1.302-2.58 1.362-7.5 0-4.513-1.362-7.5-1.362-7.5zm-13.638-1h6v1h-6zm12.981 15h-19.962c-.29-.773-1.019-3.059-1.019-6.5s.729-5.727 1.019-6.5h19.962c.29.773 1.019 3.059 1.019 6.5s-.729 5.727-1.019 6.5zm-9.981-10.2-2.122 2.079c-1.169 1.169-1.169 3.073 0 4.242 1.117 1.164 3.126 1.164 4.243 0 1.165-1.119 1.165-3.126-.004-4.246l-2.117-2.076zm1.414 5.614c-.756.756-2.073.756-2.829 0-.78-.78-.78-2.048-.003-2.825l1.418-1.389 1.414 1.386c.776.745.776 2.083 0 2.828zm5.586 6.586c-1.483 0-2.71 1.084-2.949 2.5h-8.102c-.24-1.416-1.466-2.5-2.949-2.5-1.654 0-3 1.346-3 3s1.346 3 3 3c1.483 0 2.71-1.084 2.949-2.5h8.101c.24 1.416 1.466 2.5 2.949 2.5 1.654 0 3-1.346 3-3s-1.346-3-3-3zm-14 5c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm14 0c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"  fill="#7D7D7D"/></svg>
                        <span className="material-icons">ระบบเชื้อเพลิง <br/>
                        น้ำมันเบนซิน
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 25 35" fill="none" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 4V6H10V8H7L5 10V13H3V10H1V18H3V15H5V18H8L10 20H18V16H20V19H23V9H20V12H18V8H12V6H15V4H7Z" fill="#7D7D7D"/>
                    </svg>
                        <span className="material-icons">ความจุเครื่องยนต์ <br/>
                        1200 cc
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 25 35" fill="none" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 14H16V16H19V14ZM22 21H3V11L11 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V21ZM11.83 5L5.83 11H20V5H11.83Z" fill="#7D7D7D"/>
                    </svg>
                        <span className="material-icons">จำนวนประตู <br/>
                        4 ประตู
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 25 33" fill="none" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.46195 20C7.01728 20 6.63695 19.8417 6.32095 19.525C6.00495 19.2083 5.84661 18.8283 5.84595 18.385V8C5.84595 7.556 6.00428 7.176 6.32095 6.86C6.63695 6.54267 7.01695 6.384 7.46095 6.384H9.61595V4.615C9.61595 4.171 9.77395 3.791 10.0899 3.475C10.4059 3.159 10.7859 3.00067 11.2299 3H12.7699C13.2139 3 13.5939 3.15833 13.9099 3.475C14.2259 3.79167 14.3843 4.17167 14.3849 4.615V6.385H16.5389C16.9829 6.385 17.3629 6.543 17.6789 6.859C17.9956 7.17567 18.1539 7.556 18.1539 8V18.385C18.1539 18.829 17.9956 19.209 17.6789 19.525C17.3623 19.841 16.9826 19.9993 16.5399 20V20.23C16.5399 20.4367 16.4633 20.6167 16.3099 20.77C16.1566 20.9233 15.9766 21 15.7699 21C15.5633 21 15.3833 20.9233 15.2299 20.77C15.0766 20.6167 15.0003 20.4367 15.0009 20.23V20H8.99995V20.23C8.99995 20.4367 8.92328 20.6167 8.76995 20.77C8.61661 20.9233 8.43661 21 8.22995 21C8.02328 21 7.84361 20.9233 7.69095 20.77C7.53828 20.6167 7.46161 20.4367 7.46095 20.23L7.46195 20ZM10.1149 9.154C9.97295 9.154 9.85428 9.20167 9.75895 9.297C9.66361 9.39233 9.61595 9.51133 9.61595 9.654V16.731C9.61595 16.8723 9.66361 16.991 9.75895 17.087C9.85495 17.183 9.97395 17.231 10.1159 17.231C10.2579 17.231 10.3766 17.183 10.4719 17.087C10.5673 16.991 10.6153 16.8723 10.6159 16.731V9.654C10.6159 9.512 10.5676 9.39333 10.4709 9.298C10.3743 9.20267 10.2556 9.15467 10.1149 9.154ZM13.8839 9.154C13.7419 9.154 13.6233 9.202 13.5279 9.298C13.4319 9.39333 13.3839 9.512 13.3839 9.654V16.731C13.3839 16.8723 13.4323 16.991 13.5289 17.087C13.6256 17.183 13.7443 17.231 13.8849 17.231C14.0256 17.231 14.1443 17.183 14.2409 17.087C14.3376 16.991 14.3856 16.8723 14.3849 16.731V9.654C14.3849 9.512 14.3369 9.39333 14.2409 9.298C14.1449 9.202 14.0259 9.154 13.8839 9.154ZM10.6159 6.384H13.3849V4.616C13.3849 4.43667 13.3273 4.28933 13.2119 4.174C13.0966 4.05867 12.9489 4.00067 12.7689 4H11.2309C11.0509 4 10.9036 4.05767 10.7889 4.173C10.6736 4.28833 10.6159 4.436 10.6159 4.616V6.384Z" fill="#7D7D7D"/>
                    </svg>
                        <span className="material-icons">จำนวนสัมภาระ <br/>
                        ประมาณ 2-3 ใบ
                        </span>
                    </div>
                    </div>

                    <div className="mt-6">
                    <h3 className="font-medium mb-2">อุปกรณ์ความบันเทิง</h3>
                    <ul className="list-disc list-inside text-gray-600">
                        <li className="flex items-center space-x-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 2.458C14.0291 2.1536 13.0175 1.99916 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22.0008 10.9825 21.8464 9.97088 21.542 9" stroke="#0268D7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M8.5 9.5L12 13L21 3" stroke="#0268D7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>Android Auto</span>
                            <span className="flex items-center space-x-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 2.458C14.0291 2.1536 13.0175 1.99916 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22.0008 10.9825 21.8464 9.97088 21.542 9" stroke="#0268D7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M8.5 9.5L12 13L21 3" stroke="#0268D7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>USB</span>
                        </span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 2.458C14.0291 2.1536 13.0175 1.99916 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22.0008 10.9825 21.8464 9.97088 21.542 9" stroke="#0268D7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M8.5 9.5L12 13L21 3" stroke="#0268D7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>Bluetooth</span>
                            <span className="flex items-center space-x-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 2.458C14.0291 2.1536 13.0175 1.99916 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22.0008 10.9825 21.8464 9.97088 21.542 9" stroke="#0268D7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M8.5 9.5L12 13L21 3" stroke="#0268D7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>Apple CarPlay</span>
                        </span>
                        </li>
                    </ul>
                </div>
                <div className="mt-6">
                    <h3 className="font-medium mb-2">อุปกรณ์ด้านความปลอดภัย</h3>
                    <ul className="list-disc list-inside text-gray-600">
                        <li className="flex items-center space-x-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 2.458C14.0291 2.1536 13.0175 1.99916 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22.0008 10.9825 21.8464 9.97088 21.542 9" stroke="#0268D7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M8.5 9.5L12 13L21 3" stroke="#0268D7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>ระบบช่วยเตือนเมื่ออยู่มุมอับสายตา</span>
                            <span className="flex items-center space-x-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 2.458C14.0291 2.1536 13.0175 1.99916 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22.0008 10.9825 21.8464 9.97088 21.542 9" stroke="#0268D7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M8.5 9.5L12 13L21 3" stroke="#0268D7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>ระบบเตือนเมื่อรถออกนอกเลน</span>
                        </span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 2.458C14.0291 2.1536 13.0175 1.99916 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22.0008 10.9825 21.8464 9.97088 21.542 9" stroke="#0268D7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M8.5 9.5L12 13L21 3" stroke="#0268D7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>ระบบเซ็นเซอร์ถอยหลัง</span>
                            <span className="flex items-center space-x-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 2.458C14.0291 2.1536 13.0175 1.99916 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22.0008 10.9825 21.8464 9.97088 21.542 9" stroke="#0268D7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M8.5 9.5L12 13L21 3" stroke="#0268D7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>Cruise Control</span>
                        </span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 2.458C14.0291 2.1536 13.0175 1.99916 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22.0008 10.9825 21.8464 9.97088 21.542 9" stroke="#0268D7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M8.5 9.5L12 13L21 3" stroke="#0268D7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>กล้องมองรอบคัน</span>
                        </li>
                    </ul>
                </div>
                <div className="mt-6">
                    <h3 className="font-medium mb-2">อุปกรณ์ความบันเทิง</h3>
                    <ul className="list-disc list-inside text-gray-600">
                        <li className="flex items-center space-x-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 2.458C14.0291 2.1536 13.0175 1.99916 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22.0008 10.9825 21.8464 9.97088 21.542 9" stroke="#0268D7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M8.5 9.5L12 13L21 3" stroke="#0268D7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>กุญแจรีโมท</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 2.458C14.0291 2.1536 13.0175 1.99916 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22.0008 10.9825 21.8464 9.97088 21.542 9" stroke="#0268D7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M8.5 9.5L12 13L21 3" stroke="#0268D7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>เบาะหนัง</span>
                        </li>
                    </ul>
                </div>

                 </div>
                         <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md mx-auto h-[360px]">
                            <h2 className="text-lg font-semibold mb-4">รายละเอียด</h2>

                            <div className="mb-4">
                                <p className="flex justify-between">
                                <span>ค่าเช่ารถ 2 วัน</span>
                                <span className="font-semibold">฿2,300</span>
                                </p>
                                <ul className="ml-4 text-gray-600">
                                <li>ราคาต่อวัน ฿1,150 × 2 วัน</li>
                                </ul>
                            </div>

                            <div className="mb-4">
                                <p className="flex justify-between">
                                <span>ค่ารับ - ค่าส่ง</span>
                                <span className="font-semibold">฿200</span>
                                </p>
                                <ul className="ml-4 text-gray-600">
                                <li>ค่าส่งรถ ฿100, ค่ารับรถ ฿100</li>
                                </ul>
                            </div>

                            <div className="mb-4 border-t pt-4">
                                <p className="flex justify-between text-lg font-bold">
                                <span>ราคารวมทั้งหมด</span>
                                <span>฿2,500</span>
                                </p>
                                <p className="text-sm text-gray-600">ค่ามัดจำในวันรับรถ (ได้คืนในวันคืนรถ)</p>
                            </div>

                <button className="bg-blue-500 text-white w-full py-3 rounded-lg font-semibold mt-4">
                    เช่ารถคันนี้
                </button>
                </div>
                </div>

                {/* Shop Info Section */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4"> ข้อมูลร้านค้า </h2>
                    <p className="mb-2 flex items-start">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        className="w-5 h-5 mr-2 text-blue-600"
                        fill="currentColor"
                    >
                        <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l352 0 0 256c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256z"/>
                    </svg>
                    <span className="flex flex-col">
                        <span className="font-bold">เวลาทำการปกติ</span>
                        <span>จันทร์-อาทิตย์ เวลาทำการ 08:00 - 20:00</span>
                    </span>
                    </p>
                    <div className="mb-2 flex items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        className="w-5 h-5 mr-2 text-blue-600"
                        fill="currentColor">
                        <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l352 0 0 256c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256z"/>
                    </svg>
                    <span className="flex flex-col">
                        <span className="font-bold">ช่วงนอกเวลาทำการ</span>
                        <span>จันทร์-อาทิตย์ เวลาทำการ 00:00 - 07:59(ค่าบริการ ฿1,000/ทริป*)จันทร์-อาทิตย์ เวลาทำการ 20:00 - 23:59 <br/>
                            (ค่าบริการ ฿400/ทริป*)*ระบบคำนวณให้อัตโนมัติ</span>
                    </span>
                    </div>
                    <p className="mb-2">
                        <strong>จุดรับรถ:</strong> พื้นที่รับส่ง
                                                เซ็นทรัล ลาดพร้าว: ค่าส่ง-รับรถ 200 บาท (ต่อเที่ยว)<br/>
                                                MRT ลาดพร้าว: ค่าส่ง-รับรถ 100 บาท (ต่อเที่ยว)<br/>
                                                เซ็นทรัล ปิ่นเกล้า: ค่าส่งรถ 500 บาท, ค่ารับรถ 300 บาท<br/>
                                                สุขุมวิท 13 (ใกล้ BTS นานา): ค่าส่งรถ 300 บาท, ค่ารับรถ 200 บาท<br/>
                                                BTS อ่อนนุช: ค่าส่งรถ 300 บาท, ค่ารับรถ 200 บาท<br/>
                                                สนามบินดอนเมือง: ค่าส่ง-รับรถ 100 บาท (ต่อเที่ยว)<br/>
                                                สถานีรถไฟ หัวลำโพง: ค่าส่งรถ 300 บาท, ค่ารับรถ 200 บาท<br/>
                                                ลาดพร้าว 122 (ซ.มหาดไทย): ค่าส่ง-รับรถ 300 บาท (ต่อเที่ยว)<br/>
                                                กรุงเทพกรีฑา: ค่าส่งรถ 400 บาท, ค่ารับรถ 300 บาท<br/>
                                                แยกติวานนท์: ค่าส่ง-รับรถฟรีวงเวียนพระราม 5: ค่าส่ง-รับรถ 50 บาท (ต่อเที่ยว)<br/>
                                                MRT ศูนย์ราชการนนทบุรี: ค่าส่ง-รับรถฟรี<br/>
                                                สำนักงานสลากกินแบ่งรัฐบาล: ค่าส่ง-รับรถฟรีโรบินสัน<br/> 
                                                ศรีสมาน: ค่าส่งรถ 300 บาท, ค่ารับรถ 200 บาท<br/>
                                                เดอะมอลล์ งามวงศ์วาน: ค่าส่ง-รับรถฟรี<br/>
                                                เซ็นทรัล รัตนาธิเบศร์: ค่าส่ง-รับรถ 50 บาท (ต่อเที่ยว)<br/>
                                                เตาปูน: ค่าส่ง-รับรถ 50 บาท (ต่อเที่ยว)<br/>
                                                ถนน เพชรบุรี: ค่าส่ง-รับรถ 200 บาท (ต่อเที่ยว)<br/>
                                                เซ็นทรัล บางนา: ค่าส่งรถ 400 บาท, ค่ารับรถ 300 บาทBTS<br/> 
                                                เอกมัย: ค่าส่ง-รับรถ 200 บาท (ต่อเที่ยว)<br/>
                                                วงเวียนใหญ่: ค่าส่ง-รับรถ 350 บาท (ต่อเที่ยว)<br/>
                                                เมืองทองธานี: ค่าส่งรถ 100 บาท, ค่ารับรถ 50 บาท<br/>
                                                ลาดกระบัง: ค่าส่ง-รับรถ 500 บาท (ต่อเที่ยว)<br/>
                                                หทัยราษฎร์: ค่าส่ง-รับรถ 300 บาท (ต่อเที่ยว)<br/>
                                                BTS หมอชิต: ค่าส่งรถ 200 บาท, ค่ารับรถ 100 บาทBTS<br/> 
                                                วุฒากาศ: ค่าส่ง-รับรถ 500 บาท (ต่อเที่ยว)<br/>
                                                ถนน เทพารักษ์: ค่าส่งรถ 500 บาท, ค่ารับรถ 300 บาท<br/>
                                                เมกา บางนา: ค่าส่งรถ 500 บาท, ค่ารับรถ 300 บาท<br/>
                                                โลตัส นวมินทร์: ค่าส่ง-รับรถ 350 บาท (ต่อเที่ยว)<br/>
                                                มหาวิทยาลัยกรุงเทพ: ค่าส่งรถ 500 บาท, ค่ารับรถ 3,000 บาท<br/>
                                                ธรรมศาสตร์ รังสิต: ค่าส่งรถ 300 บาท, ค่ารับรถ 400 บาท<br/>
                                                MRT รัชดาภิเษก/ห้วยขวาง: ค่าส่ง-รับรถ 200 บาท (ต่อเที่ยว)<br/>
                                                เคหะร่มเกล้า: ค่าส่ง-รับรถ 500 บาท (ต่อเที่ยว)<br/>
                                                ตั้งฮั่วเส็ง บางลำพู: ค่าส่ง-รับรถ 500 บาท (ต่อเที่ยว)<br/>
                                                ฟิวเจอร์พาร์ค รังสิต: ค่าส่ง-รับรถ 500 บาท (ต่อเที่ยว)<br/>
                                                BTS สำโรง: ค่าส่ง-รับรถ 300 บาท (ต่อเที่ยว)<br/>
                                                BTS กรุงธนบุรี: ค่าส่ง-รับรถ 300 บาท (ต่อเที่ยว)<br/>
                                                สาขาถนนนาราธิวาสราชนครินทร์: ค่าส่งรถ 500 บาท, ค่ารับรถ 350 บาท<br/>
                                                เดอะมอลล์ บางแค: ค่าส่ง-รับรถ 500 บาท (ต่อเที่ยว)<br/>
                                                MRT ลุมพินี: ค่าส่ง-รับรถ 300 บาท (ต่อเที่ยว)<br/>
                                                ซีคอนสแควร์ ศรีนครินทร์: ค่าส่ง-รับรถ 300 บาท (ต่อเที่ยว)<br/>
                                                เซ็นทรัล พระราม 3: ค่าส่ง-รับรถ 300 บาท (ต่อเที่ยว)<br/>
                                                BTS พระโขนง: ค่าส่งรถ 400 บาท, ค่ารับรถ 200 บาท<br/>
                                                ศรีนครินทร์ พัฒนาการ: ค่าส่ง-รับรถ 400 บาท (ต่อเที่ยว)<br/>
                                                ซีคอนสแควร์ บางแค: ค่าส่งรถ 300 บาท, ค่ารับรถ 350 บาท
                    </p>
                </section>

                {/* Booking Conditions Section */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">ข้อตกลงและเงื่อนไข</h2> <br/>
                    <h2 className="text-xl font-bold mb-4 -mt-5">การจอง</h2>
                    <ul className="list-disc ml-6">
                    <li className="flex items-center space-x-2">
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.375 12.25L7.4375 15.3125L16.625 5.6875" stroke="#41B95B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                            <span>การันตีได้รถคันที่เลือก</span>
                        </li>
                        <li className="flex items-center space-x-2">
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.375 12.25L7.4375 15.3125L16.625 5.6875" stroke="#41B95B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                            <span>เปลี่ยนแปลงข้อมูลตามเงื่อนไขที่กำหนด</span>
                        </li>
                    </ul>
                </section>

                {/* Payment Section */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">การชำระเงิน</h2>
                    <p>
                        <span className='list-disc ml-11'> • ชำระค่าเช่าบางส่วนเมื่อทำการจองและชำระส่วนที่เหลือ ณ วันรับรถ</span> <br />
                        <span className='list-disc ml-11'> • ช่องทางการชำระเงินตอนรับรถ เงินสด, โอนเงิน</span> 
                    </p>
                </section>

                {/* Car Return Section */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">การส่งคืนรถ</h2>
                    <span className='list-disc ml-11'> • ชำระค่าเช่าบางส่วนเมื่อทำการจองและชำระส่วนที่เหลือ ณ วันรับรถ</span> <br/>
                    <span className='list-disc ml-11'> • ช่องทางการชำระเงินตอนรับรถ เงินสด, โอนเงิน</span>
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


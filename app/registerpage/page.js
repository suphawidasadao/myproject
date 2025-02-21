"use client";

import Image from 'next/image';

export default function RegisterPage() {
    return (
        <>
            <div className="relative w-full h-screen">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/bg.svg"
                        alt="Background Image"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>

                {/* Login Form */}
                <div className="relative z-10 flex items-center justify-center min-h-screen bg-black bg-opacity-50">
                    <div className="bg-white shadow-lg rounded-lg p-4 w-full max-w-sm">
                        {/* Logo */}
                        <div className="flex justify-between items-center mb-4">
                            <Image
                                src="/logo.svg"
                                alt="logo"
                                width={100}
                                height={100}
                                className="object-cover"
                            />
                        </div>

                        {/* Header */}
                        <div className="mb-4">
                            <h2 className="text-md font-bold text-gray-800">ยินดีต้อนรับกลับมา!</h2>
                            <p className="text-gray-600 text-xs">เข้าสู่ระบบสมาชิกติดตามสถานะกับเราได้ง่ายกว่า</p>
                        </div>

                        {/* Email Input */}
                        <form className="flex justify-between">
                            <div>
                                <input
                                    type="text"
                                    placeholder="ชื่อ"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="นามสกุล"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
                                />
                            </div>
                        </form>

                

                        {/* Other Login Options */}
                        <div className="space-y-3 my-4">
                            <div>
                                <input
                                    type="text"
                                    placeholder="ชื่อแสดงบนโปรไฟล์"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="อีเมล"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
                                />
                            </div>
                            <div>
                                <input
                                    type="password"
                                    placeholder="รหัสผ่าน"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
                                />
                            </div>
                        </div>

                        {/* Signup */}
                        <div className="mt-4 text-center border border-gray-300 rounded-lg py-1">
                            <a href="#" className="text-blue-500 font-medium hover:underline text-sm">
                                สมัครสมาชิกเลย
                            </a>
                        </div>

                        {/* Terms */}
                        <div className="mt-3 text-center text-[10px] text-gray-500">
                            การลงชื่อสมัครใช้บริการ DriveFlex ท่านได้รับทราบและตกลงตาม
                            <a href="#" className="text-blue-500 hover:underline">
                                เงื่อนไขการให้บริการและนโยบายความเป็นส่วนตัว
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

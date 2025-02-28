"use client"

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();
    const { data: session, status } = useSession();

    useEffect(() => {
        if (status === 'authenticated') {
            // ตรวจสอบ role ของผู้ใช้ ถ้าเป็น admin ไปที่ dashboard, ไม่ใช่ไปที่ profilepage
            if (session?.user?.role === "admin") {
                router.push('/admin/dashboard');
            } else {
                router.push('/profilepage');
            }
        }
    }, [status, router, session]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await signIn("credentials", {
                email,
                password,
                redirect: false
            });

            if (res.error) {
                setError("Invalid credentials");
                return;
            }

            // หลังจาก login สำเร็จ การ redirect จะถูกควบคุมผ่าน useEffect ที่ตรวจสอบ session
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="relative h-screen overflow-hidden">
            <Navbar />
            <div className="relative w-full h-screen">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/bg.svg"
                        alt="Background Image"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>

                <div className="relative z-10 flex items-center justify-center min-h-screen bg-black bg-opacity-50">
                    <div className="bg-white shadow-lg rounded-lg p-4 w-full max-w-sm">
                        <div className="flex justify-between items-center mb-4">
                            <Image
                                src="/logo.svg"
                                alt="logo"
                                width={100}
                                height={100}
                                className="object-cover"
                            />
                        </div>

                        <div className="mb-4">
                            <h2 className="text-md font-medium text-gray-800">ยินดีต้อนรับกลับมา!</h2>
                            <p className="text-gray-600 text-xs">เข้าสู่ระบบสมาชิกติดตามสถานะกับเราได้ง่ายกว่า</p>
                        </div>
                        <form onSubmit={handleSubmit}>
                            {error && (
                                <div className="bg-red-500 w-fit text-xs text-white py-1 px-3 rounded-md mt-2 mb-2">
                                    {error}
                                </div>
                            )}
                            <div className="space-y-3 pb-4">
                                <div>
                                    <input
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="email"
                                        placeholder="อีเมล"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        onChange={(e) => setPassword(e.target.value)}
                                        type="password"
                                        placeholder="รหัสผ่าน"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
                                        required
                                    />
                                </div>
                            </div>

                            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 text-sm ">
                                เข้าสู่ระบบ
                            </button>
                        </form>

                        <div className="mt-3 text-center text-[10px] text-gray-500">
                            การลงชื่อสมัครใช้บริการ DriveFlex ท่านได้รับทราบและตกลงตาม
                            <a href="#" className="text-blue-500 hover:underline">
                                เงื่อนไขการให้บริการและนโยบายความเป็นส่วนตัว
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

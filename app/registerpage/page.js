"use client";

import Image from 'next/image';
import Navbar from '../components/navbar';
import { useState, useEffect } from 'react';
import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const { data: session, status } = useSession();
    const router = useRouter();

    // ใช้ useEffect เพื่อตรวจสอบ session เมื่อ login แล้ว
    useEffect(() => {
        if (status === "authenticated") {
            // ตรวจสอบ role ถ้า admin redirect ไป dashboard
            if (session?.user?.role === "admin") {
                router.push('/dashboard');
            } else {
                router.push('/profilepage');
            }
        }
    }, [status, router, session]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!firstname || !lastname || !name || !email || !password || !confirmPassword) {
            setError("Please complete all inputs.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match!");
            return;
        }

        try {
            // ตรวจสอบว่าผู้ใช้มีอยู่แล้วหรือไม่
            const resCheckUser = await fetch("/api/checkUser", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email })
            });

            const { user } = await resCheckUser.json();
            if (user) {
                setError("User already exists!");
                return;
            }

            // สมัครสมาชิกใหม่
            const res = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    firstname, lastname, name, email, password
                })
            });

            if (res.ok) {
                // สมัครเสร็จแล้ว ล็อกอินอัตโนมัติ
                const loginRes = await signIn("credentials", {
                    redirect: false,
                    email: email,
                    password: password,
                });

                if (!loginRes.error) {
                    // หลังจาก login แล้ว useEffect จะคอยตรวจสอบ session และทำการ redirect ตาม role
                    console.log("Logged in successfully");
                } else {
                    console.log("Login failed after registration:", loginRes.error);
                }
            } else {
                console.log("User registration failed.");
            }

        } catch (error) {
            console.log("Error during registration: ", error);
        }
    };

    return (
        <>
            <div className="relative h-screen overflow-hidden">
                <Navbar />

                <div className="relative w-full h-full">
                    <div className="absolute inset-0 z-0">
                        <Image src="/bg.svg" alt="Background Image" layout="fill" objectFit="cover" />
                    </div>

                    <div className="relative z-10 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
                        <div className="bg-white shadow-lg rounded-lg p-4 w-full max-w-sm">
                            <div className="flex justify-between items-center mb-4">
                                <Image src="/logo.svg" alt="logo" width={100} height={100} className="object-cover" />
                            </div>

                            <div className="mb-4">
                                <h2 className="text-md font-bold text-gray-800">ยินดีต้อนรับ!</h2>
                                <p className="text-gray-600 text-xs">สมัครสมาชิกเพื่อติดตามสถานะกับเรา</p>
                            </div>

                            <form onSubmit={handleSubmit}>
                                {error && (
                                    <div className="bg-red-500 w-fit text-xs text-white py-1 px-3 rounded-md mt-2 mb-2">
                                        {error}
                                    </div>
                                )}

                                <div className="flex justify-between space-x-2">
                                    <input
                                        onChange={(e) => setFirstName(e.target.value)}
                                        type="text"
                                        placeholder="ชื่อ"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
                                    />
                                    <input
                                        onChange={(e) => setLastName(e.target.value)}
                                        type="text"
                                        placeholder="นามสกุล"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
                                    />
                                </div>

                                <div className="space-y-3 my-4">
                                    <input
                                        onChange={(e) => setName(e.target.value)}
                                        type="text"
                                        placeholder="ชื่อแสดงบนโปรไฟล์"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
                                    />
                                    <input
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="email"
                                        placeholder="อีเมล"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
                                    />
                                    <input
                                        onChange={(e) => setPassword(e.target.value)}
                                        type="password"
                                        placeholder="รหัสผ่าน"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
                                    />
                                    <input
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        type="password"
                                        placeholder="ยืนยันรหัสผ่านอีกครั้ง"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
                                    />
                                </div>

                                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 text-sm">
                                    สมัครสมาชิก
                                </button>
                            </form>

                            <div className="mt-3 text-center text-[10px] text-gray-500">
                                การลงทะเบียนแสดงว่าคุณยอมรับ
                                <a href="#" className="text-blue-500 hover:underline"> เงื่อนไขและนโยบาย </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

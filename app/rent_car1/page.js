"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const RentCarPage1 = () => {
    const { data: session } = useSession();
    const searchParams = useSearchParams();
    const router = useRouter();

    // ดึงค่ารถจาก URL
    const carId = searchParams.get("carId");
    const name = searchParams.get("name");
    const price = searchParams.get("price");
    const province = searchParams.get("province");

    // ดึงค่าของ pickup และ return
    const pickupDateStr = searchParams.get("pickup");
    const returnDateStr = searchParams.get("return");

    // ตั้งค่าเริ่มต้นสำหรับฟอร์ม
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        details: ""
    });

    const [carData, setCarData] = useState(null);  // เพิ่มตัวแปรสำหรับเก็บข้อมูลรถ

    useEffect(() => {
        if (session) {
            setFormData((prevFormData) => ({
                ...prevFormData,
                firstName: session.user?.name || "",
                lastName: session.user?.lastname || "",
                email: session.user?.email || "",
                phone: session.user?.phone || ""
            }));
        }
    }, [session]);

    useEffect(() => {
        if (!carId) return;
        
        fetch(`/api/cars/${carId}`)
            .then(res => res.json())
            .then(data => {
                setCarData(data.car || null);  // เก็บข้อมูลรถ
            })
            .catch(error => {
                console.error("❌ Fetch error:", error);
            });
    }, [carId]);

    // ฟังก์ชันอัปเดตค่าฟอร์ม
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // ฟังก์ชันเมื่อกดปุ่ม "ยืนยันข้อมูล"
    const handleConfirm = () => {
        if (formData.firstName && formData.lastName && formData.email && formData.phone) {
            // เมื่อคลิก ยืนยันข้อมูล ให้ไปที่ rent_car2 พร้อมวันที่ pickup และ return
            router.push(`/rent_car2?carId=${carId}&name=${name}&price=${price}&province=${province}&pickup=${pickupDateStr}&return=${returnDateStr}&firstName=${formData.firstName}&lastName=${formData.lastName}&email=${formData.email}&phone=${formData.phone}&details=${formData.details}`);
        }
    };

    return (
        <div className="relative">
            <Navbar />

            <div className="container mx-auto px-24 mt-4 flex gap-4">
                {/* ส่วนแสดงข้อมูลรถ */}
                <div className="bg-white p-4 rounded-lg shadow-md w-96">
                    <h2 className="text-base font-bold mb-4 text-gray-800">สรุปทริปการเดินทาง</h2>
                    <span className="text-sm"><strong>ชื่อรถ:</strong> {name}</span>
                    <div className="flex items-center mb-4 mt-2">
                        {carData && carData.images && carData.images[0] ? (
                            <img
                                src={carData.images[0]}  // แสดงรูปภาพจากข้อมูล carData
                                alt={carData.name}
                                className="w-32 h-26 rounded-md"
                            />
                        ) : (
                            <img
                                src="/placeholder-car.jpg"  // ใช้ placeholder หากไม่มีภาพ
                                alt="Placeholder Car"
                                className="w-32 h-26 rounded-md"
                            />
                        )}
                        
                    </div>
                    <span className="text-sm"><strong>จังหวัด:</strong> {province}</span>
                    <br/><span className="text-sm"><strong>ราคา:</strong> ฿{price} / วัน</span>
                </div>

                {/* ส่วนกรอกข้อมูล */}
                <div className="bg-white p-4 rounded-lg shadow-md w-full">
                    <h3 className="text-base font-bold mb-4 text-gray-800">กรอกข้อมูล</h3>

                    <form className="flex flex-col gap-4">
                        <input type="text" name="firstName" placeholder="ชื่อจริง" value={formData.firstName} onChange={handleChange} className="p-2 border rounded-md text-xs" />
                        <input type="text" name="lastName" placeholder="นามสกุล" value={formData.lastName} onChange={handleChange} className="p-2 border rounded-md text-xs" />
                        <input type="email" name="email" placeholder="อีเมล" value={formData.email} onChange={handleChange} className="p-2 border rounded-md text-xs" />
                        <input type="text" name="phone" placeholder="เบอร์โทรศัพท์" value={formData.phone} onChange={handleChange} className="p-2 border rounded-md text-xs" />
                        <input type="text" name="details" placeholder="รายละเอียดเพิ่มเติม (ถ้ามี)" value={formData.details} onChange={handleChange} className="p-2 border rounded-md text-xs" />
                    </form>
                </div>
            </div>

            {/* ปุ่มยืนยัน */}
            <div className="bg-white border p-4 rounded-md shadow-md mt-4 w-[555px] mx-[465px]">
                <p className="text-center text-black mb-4 text-xs">
                    กรุณาตรวจสอบข้อมูลการเช่าให้ครบถ้วนก่อนการกดยืนยัน
                </p>
                <button
                    type="submit"
                    onClick={handleConfirm}
                    className={`text-xs p-2 rounded-md w-full block mx-auto ${formData.firstName && formData.lastName && formData.email && formData.phone
                            ? "bg-blue-500 text-white hover:bg-blue-600"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                    disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.phone}
                >
                    ยืนยันข้อมูล
                </button>
            </div>

            <div className="mt-20">
                <Footer />
            </div>
        </div>
    );
};

export default RentCarPage1;

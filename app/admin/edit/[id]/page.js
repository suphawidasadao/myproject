"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Sidebar from '@/app/components/sidebar';
import Image from 'next/image';

function EditPostPage({ params }) {
    const { id } = React.use(params);
    const [postData, setPostData] = useState("");
    const [newname, setNewName] = useState("");
    const [newtype, setNewType] = useState("");
    const [newtransmission, setNewTransmission] = useState("");
    const [newseats, setNewSeats] = useState(4);
    const [newfuel, setNewFuel] = useState("");
    const [newengine, setNewEngine] = useState("");
    const [newdoors, setNewDoors] = useState(0);
    const [newluggage, setNewLuggage] = useState(0);
    const [newprice, setNewPrice] = useState("");
    const [newprovince, setNewProvince] = useState("");
    const [newimages, setNewImages] = useState([]); // Store new image URLs
    const [newlocations, setNewLocations] = useState(""); 
    const [newfeatures, setNewFeatures] = useState(""); 
    const [newsafety, setNewSafety] = useState(""); 

    const router = useRouter();

    const getPostById = async (id) => {
        try {
            const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
                method: "GET",
                cache: "no-store"
            })

            if (!res.ok) {
                throw new Error("Failed to fetch post");
            }

            const data = await res.json();
            setPostData(data.post);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (id) {
            getPostById(id);
        }
    }, [id]);

    // Handle image removal
    const handleRemoveImage = (index, type) => {
        if (type === "old") {
            const updatedImages = postData.images.filter((_, i) => i !== index);
            setPostData({ ...postData, images: updatedImages });
        } else {
            const updatedNewImages = newimages.filter((_, i) => i !== index);
            setNewImages(updatedNewImages);
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const combinedImages = [...postData.images, ...newimages];
        try {
            const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    newname, newtype, newtransmission, newseats, newfuel, newengine, newdoors, newluggage,
                    newprice, newprovince, combinedImages, newlocations, newfeatures, newsafety
                })
            });

            if (!res.ok) {
                throw new Error("Failed to update post");
            }

            router.push("/admin/carmanagement"); // Navigate to car management
        } catch (error) {
            console.log(error);
        }
    };

    // Handle image file input
    const handleImageChange = (e) => {
        const selectedImages = Array.from(e.target.files);
        const imageUrls = selectedImages.map((file) => URL.createObjectURL(file));
        setNewImages(imageUrls);
    };

    return (
        <div className="relative bg-gray-100 min-h-screen flex">
            <Sidebar />
            <div className="p-6 w-full sm:w-4/5 md:w-3/4 mx-auto">
                <h3 className="text-xl font-semibold mb-8 text-gray-800">Edit a New Car Rental Post</h3>
                <ul className="mx-auto mb-4 flex space-x-2 mt-5 text-sm text-gray-500">
                    <li>
                        <Link href="/admin/carmanagement" className="hover:text-blue-600">Car Management</Link>
                    </li>
                    <li>&gt;</li>
                    <li>
                        <Link href="/edit" className="text-blue-600">Edit</Link>
                    </li>
                </ul>
                <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-lg shadow-md">
                    <div className="flex flex-col gap-6">
                        {/* Car Name */}
                        <label className="block text-sm font-medium">Car Name</label>
                        <input
                            value={newname}
                            onChange={(e) => setNewName(e.target.value)}
                            type="text"
                            placeholder={postData.name}
                            className="w-full p-2 border border-gray-300 rounded text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        
                        {/* Display Old Images */}
                        {postData?.images?.length > 0 && (
                            <div className="mt-4 flex gap-4 flex-wrap">
                                {postData.images.map((image, index) => (
                                    <div key={index} className="relative">
                                        <Image
                                            src={image}
                                            alt={`Old Car Image ${index}`}
                                            width={200}
                                            height={200}
                                            className="object-cover rounded"
                                        />
                                        {/* Remove old image button */}
                                        <button
                                            className="absolute top-1 right-1 bg-gray-400 text-gray-200 hover:text-gray-500 rounded-full w-5 h-5 flex items-center justify-center"
                                            onClick={() => handleRemoveImage(index, "old")}
                                        >
                                            X
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Display New Images */}
                        {newimages.length > 0 && (
                            <div className="mt-4 flex gap-4 flex-wrap">
                                {newimages.map((newimage, index) => (
                                    <div key={index} className="relative">
                                        <Image
                                            src={newimage}
                                            alt={`New Car Image ${index}`}
                                            width={200}
                                            height={200}
                                            className="object-cover rounded"
                                        />
                                        {/* Remove new image button */}
                                        <button
                                            className="absolute text-base top-1 right-1 bg-gray-400 text-gray-200 hover:text-gray-500 rounded-full w-5 h-5 flex items-center justify-center"
                                            onClick={() => handleRemoveImage(index, "new")}
                                        >
                                            X
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Image Upload Input */}
                        <label
                            htmlFor="car-images"
                            className="w-24 cursor-pointer text-center rounded border-2 border-gray-500 px-3 py-2 text-xs bg-gray-300 hover:bg-gray-500"
                        >
                            Choose File
                        </label>
                        <input
                            type="file"
                            id="car-images"
                            multiple
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                        />

                        {/* ประเภทรถ */}
                        <label className="block text-sm font-medium">ประเภท</label>
                        <select
                            value={newtype || postData.type}
                            onChange={(e) => setNewType(e.target.value)}
                            className="w-full p-2 border rounded text-xs"
                        >
                            <option value="">-- เลือกประเภทรถ --</option>
                            <option value="Sedan">Sedan</option>
                            <option value="SUV">SUV</option>
                            <option value="Truck">Pickup</option>
                            <option value="Van">Van</option>
                        </select>

                        {/* ระบบเกียร์ */}
                        <label className="block text-sm font-medium">ระบบเกียร์</label>
                        <select
                            value={newtransmission || postData.transmission}
                            onChange={(e) => setNewTransmission(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="" disabled>
                                เลือกระบบเกียร์
                            </option>
                            <option value="manual">เกียร์ธรรมดา</option>
                            <option value="automatic">เกียร์อัตโนมัติ</option>
                        </select>

                        {/* จำนวนที่นั่ง */}
                        <label className="block text-sm font-light">จำนวนที่นั่ง</label>
                        <input
                            value={newseats}
                            onChange={(e) => setNewSeats(Number(e.target.value))}
                            type="number"
                            placeholder={postData.seats}
                            className="w-full p-2 border border-gray-300 rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        {/* ระบบเชื้อเพลิง */}
                        <label className="block text-sm font-light">ระบบเชื้อเพลิง</label>
                        <select
                            value={newfuel || postData.fuel}
                            onChange={(e) => setNewFuel(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">-- เลือกประเภทเชื้อเพลิง --</option>
                            <option value="เบนซิน">เบนซิน</option>
                            <option value="ดีเซล">ดีเซล</option>
                            <option value="ไฟฟ้า">ไฟฟ้า</option>
                            <option value="แก๊ส (LPG/NGV)">แก๊ส (LPG/NGV)</option>
                        </select>

                        {/* ความจุเครื่องยนต์ พร้อมหน่วย cc */}
                        <label className="block text-sm font-light">ความจุเครื่องยนต์</label>
                        <div className="relative">
                            <input
                                value={newengine}
                                onChange={(e) => setNewEngine(parseInt(e.target.value) || 0)}
                                type="text" // เปลี่ยนจาก number เป็น text
                                inputMode="numeric"
                                pattern="[0-9]*"
                                placeholder={postData.engine}
                                className="w-full p-2 border border-gray-300 rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12 appearance-none"
                            />
                            <span className="absolute inset-y-0 right-2 flex items-center text-gray-500 text-xs">
                                cc
                            </span>
                        </div>

                        {/* จำนวนประตู */}
                        <label className="block text-sm font-light">จำนวนประตู</label>
                        <input
                            value={newdoors || postData?.doors || 0}  // ใช้ค่า default 0 หาก postData?.doors ยังไม่มี
                            onChange={(e) => setNewDoors(Number(e.target.value))}
                            type="number"
                            placeholder={postData?.doors || 0}  // ใช้ค่า default 0 หากไม่มี
                            className="w-full p-2 border border-gray-300 rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        {/* จำนวนสัมภาระ */}
                        <label className="block text-sm font-light">จำนวนสัมภาระ</label>
                        <input
                            value={newluggage || postData?.luggage || 0}  // ใช้ค่า default 0 หาก postData?.luggage ยังไม่มี
                            onChange={(e) => setNewLuggage(Number(e.target.value))}
                            type="number"
                            placeholder={postData?.luggage || 0}  // ใช้ค่า default 0 หากไม่มี
                            className="w-full p-2 border border-gray-300 rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        { /* จังหวัด */}
                        <label className="block text-sm font-light">จังหวัด</label>
                        <input
                            value={newprovince}
                            onChange={(e) => setNewProvince(e.target.value)}
                            type="text"
                            placeholder={postData.province}
                            className="w-full p-2 border border-gray-300 rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        {/* ราคา */}
                        <label className="block text-sm font-light">ราคา (บาท/วัน)</label>
                        <input
                            value={newprice}
                            onChange={(e) => setNewPrice(Number(e.target.value))}
                            type="number"
                            placeholder={postData.price}
                            className="w-full p-2 border border-gray-300 rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        {/* Locations */}
                        <label className="block text-sm font-medium">พื้นที่รับส่ง</label>
                        <input
                            value={newlocations}
                            onChange={(e) => setNewLocations(e.target.value)}
                            type="text"
                            placeholder={Array.isArray(postData.locations)
                                ? postData.locations.map(location => location.place).join(", ")  // ดึงแค่ชื่อสถานที่
                                : postData.locations || 'กรุณากรอกที่ตั้งรถ'}
                            className="w-full p-2 border border-gray-300 rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        {/* Features */}
                        <label className="block text-sm font-medium">คุณสมบัติ</label>
                        <input
                            value={newfeatures}
                            onChange={(e) => setNewFeatures(e.target.value)}
                            type="text"
                            placeholder={postData.features}
                            className="w-full p-2 border border-gray-300 rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        {/* Safety */}
                        <label className="block text-sm font-medium">ระบบความปลอดภัย</label>
                        <input
                            value={newsafety}
                            onChange={(e) => setNewSafety(e.target.value)}
                            type="text"
                            placeholder={postData.safety}
                            className="w-full p-2 border border-gray-300 rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full p-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Update Post
                    </button>
                </form>
            </div>
        </div>
    );
}

export default EditPostPage;

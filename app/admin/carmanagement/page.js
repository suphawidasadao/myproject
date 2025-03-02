"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Sidebar from "../../components/sidebar";
import Delete from "../Delete";

export default function Carmanagement() {
    const [postData, setPostData] = useState([]);

    const getPosts = async () => {
        try {
            console.log("📡 กำลังโหลดข้อมูลรถจาก API...");
            const res = await fetch("/api/cars", {
                method: "GET",
                cache: "no-store",
            });

            if (!res.ok) {
                throw new Error("Failed to fetch posts");
            }

            const data = await res.json();
            console.log("📦 ข้อมูลที่ได้รับ:", data);
            setPostData(data.posts || []);
        } catch (error) {
            console.log("❌ Error loading posts: ", error);
        }
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div className="relative bg-gray-100 min-h-screen flex">
            <Sidebar />
            <div className="flex-1 p-6">
                <header className="bg-white p-4 shadow rounded-md">
                    <h1 className="text-xl font-bold mb-2">Car Management</h1>
                    <p className="text-base">Manage the cars available for rent</p>
                </header>

                <button className="bg-blue-500 text-white text-sm px-3 py-2 rounded my-4 hover:bg-blue-600">
                    <Link href="/admin/create">Add New Car</Link>
                </button>

                <div className="bg-white p-4 rounded-lg shadow-md">
                    {postData.length > 0 ? (
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-blue-500 text-white">
                                    <th className="p-2 text-left font-medium">Car Name</th>
                                    <th className="p-2 text-left font-medium">Type</th>
                                    <th className="p-2 text-left font-medium">Price/Day</th>
                                    <th className="p-2 text-left font-medium">Status</th>
                                    <th className="p-2 text-left font-medium">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {postData.map((val) => (
                                    <tr key={val._id} className="border-t">
                                        <td className="p-2 text-sm">{val.name}</td>
                                        <td className="p-2 text-sm">{val.type}</td>
                                        <td className="p-2 text-sm">{val.price} ฿</td>
                                        <td className="p-2 text-sm">
                                            {val.status === "Available" ? (
                                                <span className="text-green-600">Available</span>
                                            ) : (
                                                <span className="text-red-600">Booked</span>
                                            )}
                                        </td>
                                        <td className="p-2 space-x-2 text-xs">
                                            <Link className="bg-gray-500 text-white px-2 py-1 rounded" href={`/admin/edit/${val._id}`}>
                                                Edit
                                            </Link>
                                            <Delete id={val._id} />
                                            <Link className="bg-blue-500 text-white px-2 py-1 rounded" href={`/admin/details/${val._id}`}>
                                                Details
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    ) : (
                        <p className="bg-gray-300 p-3 my-3 text-center"></p>
                    )}
                </div>
            </div>
        </div>
    );
}

"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Sidebar from '../../components/sidebar';

export default function Carmanagement() {

  const [postData, setPostData] = useState([]);

  console.log(postData);

  const getPosts = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/posts", {
        method: "GET",
        cache: "no-store"
      })

      if (!res.ok) {
        throw new Error("Failed to fetch posts")
      }

      const data = await res.json();
      setPostData(data.posts);

    } catch (error) {
      console.log("Error loading posts: ", error);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="relative bg-gray-100 min-h-screen flex">
      <Sidebar />

      <div className="flex-1 p-6">
        <h2 className="text-sm font-bold mb-2">Car Management</h2>
        <p className="text-gray-600 mb-4">Manage the cars available for rent</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-600">
          <Link href="/admin/create">Add New Car</Link>
        </button>
        <div className="bg-white p-4 rounded-lg shadow-md">
        {postData && postData.length > 0 ? (
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-500 text-white">
                  <th className="p-2 text-left">Car Name</th>
                  <th className="p-2 text-left">Type</th>
                  <th className="p-2 text-left">Price/Day</th>
                  <th className="p-2 text-left">Status</th>
                  <th className="p-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {postData.map(val => (
                  <tr key={val._id} className="border-t">
                    <td className="p-2">{val.name}</td>
                    <td className="p-2">{val.type}</td>
                    <td className="p-2">{val.price} ฿</td>
                    <td className="p-2 text-green-600">{val.status}</td>
                    <td className="p-2 space-x-2">
                      <Link className="bg-gray-500 text-white px-2 py-1 rounded" href={`/admin/edit/${val._id}`}>Edit</Link>
                      <Link className="bg-red-500 text-white px-2 py-1 rounded" href={`/delete/${val._id}`}>Delete</Link>
                      <Link className="bg-blue-500 text-white px-2 py-1 rounded" href={`/details/${val._id}`}>Details</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className='bg-gray-300 p-3 my-3'>
              You do not have any cars yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
"use client"

import React from 'react'

function Delete({ id }) {

  const handleDelete = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/posts?id=${id}`, {
        method: "DELETE"
      })

      if (res.ok) {
        window.location.reload();
      }
    }
  }

  return (
    <a onClick={handleDelete} className="bg-red-500 text-white px-2 py-1 rounded cursor-pointer"> Delete </a>
  )
}

export default Delete
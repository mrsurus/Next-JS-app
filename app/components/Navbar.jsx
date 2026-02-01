'use client'
import React from 'react'

import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();
    if(pathname.includes('dashboard')){
        return null
    }
  return (
    <nav>
          <div className="text-red-600 flex  gap-4">

            <Link href='/' className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-200 text-center">Home</Link>
            <Link href='/dashboard' className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-200 text-center">dashboard</Link>
            <Link href='/users' className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-200 text-center">users</Link>
            <Link href='/users/add' className="px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition-colors duration-200 text-center">add user</Link>
            <Link href='/posts' className="px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition-colors duration-200 text-center">Go to post Page</Link>
          </div>
        </nav>
  )
}

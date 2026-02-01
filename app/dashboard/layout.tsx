// src/app/dashboard/layout.tsx
'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function DashboardLayout({children}: {children: React.ReactNode}){
    const router = useRouter()
    const isRouter = true
    const handaleRouting = () => {
        if(isRouter){
        router.push('/dashboard/setting')
        }else{
        router.push('/')
        }
    }

    return (
        <div className="flex">
            <nav className="w-64 bg-gray-100 p-4"> 
                <ul>
                    <li><Link href="/dashboard">Overview</Link></li>
                    <li><Link href="/dashboard/setting">Settings</Link></li>
                    <li onClick={handaleRouting}>Settings</li>

                </ul>
            </nav>
            <section className="flex-1 p-8">
                {children} {/* This is where page.tsx content will appear */}
            </section>
        </div>
    )
}
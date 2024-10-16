"use client";
import Image from "next/image";
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-gradient-to-r from-pink-400 to-blue-400 p-4 shadow-lg"> {/* Navbar background with gradient */}
            <nav className="flex items-center justify-between max-w-6xl mx-auto">
                <div className="flex items-center space-x-4"> {/* Left section for logo and title */}
                    <Image 
                        src="/navbarimage.png" 
                        alt="Logo" 
                        width={50} 
                        height={50} 
                        className="rounded-lg"
                    />
                    <span className="text-white text-xl font-bold">Ice Cream Station</span>
                </div>
                
                {/* Hamburger Icon for small screens */}
                <div className="flex md:hidden">
                    <button 
                        onClick={() => setIsOpen(!isOpen)} 
                        className="relative w-6 h-6 text-white focus:outline-none"
                    >
                        {/* Hamburger lines */}
                        <div className={`w-full h-0.5 bg-white transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                        <div className={`w-full h-0.5 bg-white mt-1.5 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
                        <div className={`w-full h-0.5 bg-white mt-1.5 transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
                    </button>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-6"> {/* Right section for navigation links */}
                    <Link href="/" className="text-white">Home</Link>
                    <Link href="/product" className="text-white">Product</Link>
                    <Link href="/location" className="text-white">Our Location</Link>
                </div>

                {/* Mobile Links */}
                {isOpen && (
                    <div className="flex flex-col space-y-2 mt-4 md:hidden"> {/* Mobile menu links */}
                        <Link href="/" className="text-white">Home</Link>
                        <Link href="/product" className="text-white">Product</Link>
                        <Link href="/location" className="text-white">Our Location</Link>
                    </div>
                )}
            </nav>
        </div>
    );
}

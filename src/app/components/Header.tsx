"use client"
import React, { useEffect, useState } from "react";
import { Logo } from './Logo';
import Link from "next/link";


export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect (() =>{
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
    

        window.addEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`
        ${isScrolled && 'bg-black'} fixed top-0 z-50 flex w-full items-center justify-between transition-all bg-black px-4 py-4 lg:px-10 lg:py-6`}>
            <div className="flex items-center space-x-2 md:space-x-4">
            <Link href='/'>
                <Logo />
            </Link>
            {/* <img src="Logo" alt="Netflix width={120} height={120}" /> */}
            <ul className="hidden md:flex md:space-x-8">
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>Latest</li>
            </ul>
            </div>

            <div className="flex items-center space-x-4">
            <p className="hidden cursor-not-allowed lg:inline">Kids</p>
            <img src="https://rb.gy/g1pwyx" alt="" className="cursor-pointer roudend"/>
            </div>
            </header>
    )
}
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
        <header
          className={`${isScrolled && 'bg-black'}
          fixed top-0 z-50
          flex w-full items-center justify-between bg-gradient-to-t from-transparent to-black p-2 px-4 transition-all lg:px-16 lg:py-4`}
        >
          <div className='flex items-center space-x-2 md:space-x-8'>
            <Link href='/'>
              <Logo />
            </Link>
            <NavLinks />
          </div>
          <div className='flex items-center space-x-2 md:space-x-8'>
            <SearchForm
              onSearch={onSearch}
              searchTerm={searchTerm}
              onSearchTermChange={onSearchTermChange}
            />
            <UserProfile />
          </div>
        </header>
      );
    }
}
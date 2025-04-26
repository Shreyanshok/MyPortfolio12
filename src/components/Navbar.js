// components/Navbar.js
"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';
import Image from 'next/image';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [Line,setLine] = useState("Home");
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md dark:bg-gray-900' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center cursor-pointer "  onClick={()=>(setLine("Home"))}>
            <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-violet-400">
             <div className="absolute  bg-blue-600 dark:bg-violet-600 rounded-full blur-xl opacity-20 animate-pulse"></div>
                          <div className="relative rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                            <Image 
                              src="/profile.jpg" 
                              alt="Rachit Gupta" 
                              width={45} 
                              height={45} 
                              className="object-cover"
                              priority
                            />
                            </div>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-2">
              <div className='relative cursor-pointer ' onClick={()=>(setLine("Home"))}>
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-800 dark:text-gray-200 cursor-pointer hover:text-blue-600 dark:hover:text-violet-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </button>
              <div className={`h-1 bg-blue-500 rounded-full transition-transform duration-200 origin-left dark:bg-violet-500 border-t-2 border-violet-600 ${Line === "Home" ? "scale-x-100" : "scale-x-0"} `}>

              </div>
              </div>
<div onClick={()=>(setLine("services"))}  className=' cursor-pointer'>
<button 
                onClick={() => scrollToSection('services')}
                className="text-gray-800 dark:text-gray-200 cursor-pointer hover:text-blue-600 dark:hover:text-violet-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Services
              </button>
              <div className={`h-1 bg-blue-500 rounded-full transition-transform duration-200 origin-left dark:bg-violet-500 border-t-2 border-violet-600 ${Line === "services" ? "scale-x-100" : "scale-x-0"} `}>

              </div>
</div>
             <div onClick={()=>(setLine("projects"))} className=' cursor-pointer'>
              
             <button 
                onClick={() => scrollToSection('projects')}
                className="text-gray-800 dark:text-gray-200 cursor-pointer hover:text-blue-600 dark:hover:text-violet-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Projects
              </button>
              <div className={`h-1 bg-blue-500 rounded-full transition-transform duration-200 origin-left dark:bg-violet-500 border-t-2 border-violet-600 ${Line === "projects" ? "scale-x-100" : "scale-x-0"} `}>

</div>

             </div>
             <div onClick={()=>(setLine("aboutme"))}  className=' cursor-pointer'>

             <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-800 dark:text-gray-200 cursor-pointer hover:text-blue-600 dark:hover:text-violet-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                About Me
              </button>
              <div className={`h-1 bg-blue-500 rounded-full transition-transform duration-200 origin-left dark:bg-violet-500 border-t-2 border-violet-600 ${Line === "aboutme" ? "scale-x-100" : "scale-x-0"} `}>

</div>

             </div>
              
              <a 
                href="https://www.github.com/Rachit3784"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-violet-400 px-2 flex items-center justify-center py-2 rounded-md text-sm font-medium transition-colors"
              >
                <FaGithub className="inline-block mr-1" size={18} />
                GitHub
              </a>
              <button 
                onClick={() =>{ scrollToSection('contact')
                  setLine("")}}
                className="bg-blue-600 hover:bg-blue-700 cursor-pointer dark:bg-violet-600 dark:hover:bg-violet-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact Me
              </button>
              <ThemeToggle />
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-violet-400 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-800"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-800"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-800"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-800"
            >
              About Me
            </button>

            <a 
              href="https://www.github.com/Rachit3784" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-800"
            >
              <FaGithub className="inline-block mr-2" size={18} />
              GitHub
            </a>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium bg-blue-600 dark:bg-violet-600 text-white hover:bg-blue-700 dark:hover:bg-violet-700"
            >
              Contact Me
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
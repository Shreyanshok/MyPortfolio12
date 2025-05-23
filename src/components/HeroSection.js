// components/HeroSection.js
"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Typed from 'typed.js';

const HeroSection = () => {
  const typedElementRef = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'Software Development',
        'Web Development',
        'App Development',
        'Python Programming',
        'C++ Programming'
      ],
      typeSpeed: 30,
      backSpeed: 30,
      backDelay: 1300,
      loop: true,
    };

    if (typedElementRef.current) {
      typed.current = new Typed(typedElementRef.current, options);
    }

    return () => {
      if (typed.current) {
        typed.current.destroy();
      }
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 bg-white dark:bg-gray-900">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 z-0"></div>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between  gap-12 ">
          <div className="flex-1 text-center lg:text-left lg:ml-10 lg:w-[850px] ">
            <h2 className="text-xl font-medium text-blue-600 dark:text-violet-400 mb-2">Hello!</h2>
            <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
              I&apos;m Shreyansh Mishra
            </h1>
            <div className="text-[27px] sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-6">
              <span className="mr-2 ">Skilled in</span>
              <span  ref={typedElementRef} className="text-blue-600 dark:text-violet-400"></span>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
              Passionate about creating beautiful, functional, and user-friendly digital experiences. Let&apos;s build something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-violet-600 dark:hover:bg-violet-700 text-white rounded-md font-medium transition-colors"
              >
                Get In Touch
              </button>
              <button
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 border-2 border-blue-600 dark:border-violet-600 text-blue-600 dark:text-violet-400 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-md font-medium transition-colors"
              >
                View My Work
              </button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative h-80 w-80 md:h-96 md:w-96 mx-auto">
              <div className="absolute inset-0 bg-blue-600 dark:bg-violet-600 rounded-full blur-xl opacity-20 animate-pulse"></div>
              <div className="relative rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                <Image 
                  src="/ShreyanshMishra.jpg" 
                  alt="Shreyansh Mishra" 
                  width={400} 
                  height={400} 
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <button
          onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
          className="animate-bounce p-2 bg-white dark:bg-gray-800 rounded-full shadow-md"
        >
          <svg className="w-6 h-6 text-blue-600 dark:text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
"use client";
import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left Side (Name and Bio) */}
          <div className="flex-1 p-6 max-w-2xl mx-auto md:mx-0 text-center md:text-left">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Rachit Gupta
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a passionate Full Stack Developer and a B.Tech CSE student at Gyan Ganga College of Technology, currently in my 3rd year. I specialize in both front-end and back-end development with hands-on experience in React.js, Next.js, Tailwind CSS, Node.js, Express.js, MongoDB, and Firebase.
              <br /><br />
              I also work on native and cross-platform mobile apps using Java, Android Studio, XML, and React Native. With strong logical and analytical thinking skills, I enjoy solving complex problems and continuously learning new technologies like Redux, C++, and Python.
              <br /><br />
              I'm actively seeking internship and job opportunities where I can contribute to real-world projects, sharpen my skills, and build a strong professional foundation in the tech industry.
            </p>
          </div>

          {/* Right Side (Image, Buttons, and Social Icons) */}
          <div className="flex-1 p-6 flex flex-col items-center">
            {/* Image */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="rounded-full overflow-hidden mb-6 w-40 h-40 bg-gray-100 dark:bg-gray-700"
            >
              <img 
                src="/Profile.jpg" 
                alt="Your Image" 
                className="object-cover w-full h-full"
              />
            </motion.div>

            {/* Action Buttons */}
            <div className="flex flex-col items-center gap-4 mb-6 w-full">
              <a 
                href="#contact"
                className="text-white bg-blue-600 hover:bg-blue-700 py-2 px-6 rounded-lg shadow-md transition duration-300 w-full text-center"
              >
                Get in Touch
              </a>
              
              <a 
                href="/Resume.pdf"
                className="text-white bg-gray-700 hover:bg-gray-800 py-2 px-6 rounded-lg shadow-md transition duration-300 w-full text-center"
              >
                View Resume
              </a>
            </div>

            {/* Social Media Links */}
            <div className="flex justify-center space-x-6">
              <a 
                href="https://www.linkedin.com/in/rachit-gupta-099999261"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-violet-400 transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a 
                href="https://github.com/Rachit3784"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-400 transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a 
                href="https://www.instagram.com/rac_hit384/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

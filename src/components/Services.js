// components/Services.js
"use client";
import React, { useState } from 'react';
import { FaLaptopCode, FaMobileAlt, FaServer } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { services } from '../data/services';
import Image from 'next/image';

const iconComponents = {
  FaLaptopCode,
  FaMobileAlt,
  FaServer,
};

const ServiceCard = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = iconComponents[service.icon];

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col items-center text-center">
        <div className="p-4 bg-blue-100 dark:bg-gray-700 rounded-full mb-4">
          <IconComponent className="text-blue-600 dark:text-violet-400 text-3xl" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
        
        <div className={`transition-all duration-300 overflow-hidden ${isHovered ? 'max-h-52 opacity-100' : 'max-h-0 opacity-0'}`}>
          <p className="text-gray-800 dark:text-gray-200 font-medium mb-2">Technologies:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {service.technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-blue-50 dark:bg-gray-700 text-blue-600 dark:text-violet-400 text-sm rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">My Services</h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 dark:bg-violet-400 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I offer a range of services to help bring your digital ideas to life. Hover over each card to learn more.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">My Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'React', logo: '/logos/react.svg' },
              { name: 'Next.js', logo: '/logos/nextjs.svg' },
              { name: 'Node.js', logo: '/logos/node.svg' },
              { name: 'JavaScript', logo: '/logos/javascript.svg' },
              { name: 'Tailwind CSS', logo: '/logos/tailwind.svg' },
              { name: 'React Native', logo: '/logos/reactnative.svg' },
              { name: 'Redux', logo: '/logos/redux.svg' },
              { name: 'Python', logo: '/logos/python.svg' },
              { name: 'C++', logo: '/logos/Cplus.svg' },
            ].map((skill, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md p-3">
                  <div className="relative w-full h-full">
                    <Image src={skill.logo} alt={skill.name} layout="fill" objectFit="contain" />
                  </div>
                </div>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
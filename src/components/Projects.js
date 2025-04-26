// components/Projects.js
"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { projects } from '../data/projects.js';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300"
    >
      <div className="relative h-60 w-full">
        {
          project.type === "image" ? (

<Image 
            src={project.image} 
            alt={project.title}
            layout="fill"
           
            className="transition-transform  rounded-sm duration-300 hover:scale-105"
          />


        

          ) : (
            <div className='p-2'>
              <video controls  className="w-full h-[250px]  rounded-lg" >
            <source src={project?.video}   alt = {project?.title}  />
          </video>
            </div>
           )
        }
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.shortDescription}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-blue-50 dark:bg-gray-700 text-blue-600 dark:text-violet-400 text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
        
        <div className="flex justify-between items-center">
          <Link 
            href={`/projects/${project.id}`}
            className="text-blue-600 dark:text-violet-400 hover:underline font-medium"
          >
            View Details
          </Link>
          <div className="flex space-x-3">
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-violet-400 transition-colors"
            >
              <FaGithub size={20} />
            </a>
            <a 
              href={project.liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-violet-400 transition-colors"
            >
              <FaExternalLinkAlt size={18} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">My Projects</h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 dark:bg-violet-400 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Check out some of my recent work. Click on a project to learn more about it.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
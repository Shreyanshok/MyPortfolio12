// app/projects/[id]/page.js
"use client";
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';
import { projects } from '../../../data/projects';

const ProjectDetail = () => {
  const params = useParams();
  const router = useRouter();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.id) {
      const foundProject = projects.find(p => p.id === params.id);
      
      if (foundProject) {
        setProject(foundProject);
      } else {
        router.push('/');
      }
      
      setLoading(false);
    }
  }, [params.id, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 dark:border-violet-400"></div>
      </div>
    );
  }

  if (!project) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button 
          onClick={() => router.back()} 
          className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-violet-400 mb-8 transition-colors"
        >
          <FaArrowLeft className="mr-2" /> Back to projects
        </button>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl">
          <div className="relative h-72 w-full flex justify-around">
            <Image 
              src={project.image} 
              alt={project.title}
              layout="fill"
              objectFit="contain"
            />
            
          </div>
          
          <div className="p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-0">
                {project.title}
              </h1>
              
              <div className="flex space-x-4">
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  <FaGithub className="mr-2" /> GitHub
                </a>
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-blue-600 dark:bg-violet-600 text-white rounded-md hover:bg-blue-700 dark:hover:bg-violet-700 transition-colors"
                >
                  <FaExternalLinkAlt className="mr-2" /> Live Demo
                </a>
              </div>
            </div>
            
            <div className="prose dark:prose-invert max-w-none">
              {project.fullDescription.split('\n').map((paragraph, index) => (
                <p key={index} className="text-gray-700 dark:text-gray-300 my-4">
                  {paragraph}
                </p>
              ))}
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Technologies Used</h3>
              <div className="flex flex-wrap items-center gap-3">
                {project.technologies.map((tech, index) => (
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
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
import React from "react";
import { proj } from "../assets/projects/assets"
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className='mx-8 lg:mx-12 ' id="projects">
      <h2 className="text-center text-4xl my-20">Projects</h2>
      <div>
        {proj.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap justify-center items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="w-full lg:w-1/4 relative flex  justify-center items-center mb-6"
            >
              <img
                src={project.proj_image}
                alt="Project 1"
                className="rounded  w-[300px] h-[150px]"
               
              />
               <div className="bg-gray-400 rounded absolute z-50 top-0  w-[300px] h-full opacity-0 flex items-center justify-center transition duration-300 hover:opacity-70">
                <a
                  href={project.proj_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white px-4 py-2 bg-gray-900 border border-gray-800 rounded-md hover:bg-gray-950 transition duration-300"
                >
                  Source Code
                </a>
              </div>
               
               
                
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="w-full lg:w-3/4 max-w-xl mx-7 text-center lg:text-left"
            >
              <h6 className="mb-2 font-semibold">{project.proj_title}</h6>
              <p className="mb-4 text-neutral-400 dark:text-black font-light dark:font-normal text-sm">{project.proj_description}</p>
              {project.proj_tech.map((tech, index) => (
                <span
                  key={index}
                  className="mr-1 lg:mr-2 rounded bg-slate-800 dark:bg-gray-200 px-2 py-1 text-white dark:text-black text-xs font-medium"
                >
                  {tech}
                </span>
              ))}

              
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
import React from 'react'

import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaGithub, FaLinkedin,FaRegFilePdf  } from 'react-icons/fa';
import Profile from '../assets/Profile.png'
import Resume from '../assets/Shruti-Patil.pdf'
import { Link } from 'react-router-dom';




function About() {


    const [text] = useTypewriter({
        words: [
          "Web Developer",
          "Web Designer",
          
        ],
        loop: 0,
        typeSpeed: 80,
        deleteSpeed: 50,
        delaySpeed: 2000,
      });
    
      const container = (delay) => ({
        hidden: { x: -200, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
      });

      const contain = (delay) => ({
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
      });
  return (
    <div>
   <div className="flex flex-wrap mx-8 lg:mx-12">
        <div className="w-full ">
        <div className="flex flex-col items-center">
             <motion.h2 variants={container(0)}
              initial="hidden"
              animate="visible"
              className='text-5xl lg:text-8xl font-light dark:font-normal mt-20  lg:mt-32 mb-8'>I'm Shruti Patil</motion.h2>
             <motion.span variants={container(0.2)}
              initial="hidden"
              animate="visible"
              className='text-4xl lg:text-5xl font-normal text-teal-600 dark:text-blue-900'>{text}<Cursor cursorColor="teal" /></motion.span>
             <motion.p variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className='font-semibold w-full lg:w-1/2  text-center mt-10'> A Frontend focused Web Developer building Websites and Web Applications that leads to the success of the overall product.</motion.p>
         <div className="flex flex-col flex-wrap items-center gap-8">
            <div className="lg:m-6 m-4  lg:text-3xl text-2xl flex items-center lg:gap-8 gap-6 lg:justify-center justify-start">
            <motion.a
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.25, delay: 0 },
                  }}
                  href="https://github.com/ShrutiPatil-dev/ShrutiPatil-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="cursor-pointer" />
            </motion.a>
            <motion.a
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.25, delay: 0 },
                  }}
                  href="https://www.linkedin.com/in/shruti-patil-ba039a169/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="cursor-pointer" />
            </motion.a>
            <motion.a
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.25, delay: 0 },
                  }}
                  href={Resume}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaRegFilePdf className="cursor-pointer" />
            </motion.a>
        </div>
        </div>
        </div>
        </div>
    </div>
     <div className="flex flex-wrap items-center mx-8 lg:mx-12 mt-28 mb-12 lg:flex-row flex-col-reverse">
       <div className="w-full lg:w-1/2">
       <div className="flex flex-col items-center">
               <motion.h1 variants={contain(0)}
                initial= "hidden"
                whileInView="visible"
                className='text-center text-4xl lg:text-5xl font-normal py-14'>Get to know Me !</motion.h1>
                <motion.p variants={contain(0.5)}
                initial= "hidden"
                whileInView="visible"
                 className='w-full lg:w-5/6 justify-center font-medium mx-auto pb-8'>
                Hello! I'm <span className='text-teal-600  dark:text-blue-900 font-bold'>Shruti Patil,</span> I’m working as a Associate Consultant at <Link to="https://eviden.com/" target='_blank' className="underline">Eviden (Atos)</Link>.Throughout my coding journey, I've honed my skills in designing and implementing robust web applications that blend creativity with functionality. I believe in leveraging technology to solve real-world problems, and my project portfolio reflects my commitment to delivering impactful solutions using cutting-edge technologies.
                Currently, I am eager to apply my knowledge and skills in a professional setting where innovation and continuous learning are valued. I am enthusiastic about contributing to projects that challenge me to grow and evolve as a developer, while making a meaningful impact in the field of technology.
                </motion.p>
        </div>

       </div>
       <div className="w-full lg:w-1/2 mt-1">
          <div className="flex justify-center items-center">
            <motion.div initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0 }}className=" bg-white  border-teal-700  dark:border-blue-950 border-[8px] mt-5 mb-8 rounded-full overflow-hidden">
              <img
                src={Profile}
                alt="Profile"
                className="lg:w-[22rem] w-56 rounded-full "
              />
            </motion.div>
          </div>
        </div>
     </div>
    </div>
  )
}

export default About

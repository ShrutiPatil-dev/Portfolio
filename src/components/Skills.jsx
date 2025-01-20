import React from 'react'
import { motion } from 'framer-motion'
import JS from "../assets/JS.svg";
import Java from "../assets/Java.svg";
import Bootstrap from "../assets/Bootstrap.svg";
import Tailwind from "../assets/Tailwind.svg";
import Figma from "../assets/figma.svg"
import CSS from '../assets/css.svg'
import ReactJs from '../assets/React.svg'
import Git from '../assets/Git.svg'

function Skills() {


    const iconVariant = (duration) => ({
        initial: { y: -10 },
        animate: {
          y: [10, -10],
          transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          },
        },
      });
  return (
    <div className='mx-8 lg:mx-12 ' id="skills">
     <div>
      <motion.h2 initial={{x:100,opacity:0}}
       whileInView={{x:0,opacity:1}} 
       transition={{ duration: 0.5, delay:0}}

       className="text-center text-4xl lg:text-5xl font-normal py-10">Tech Stack</motion.h2>
      <motion.p initial={{x:100,opacity:0}}
       whileInView={{x:0,opacity:1}} 
       transition={{ duration: 0.5,delay:0.3}}
       className='text-center'>I am passionate about using cutting-edge technologies. These are the tools I am most familiar with and build things every day.</motion.p>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap justify-center items-center gap-4 mb-4 mt-20"
      >
         <motion.div
          variants={iconVariant(2.5)}
          initial="initial"
          animate="animate"
          whileHover={{
            scale: 1.1,
            opacity: 0.8,
            transition: { duration: 0.5 },
          }}
          className="rounded-2xl border-4 border-neutral-300 dark:border-gray-800 p-4"
        >
           <img src={ReactJs} className='w-16' alt="ReactJS" />
        </motion.div>
        <motion.div
          variants={iconVariant(5)}
          initial="initial"
          animate="animate"
          whileHover={{
            scale: 1.1,
            opacity: 0.8,
            transition: { duration: 0.5 },
          }}
          className="rounded-2xl border-4 border-neutral-300 dark:border-gray-800 p-4"
        >
           <img src={JS} className='w-16' alt="JS" />
        </motion.div>
        <motion.div
          variants={iconVariant(3.5)}
          initial="initial"
          animate="animate"
          whileHover={{
            scale: 1.1,
            opacity: 0.8,
            transition: { duration: 0.5 },
          }}
          className="rounded-2xl border-4 border-neutral-300 dark:border-gray-800 p-4"
        >
           <img src={Tailwind} className='w-16' alt="tailwind" />
        </motion.div>
      </motion.div>

      {/* Section1 ends here  */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap justify-center items-center gap-4 mb-6"
      >
        <motion.div
          variants={iconVariant(2.5)}
          initial="initial"
          animate="animate"
          whileHover={{
            scale: 1.1,
            opacity: 0.8,
            transition: { duration: 0.5 },
          }}
          className="rounded-2xl border-4 border-neutral-300 dark:border-gray-800 p-4"
        >
           <img src={CSS} className='w-16' alt="CSS" />
        </motion.div>
        <motion.div
          variants={iconVariant(5)}
          initial="initial"
          animate="animate"
          whileHover={{
            scale: 1.1,
            opacity: 0.8,
            transition: { duration: 0.5 },
          }}
          className="rounded-2xl border-4 border-neutral-300 dark:border-gray-800 p-4"
        >
           <img src={Bootstrap} className='w-16' alt="Bootstrap" />
        </motion.div>
        <motion.div
          variants={iconVariant(5)}
          initial="initial"
          animate="animate"
          whileHover={{
            scale: 1.1,
            opacity: 0.8,
            transition: { duration: 0.5 },
          }}
          className="rounded-2xl border-4 border-neutral-300 dark:border-gray-800 p-4"
        >
           <img src={Figma} className='w-16' alt="figma" />
        </motion.div>
        <motion.div
          variants={iconVariant(5)}
          initial="initial"
          animate="animate"
          whileHover={{
            scale: 1.1,
            opacity: 0.8,
            transition: { duration: 0.5 },
          }}
          className="rounded-2xl border-4 border-neutral-300 dark:border-gray-800 p-4"
        >
           <img src={Java} className='w-16' alt="Java" />
        </motion.div>
        <motion.div
          variants={iconVariant(5)}
          initial="initial"
          animate="animate"
          whileHover={{
            scale: 1.1,
            opacity: 0.8,
            transition: { duration: 0.5 },
          }}
          className="rounded-2xl border-4 border-neutral-300 dark:border-gray-800 p-4"
        >
           <img src={Git} className='w-16' alt="Git" />
        </motion.div>


      </motion.div>
      </div>
</div>

   
  )
}

export default Skills

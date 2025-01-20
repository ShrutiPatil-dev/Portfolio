import React from 'react'
import { IoIosMail } from "react-icons/io";
import { motion } from 'framer-motion';



function Contact() {
    
  return (
    <div className='mx-8 lg:mx-12 flex flex-col justify-center items-center ' id="contact">
      <motion.h1 initial={{x:100,opacity:0}}
       whileInView={{x:0,opacity:1}} 
       transition={{ duration: 0.5,delay:0}}
       className="text-center text-4xl my-10">Wanna reach out?</motion.h1>
       <motion.p initial={{x:100,opacity:0}}
       whileInView={{x:0,opacity:1}} 
       transition={{ duration: 0.5,delay:0.5}}
       className=' text-base font-light dark:font-normal my-5 text-center'>Feel free to drop me a message if you have some interesting offer</motion.p>

      <IoIosMail size={40} className="cursor-pointer  mx-4 " />
      <motion.a
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  href="mailto:askshrutip@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='mb-5'
                >
                <span className='font-medium '> askshrutip@gmail.com </span>
            </motion.a>
            
      

    </div>
  )
}

export default Contact

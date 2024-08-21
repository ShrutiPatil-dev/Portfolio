import React from 'react'
import { FaGithub, FaLinkedin  } from 'react-icons/fa';
import { IoIosMail } from "react-icons/io";

function Footer() {
  return (
    <div className='mx-8 lg:mx-12 flex flex-col lg:flex-row justify-around items-center my-5'>

        <h1 className='my-6 lg:my-1 font-light dark:font-normal'>Shruti Patil &copy; 2024</h1>
        <div className='flex gap-4 '> 
            <a href="https://github.com/ShrutiPatil-dev/ShrutiPatil-dev" target='_blank'><FaGithub size={25}/></a>
            <a href="https://www.linkedin.com/in/shruti-patil-ba039a169/" target='_blank'><FaLinkedin size={25}/></a>
            <a href="mailto:askshrutip@gmail.com" target='_blank'><IoIosMail size={25}/></a>
        </div>
    </div>
  )
}

export default Footer

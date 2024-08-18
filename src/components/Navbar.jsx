import React, { useState } from 'react'
import logo from '../assets/logo.png'
import logo1 from '../assets/logo1.png'
import './Navbar.css'
import { RxCross2 } from "react-icons/rx";
import { CgMenuRightAlt } from "react-icons/cg";
import { HashLink as Link } from 'react-router-hash-link';
import { FaMoon } from 'react-icons/fa';
import { IoSunnyOutline } from "react-icons/io5";



function Navbar(props) {
  const [menu,setMenu] = useState(false);

  const handleMenu = () =>{
    setMenu(!menu)
  }

  const cancelMenu = () =>{
    setMenu(false);
  }

  return (
    <div className='navbar  m-7 lg:m-3'>
      <img src={(props.theme == 'dark') ?logo1 :logo} className='w-10 z-20' alt="sp"/>
       <div className='block lg:hidden absolute top-[1.50rem] lg:top-3 right-8 z-20' onClick={handleMenu}>
       {menu ? <RxCross2 size={35}/>:<CgMenuRightAlt size={38}/> }
    
       </div>
       <div className='absolute right-28 lg:right-10 top-7 lg:top-6 ' onClick={props.handleThemeSwitcher}>
       {(props.theme == 'dark') ? <FaMoon size={26} /> :<IoSunnyOutline size={30}/>}
       </div>
      
      <ul className={menu ?'nav-menu active dark:bg-white dark:lg:bg-transparent':'nav-menu'}>
      
      <li className='p-4'><Link to="#" onClick={cancelMenu}>About</Link></li>
      <li  className='p-4'><Link to="#skills" onClick={cancelMenu}>Skills</Link></li>
      <li  className='p-4'><Link to="#projects" onClick={cancelMenu}>Projects</Link></li>
      <li  className='p-4'><Link to="#contact" onClick={cancelMenu}>Contact</Link></li>
    </ul>
    </div>
  )
}

export default Navbar

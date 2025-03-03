import React, {useState} from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  const [theme, setTheme] = useState(false); 

  const handleThemeSwitcher = () => {
    const newTheme = (theme === "dark") ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  }
  return (
    <div className='overflow-x-hidden text-white dark:text-black font-bold selection:bg-blue-600'>
      <div className="fixed -z-10 w-full h-full">
      <div className="relative h-full w-full bg-slate-950 dark:bg-white">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div></div>
      </div>
      <BrowserRouter>
      <Navbar handleThemeSwitcher={handleThemeSwitcher}  theme={theme}/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App

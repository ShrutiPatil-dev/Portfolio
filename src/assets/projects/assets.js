import proj1 from './proj1.PNG'
import proj2 from './proj5.PNG'
import proj3 from './proj3.PNG'
import proj4 from './proj4.PNG'

export const proj = [
    {
        proj_image: proj1,
		proj_url: "shrutipatill.netlify.app",
		proj_title: "Portfolio Website",
		proj_description:"This portfolio website showcases my skills, projects, and professional journey as a web developer. It is designed to be a central hub where potential clients and employers can learn more about me and my work.",
		proj_tech: ["ReactJS", "TailwindCSS", "Framer Motion"],
		
		
    },
	{
        proj_image: proj2,
		proj_url:"https://shopiiffy.netlify.app/",
		proj_title: "E-commerce",
		proj_description:"A React JS e-commerce website utilizing useContext for state management, enabling functionalities like search, adding/removing items from the cart, and filtering products based on categories",
		proj_tech: ["ReactJS","TailwindCSS"],
    },
	  {
        proj_image: proj3,
		proj_url:"https://weather-new-forecast.netlify.app/",
		proj_title: "Weather Forecast",
		proj_description:"The Weather App is a user-friendly web application that allows users to check the current weather and view forecasts for various cities around the world",
		proj_tech: ["ReactJS","Openweathermap", "TailwindCSS"],
    },
    {
        proj_image: proj4,
		proj_url: "https://note-keeeper-app.netlify.app/",
		proj_title: "NoteKeeper",
		proj_description:"This is a simple Note Keeper application built with React. It allows you to add, edit, delete, and search for notes. The application also persists your notes using the browser's localStorage, so your notes will be saved even after the page is refreshed.",
		proj_tech: ["ReactJS", "CSS"],
    },

  
]


console.log(proj)
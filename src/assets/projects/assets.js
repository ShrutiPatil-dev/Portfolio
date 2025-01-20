import proj1 from './proj1.PNG'
import proj2 from './proj2.PNG'
import proj3 from './proj3.PNG'
import proj4 from './proj4.PNG'

export const proj = [
    {
        proj_image: proj1,
		proj_url: "https://github.com/ShrutiPatil-dev/Portfolio",
		proj_title: "Portfolio Website",
		proj_description:"This portfolio website showcases my skills, projects, and professional journey as a web developer. It is designed to be a central hub where potential clients and employers can learn more about me and my work.",
		proj_tech: ["ReactJS", "TailwindCSS", "Framer Motion"],
		
		
    },
	{
        proj_image: proj2,
		proj_url:"https://github.com/ShrutiPatil-dev/NewsApp",
		proj_title: "News App",
		proj_description:"Aggregates news from various sources, allowing you to customize your feed based on interests.",
		proj_tech: ["ReactJS", "NewsAPI","TailwindCSS"],
    },
	  {
        proj_image: proj3,
		proj_url:"https://github.com/ShrutiPatil-dev/weather",
		proj_title: "Weather Forecast",
		proj_description:"The Weather App is a user-friendly web application that allows users to check the current weather and view forecasts for various cities around the world",
		proj_tech: ["ReactJS","Openweathermap", "TailwindCSS"],
    },
    {
        proj_image: proj4,
		proj_url: "https://github.com/ShrutiPatil-dev/Note-Keeper",
		proj_title: "NoteKeeper",
		proj_description:"This is a simple Note Keeper application built with React. It allows you to add, edit, delete, and search for notes. The application also persists your notes using the browser's localStorage, so your notes will be saved even after the page is refreshed.",
		proj_tech: ["ReactJS", "CSS"],
    },

  
]


console.log(proj)
import React,{useEffect} from 'react'
import reelVertex from '../assets/projects/ReelVertex.png'
import StudyNotion from '../assets/projects/Screenshot 2024-04-24 115951.png'
import Tic from '../assets/projects/Tic.png'
import weateher from '../assets/projects/Weather.7e8666695e66d7e2a96a.png'
import Snake from '../assets/projects/Snake.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Projects = () => {
  useEffect(()=> {
    AOS.init({duration: 1000})
})

  const Projects = () => [
    {
      id: 1,
      src: Tic,
      desc: "Qr-restuarent is a qr-base food ordering system in restuarent,this website made using ReactJs, Tailwind CSS, Express.js, MongoDb, Socket.io and Redux ",
      code: "https://github.com/rahuldas200/Qr-resturent.git"
    },
    {
      id: 2,
      src: StudyNotion,
      desc: "This Full-Stack Ed-Tech platfrom  is made using ReactJS, Tailwind CSS, Expresss.js, MongoDb, Redux",
      demo: "https://studynotion-myweiuztn-rahul-das-projects.vercel.app",
      code: "https://github.com/rahuldas200/studynotion-edtech-project-main.git"
    },
    {
      id: 3,
      src: reelVertex,
      desc: "reelVertex is an full-Stack project for download instragram reel, Posts. This is made using ReactJs, Tailwind CSS, Node.js and REST API ",
      demo: "https://reel-vertex.vercel.app/",
      code: "https://github.com/rahuldas200/reel-vertex.git"
    },
    {
      id: 4,
      src: Tic,
      desc: "Tic-Tac-To is game made using HTML, Css, JavaScript",
      // demo: "https://opeditor.vercel.app/",
      code: "https://github.com/rahuldas200/Tik-Tac-Toe_Game.git"
    },
    {
      id: 5,
      src: weateher,
      desc: "It is a Weather application which shows temperatures of various cities across the globe made using REST API...",
      // demo: "https://upscaleai.vercel.app/",
      code: "https://github.com/rahuldas200/Weather_App.git"
    },
    {
      id: 6,
      src: Snake ,
      desc: "Snake Game made using HTML, CSS, JavaScript",
      // demo: "https://gist-ai.vercel.app/",
      code: "https://github.com/rahuldas200/SnakeGame.git"
    },
  ]


  return (
    <div name="projects" className='   bg-black w-full text-white
     '>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8 text-center'>
          <h2 className='text-4xl font-bold inline border-b-4 border-gray-400'>Projects</h2>
          <p className='py-6'>Check out some of my work </p>
        </div>
        <div   className='grid sm:grid-cols-2 md:grid-cols-3 mb-20 gap-8  sm:px-0 items-center'>
          {
            Projects().map(({ id, src, desc, demo, code }) => (

              <div data-aos="fade-in" data-aos-duration="500" key={id} className='cart shadow-md shadow-gray-600 rounded-lg bg-[#ffffff86]'>
                <img src={src} alt="Ai" className='rounded-md duration-200 hover:scale-105'  />
                <p className='p-2 text-justify font-extralight h-28 mt-3'>{desc}</p>
                <div className='flex items-center justify-center'>
                  
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-l from-gray-700 to-blue-900 rounded-md'>
                    <a href={demo} target='_blank'>Demo</a>
                  </button>
                  <button  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-l from-purple-900 to-gray-700 rounded-md'>
                    <a href={code} target='_blank'>Code</a>
                  </button>
                </div>
              </div>

            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Projects
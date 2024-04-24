import React, { useEffect } from 'react'
import html from '../assets/experience/html.png'
import css from '../assets/experience/css.png'
import javascript from '../assets/experience/javascript.png'
import node from '../assets/experience/node.png'
import react from '../assets/experience/react.png'
import tailwind from '../assets/experience/tailwind.png'
import Cpp from '../assets/Skills-icon/Cpp_1 (1).svg'
import Express from '../assets/Skills-icon/Express.svg'
import git from '../assets/Skills-icon/Git.svg'
import vs from '../assets/Skills-icon/icons-visual-studio-code-2019.svg'
import MongoDb from '../assets/Skills-icon/icons-mongodb.svg'
import postman from '../assets/Skills-icon/PostMan.svg'
import Sql from '../assets/Skills-icon/MySql (1).svg'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Experience = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    })

    const techs = () => [
        {
            id: 1,
            scr: Cpp,
            title: 'C++',
            style: 'shadow-blue-500'
        },
        {
            id: 2,
            scr: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 3,
            scr: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 4,
            scr: javascript,
            title: 'JAVASCRIPT',
            style: 'shadow-yellow-500'
        },
        {
            id: 5,
            scr: tailwind,
            title: 'Tailwind CSS',
            style: 'shadow-orange-500'
        },
        {
            id: 6,
            scr: react,
            title: 'REACT',
            style: 'shadow-blue-600'
        },
        {
            id: 7,
            scr: node,
            title: 'Node JS',
            style: 'shadow-green-500'
        },
        {
            id: 8,
            scr: Express,
            title: 'Express js',
            style: 'shadow-orange-500'
        },
       
        {
            id: 9,
            scr: MongoDb,
            title: 'MongoDb',
            style: 'shadow-orange-500'
        },
        {
            id: 10,
            scr: Sql,
            title: 'My-Sql',
            style: 'shadow-blue-500'
        },
       
        
        {
            id: 11,
            scr: git,
            title: 'GitHub',
            style: 'shadow-sky-500'
        },
        {
            id: 12,
            scr: postman,
            title: 'Post Man',
            style: 'shadow-sky-500'
        },
       
    ]

    return (
        <div name="skills" className='bg-black text-white
     w-full h-full'>
            <div className='max-w-screen-lg max-h-screen-lg p-4 mx-auto flex flex-col justify-center w-full '>
                <div className='pb-8 text-center'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-400'>Skills</p>
                    <p className='py-6'>This are the technologies I've worked with</p>
                </div>

                <div className='w-full h-full grid grid-cols-2 text-center sm:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {
                        techs().map(({ id, scr, title, style }) => (

                            <div data-aos="zoom-in" data-aos-duration="500" key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                <img src={scr} alt="" className='w-20 mx-auto' />
                                <p className='mt-4'>{title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Experience
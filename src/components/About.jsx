import React, { useEffect } from 'react'
import { AiOutlineCloudDownload } from 'react-icons/ai'
import resume from '../assets/resume.pdf'
import '../App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    },)

    return (
        <div name="about" className='w-full  bg-black   text-white '>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-auto'>
                <div className='pb-8 text-center'>

                    <h2 className='text-4xl  font-bold inline border-b-4 border-gray-500'>About</h2>

                </div>

                <p data-aos="slide-up" data-aos-duration="500" className='text-xl mt-5 ease-in fade-in opacity-75 md:text-lg sm:text-base text-center'>
                    I embarked my journey as a B.Tech Computer Science & Engineering student at Netaji Subash Engineering College in 2021. Along the way, I fearlessly explored various fields, including Graphic Designing, Content Creation. I delved into the world of cutting-edge technologies, such as javaScript, c++, React, express, and socket.io, mongoDb
                </p>
                <br />
                {/* <br />
                <p data-aos="fade-in" data-aos-duration="500" className='text-xl mt-5 ease-in  fade-in'>
                    I've worked for many projects for my clients as well as my personal projects. I also contributed for the GDSC RKMGEC web page. I have a Instagram page (@codewithbiki) where I create content for those who are just starting with programming and have more that 70k followers. I have learning attitude and growth mindset which helps me to collaborate with people and work for the society.
                </p> */}
                <div  className='mb-20 fade-in flex mx-auto items-center justify-center hover:scale-105 duration-300 rounded bg-gradient-to-b from-cyan-500 to-blue-500 lg:w-1/5 md:w-1/5 w-2/4 h-10 text-center cursor-pointer mt-10 gap-2'>


                    <AiOutlineCloudDownload />
                    <a href={resume} target='_blank' download>Download CV</a>
                </div>
            </div>
        </div>
    )
}

export default About
import React, { useEffect } from 'react'
import Dp from "../assets/profileImg.jpg"
import { MdOutlineArrowRightAlt } from 'react-icons/md'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-scroll'
import '../App.css'
import { HiOutlineMail } from 'react-icons/hi'
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
    useEffect(()=> {
        AOS.init({duration: 1000})
    })
    return (
        <div name="home" className='h-auto w-full bg-black '>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center
                            justify-center  px-4 md:flex-row text-white'>
                <div className='flex flex-col '>
                    <div className='flex justify-center'>
                        <img src={Dp} alt="my profile" data-aos="fade-in" data-aos-duration="500" className='mt-10 rounded-2xl w-1/3 md:w-1/3 lg:min-w-2/5 my-5 
                        hover:scale-105 duration-300 sm:ease-in ' />
                    </div>
                    <div className='flex justify-center items-center flex-col mt-3'>
                        <h2 data-aos="fade-in" data-aos-duration="1000" className='text-4xl sm:text-6xl text-center font-bold text-white'>
                             <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Full-Stack Developer',
                                2000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Aske me about MERN Stack',
                                2000,
                                'Fontend Developer',
                                2000,
                                'Final year B tech Student',
                                2000
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '1em', display: 'inline-block' }}
                            className='animate-text bg-gradient-to-r from-teal-500 via-purple-500 ml-3
                            to-orange-500 bg-clip-text text-transparent text-4xl sm:text-6xl  font-bold text-center'
                            repeat={Infinity}
                        />
                        </h2>
                            <p data-aos="fade-in" data-aos-delay="400" data-aos-duration="2000" className='text-gray-400 py-4 text-center w-full'>
                                    I'm a B.Tech 4th year Student of Netaji subhash engineering collage, Kolkata , Garia. With expertise in Data Structures and Algorithms (DSA), Development in ReactJs, NodeJs, MongoDB, Web Socket & much more. As a dynamic and forward-thinking programmer, I'm committed to staying up to date with the latest trends and technologies in the field.
                        </p>
                    </div>

                    <div className='w-full  flex justify-center mt-14 '>
                       <div className='flex items-center gap-5 mb-24 flex-col'>
                       <div className='flex gap-3'>
                            <Link to="projects"  >
                                <button smooth duration={500} data-aos="fade-up" data-aos-delay="1000" data-aos-duration="2000" className='group rounded bg-gradient-to-r from-blue-600 to-cyan-600 p-2 flex items-center justify-center cursor-pointer'>
                                    <span>Portfolio</span>
                                    <span className='px-2 group-hover:rotate-90 duration-300'>
                                        <MdOutlineArrowRightAlt size={25} />
                                    </span>
                                </button>
                            </Link>
                            <Link to="projects"  >
                                <button smooth duration={500} data-aos="fade-up" data-aos-delay="1000" data-aos-duration="2500" className=' flex p-2 rounded-md gap-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-orange-600 ' >
                                    <span>Hire Me</span>
                                    <span className='px-2 group-hover:rotate-90 duration-300'>
                                        <HiOutlineMail size={25} />
                                    </span>
                                </button>
                            </Link>

                        </div>
                        <div className='flex gap-3'>
                            <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/rahul-das-79a26a219/" smooth duration={550} data-aos="fade-up" data-aos-delay="2000" data-aos-duration="3000" className='group hover:scale-105 rounded w-auto h-8 px-1 flex items-center bg-none justify-center cursor-pointer ' >

                            <span >
                            <BsLinkedin size={25}></BsLinkedin>
                            </span>
                            </a>
                            <a target='_blank' rel="noreferrer" href="https://github.com/rahuldas200" smooth duration={600} data-aos="fade-up" data-aos-delay="3000" data-aos-duration="3500" className='group hover:scale-105 rounded w-auto h-8 px-1 flex items-center bg-none justify-center cursor-pointer ' >

                            <span >
                            <BsGithub size={25}></BsGithub>
                            </span>
                            </a>
                            <a target='_blank' rel="noreferrer" href="https://www.instagram.com/codewithbiki" smooth duration={650} data-aos="fade-up" data-aos-delay="2500" data-aos-duration="2000" className='group hover:scale-105 rounded w-auto h-8 px-1 flex items-center bg-none justify-center cursor-pointer ' >

                            <span >
                            <BsInstagram size={25}></BsInstagram>
                            </span>
                        </a>
                        </div>
                       </div>
                    </div>

                </div>


            </div>
                
        </div>
    )
}

export default Home
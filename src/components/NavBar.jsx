import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from "react-scroll"
import AOS from 'aos'
import 'aos/dist/aos.css'
import Home from './Home'

const NavBar = () => {

    const [nav, setNav] = useState(false);

    const link = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'skills'
        },
        {
            id: 4,
            link: 'projects'
        },
        {
            id: 5,
            link: 'contact'
        }
    ]
    // data-aos="fade-in" data-aos-duration="500"
    return (
        <div>
            {
                nav ? (
                   <div className='text-white w-full px-7 mx-auto h-screen bg-gradient-to-b from-gray-800 to-black'>
                        <div className='flex justify-between items-center '>
                            <div className='flex flex-row gap-1 p-3'>
                                <h3 className='text-4xl font-itim ml-4 max-sm:ml-0 max-sm:text-2xl'>CodeWithRahul</h3>
                            </div>
                            <div onClick={() => setNav(!nav)} className='md:hidden  cursor-pointer pr-4 max-sm:pr-0'>
                                <FaTimes size={20}/>
                            </div>
                        </div>
                        <ul className='flex items-center mt-5 flex-col gap-3 w-full'>
                            {
                                link.map( ({id,link}) => (
                                    <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-200 hover:scale-105 duration-200'>
                                        <Link to={link} smooth={true} duration={500} spy={true} exact='true' offset={-80}>{link}</Link>
                                    </li>
                                ) )
                            }
                        </ul>
                   </div>
                ): (
                    <div  className='flex justify-between items-center w-full h-20 px-4 text-white bg-gradient-to-b from-gray-800 to-black'>
                        <div className='flex flex-row gap-1 '>
                            <h3 className='text-4xl font-itim ml-4 max-sm:ml-0 max-sm:text-2xl'>CodeWithRahul</h3>
                        </div>

                        <ul className='hidden md:flex'>
                            {link.map(({ id, link }) => (

                                <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-200 hover:scale-105 duration-200'>
                                    <Link to={link} smooth={true} duration={500} spy={true} exact='true' offset={-80}>{link}</Link>
                                </li>
                            ))}
                        </ul>
            
                        <div onClick={() => setNav(!nav)} className='md:hidden cursor-pointer pr-4 max-sm:pr-0'>
                                <FaBars size={20}/>
                        </div>
       
                    </div>
                )
            }
        </div>
    )
}

export default NavBar
import React, {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Contact = () => {
    useEffect(()=> {
        AOS.init({duration: 1000})
    })
    return (
        <div name='contact' className='w-full h-full  p-4 text-white'>
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto '>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-400'>Contact Me</p>
                    <p className='mt-6'>Submit the form below to get in touch with me</p>
                </div>

                <div className='flex justify-center items-center'>
                    <form action="" method="POST" className='flex flex-col w-full md:w-1/2'>
                        <input 
                            data-aos="slide-up" 
                            data-aos-duration="500" 
                            required type="text" 
                            name='name' 
                            placeholder='Enter your name' 
                            className='p-2 m-2 bg-transparent border-[1px] rounded-md text-white focus:outline-none' 
                        />
                        <input 
                            data-aos="slide-up" 
                            data-aos-duration="700" 
                            required type="email" 
                            name='email' 
                            placeholder='Enter your e-mail' 
                            className='p-2 m-2 bg-transparent border-[1px] rounded-md text-white focus:outline-none' 
                        />
                        <textarea 
                            data-aos="fade-in" 
                            data-aos-duration="900" 
                            name="message" 
                            required rows="10" 
                            placeholder='Enter your message' 
                            className='p-2 bg-transparent border-[1px] m-2 rounded-md text-white focus:outline-none'
                        >
                        </textarea>
                        <div className='flex justify-center  '>
                            <button 
                                // data-aos="zoom-in" 
                                // data-aos-duration="1000" 
                                type="submit"  className='p-2 text-base bg-none bg-red-700 rounded-md '>Let's Talk
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
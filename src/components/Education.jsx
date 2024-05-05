import React from 'react'
import "scrolling-features-react/dist/style.css";
import { ScrollingFeatures} from 'scrolling-features-react';
import SimpleExampleTextComponent from './SimpleExampleTextComponent';
import SimpleExampleImageComponent from './SimpleExampleImageComponent';
import AOS from 'aos'
import 'aos/dist/aos.css'

const Education = () => {
  return (
    <div className='bg-black w-full  mt-10 p-5'>
     <div className='max-w-screen-lg h-full mx-auto pl-5 flex flex-col gap-8 mb-16'>
        <div>
            <h2 className='text-4xl mb-10 text-white m font-bold inline border-b-4 border-gray-500'>Education</h2>
        </div>
        <div className='flex gap-10 max-sm:gap-5'>
            <div className='w-1.5 rounded-md mt-5 bg-red-600 h-[500px]'>
                
            </div>
            <div  className='flex flex-col flex-wrap'>
                <div data-aos="fade-right" data-aos-delay="100" data-aos-duration="2000">
                    <SimpleExampleTextComponent
                        isIntersecting={true}
                        title="B tech in Computer Science and Engineering"
                        collageName="Netaji Subash Engineering Collage"
                        passoutYear = "2021 Aug - 2024 Jun"
                        CGP = "8.32"
                    />
                    
                </div>
                <div data-aos="fade-right" data-aos-delay="100" data-aos-duration="2000">
                    <SimpleExampleTextComponent
                        isIntersecting={true}
                        title="Diploma in Computer Science and Technolodgy"
                        collageName="Siliguri Goverment Polytechnic"
                        passoutYear = "2018 Jun - 2021 Jun"
                        CGP = "7.7"
                    />
                </div>
            </div>
        </div>
     </div>
    </div>
  )
}

export default Education

import React from 'react'

const SimpleExampleTextComponent = ({ isIntersecting, title,CGP, passoutYear,collageName }) => {
  return (
    <div className='mt-6 mb-20 flex flex-col flex-wrap'>
      <h4
        className={`${
          isIntersecting ? "text-blue-600" : "text-gray-300"
        } transition duration-300 text-1xl lg:text-3xl -mt-3`}
      >
        {title}
      </h4>

      <p
        className={`${
          isIntersecting ? "text-gray-600" : "text-gray-300"
        } transition duration-300 mt-4 text-1xl`}
      >
        {collageName}
      </p>

      {/* Description */}
      <div>
        <p
          className={`${
            isIntersecting ? "text-gray-600" : "text-gray-300"
          } transition duration-300 mt-4`}
        >
          CGPA : {CGP}
        </p>

          <p
          className={`${
            isIntersecting ? "text-gray-600" : "text-gray-300"
          } transition duration-300 mt-4`}
        >
         Duration : {passoutYear}
        </p>
      </div>
      {/* Link */}
      
    </div>
  )
}

export default SimpleExampleTextComponent

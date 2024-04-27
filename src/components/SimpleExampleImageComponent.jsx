import React from 'react'

const SimpleExampleImageComponent = ({ imageUrl }) => {
  return (
    <div className=''>
      <div className="bg-gray-50 border border-gray-200 p-8 rounded-md flex justify-center items-start">
      <img className="w-48 object-contain lg:w-64" src={imageUrl} />
    </div>
    </div>
  )
}

export default SimpleExampleImageComponent

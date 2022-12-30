import React, { useState } from 'react'
import Image from 'next/image'

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const images = [
    '/assets/projects/homy_app.png',
    '/assets/projects/curations.png',
    '/assets/projects/ups_app.png'
  ]

  const handlePreviousClick = () => {
    setCurrentImage((currentImage + images.length - 1) % images.length)
  }

  const handleNextClick = () => {
    setCurrentImage((currentImage + 1) % images.length)
  }

  return (
    <div className="relative overflow-hidden position-relative pb-6">
      <Image src={images[currentImage]} alt={`Image ${currentImage + 1}`} className="object-cover rounded-xl" width="593" height="305"/>
      <button onClick={handlePreviousClick} className="absolute left-0 top-[42%] flex justify-between items-center ml-2 rounded-full bg-zinc-50/75 p-2">
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button onClick={handleNextClick} className="absolute right-0 top-[42%] flex justify-between items-center mr-2 rounded-full bg-zinc-50/75 p-2">
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </button>
    </div>
  )
}

export default Carousel

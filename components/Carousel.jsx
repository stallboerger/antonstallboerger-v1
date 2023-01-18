import React, { useState } from 'react'
import Image from 'next/image'
import { NavArrowRight, NavArrowLeft } from 'iconoir-react'

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const images = [
    '/assets/about/ausstellung.png',
    '/assets/about/ausstellung2.png',
    '/assets/about/norway.png',
    '/assets/about/gray.png',
    '/assets/about/ski.png'
  ]

  const handlePreviousClick = () => {
    setCurrentImage((currentImage + images.length - 1) % images.length)
  }

  const handleNextClick = () => {
    setCurrentImage((currentImage + 1) % images.length)
  }

  return (
    <div className="relative pb-6 z-0">
      <Image src={images[currentImage]} alt={`Image ${currentImage + 1}`} className="object-cover rounded-xl max-h-[340px]" width="593" height="340"/>
      <button onClick={handlePreviousClick} className="absolute left-0 top-[42%] flex justify-between items-center ml-4 rounded-full bg-zinc-50/75 p-2">
        <NavArrowLeft className="h-6 w-6 stroke-2 text-zinc-800" />
      </button>
      <button onClick={handleNextClick} className="absolute right-0 top-[42%] flex justify-between items-center mr-4 rounded-full bg-zinc-50/75 p-2">
        <NavArrowRight className="h-6 w-6 stroke-2 text-zinc-800" />
      </button>
    </div>
  )
}

export default Carousel
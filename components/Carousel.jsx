import React, { useState } from 'react'
import Image from 'next/image'
import { NavArrowRight, NavArrowLeft } from 'iconoir-react'

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const images = [
    '/assets/about/ausstellung.webp',
    '/assets/about/ausstellung2.webp',
    '/assets/about/norway.webp',
    '/assets/about/gray.webp',
    '/assets/about/ski.webp'
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
      <button onClick={handlePreviousClick} className="top-[50%] absolute -translate-y-[50%] left-0 ml-4 rounded-full bg-zinc-50/75 p-2 backdrop-blur-sm " aria-label="Left">
        <NavArrowLeft className="h-6 w-6 stroke-2 text-zinc-800 -translate-x-[1px]" />
      </button>
      <button onClick={handleNextClick} className="top-[50%] absolute -translate-y-[50%] right-0 mr-4 rounded-full bg-zinc-50/75 backdrop-blur-sm p-2" aria-label="Right">
        <NavArrowRight className="h-6 w-6 stroke-2 text-zinc-800 translate-x-[1px]" />
      </button>
    </div>
  )
}

export default Carousel

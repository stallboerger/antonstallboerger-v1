import React, {useState} from 'react'
import Footer from './Footer'
import Image from 'next/image'
import { PinAlt } from 'iconoir-react'

const images = [
    {
        src: '/assets/thoughts/recyclingmoebel-iittala-raami-recycelt-jpg--71872-.webp',
        alt: 'Anton Stallbörger Quality',
        location: 'Norway'
    },
    {
        src: '/assets/thoughts/recyclingmoebel-iittala-raami-recycelt-jpg--71872-.webp',
        alt: 'Image 2',
        location: 'Sweden'
    },
    {
        src: '/assets/thoughts/recyclingmoebel-iittala-raami-recycelt-jpg--71872-.webp',
        alt: 'Image 3',
        location: 'Finland'
    }
    // Add more image objects as necessary
];



export const Images = () => {

    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className='w-full h-auto pt-[140px]'>
            <div className='max-w-[593px] h-full mx-auto flex flex-col px-4'>
                <h2 className='pb-6'>Images</h2>
                {images.map((image, index) => (
                    <div className='pb-6' key={index}>
                        <Image 
                            src={image.src} 
                            alt={image.alt} 
                            width="593" 
                            height="305" 
                            className='rounded-xl object-cover mb-2 max-h-[305px]' 
                            priority='true'
                        />
                        <div className='flex gap-1'>
                            <PinAlt className='text-xs text-zinc-500'/>
                            <p className={`text-sm text-zinc-500 self-center expandable ${isExpanded ? 'expand' : ''}`} onClick={() => setIsExpanded(!isExpanded)}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor...
                            </p>
                        </div>
                    </div>
                ))}
                <Footer />
            </div>
        </div>
    );
}

export default Images
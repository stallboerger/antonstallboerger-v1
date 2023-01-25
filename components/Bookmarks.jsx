import React from 'react'
import Footer from './Footer'
import Image from 'next/image'

export const Bookmarks = () => {
    return (
        <div className='w-full h-auto pt-[140px]'>
            <div className='max-w-[593px] h-full mx-auto flex flex-col px-4'>
                <h2 className='pb-6'>Inspiration</h2>

                <Image src="/assets/inspiration/recyclingmoebel-iittala-raami-recycelt-jpg--71872-.webp" alt='Anton Stallbörger' width="593" height="340" className='rounded-xl mb-2 object-cover' priority='true'></Image>
                <Footer />
            </div>
        </div>
    )
}

export default Bookmarks
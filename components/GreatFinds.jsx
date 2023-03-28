import React from 'react'
import Image from 'next/image'
import Footer from './Footer'

export const GreatFinds = () => {
    return (
        <div className='w-full h-auto pt-[140px]'>
            <div className='max-w-[593px] h-full mx-auto flex flex-col px-4'>
                <h2 className='pb-4'>Great Finds</h2>
                <p className='pb-10 pt-4'>
                We all have those bookmarks and Safari tabs stored away in our browsers. Some of them are just too good to be forgotten. A place where everyone can share their favorite apps, websites, and tools to get inspired and inspire others.
                </p>
                <Image 
                    src="/assets/playground/greatfinds_1.png" 
                    alt='' 
                    width="593" 
                    height="305" 
                    className='rounded-xl mb-2' 
                    priority='true'
                />  
                <p className='mb-10 text-zinc-500 text-sm'>Preview screens</p>    

                <Image 
                    src="/assets/playground/greatfinds_2.png" 
                    alt='Great Finds Clos up' 
                    width="593" 
                    height="305" 
                    className='rounded-xl mb-2' 
                    priority='true'
                />    
                <p className='mb-10 text-zinc-500 text-sm'>Categories for components</p>   

                <Footer />
            </div>
        </div>
    )
}

export default GreatFinds
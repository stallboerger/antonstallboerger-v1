import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {Internet, User} from 'iconoir-react'
import Footer from './Footer'

export const GreatApps = () => {
    return (
        <div className='w-full h-auto pt-[140px]'>
            <div className='max-w-[593px] h-full mx-auto flex flex-col px-4'>
                <h2 className='pb-4'>Great Apps</h2>
                <p className='pb-10 pt-4 text-zinc-500'>
                The App Store is filled with apps that just serve the purpose. They do what they are supposed to do, but they don&apos;t do it in a way that makes you want to use them. To value the apps that are created with love and passion in every detail, I created a concept for a collection of great apps worth using.
                </p>
                <Image 
                    src="/assets/playground/app11.png" 
                    alt='' 
                    width="593" 
                    height="305" 
                    className='rounded-xl mb-2' 
                    priority='true'
                />  
                <p className='mb-10 text-zinc-500 text-sm'>Preview screens</p>    

                <Image 
                    src="/assets/playground/app21.png" 
                    alt='' 
                    width="593" 
                    height="305" 
                    className='rounded-xl mb-2' 
                    priority='true'
                />    
                <p className='mb-10 text-zinc-500 text-sm'>Categories for components</p>   

                <Image 
                    src="/assets/playground/app31.png" 
                    alt='' 
                    width="593" 
                    height="305" 
                    className='rounded-xl mb-2' 
                    priority='true'
                />
                <p className='mb-10 text-zinc-500 text-sm'>Submit your beloved apps</p> 
                <Footer />
            </div>
        </div>
    )
}

export default GreatApps
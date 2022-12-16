import React from 'react'
import Image from 'next/image'

export const Curations = () => {
    return (
        <div className='w-full h-auto pt-[180px]'>
            <div className='max-w-[593px] h-full mx-auto flex flex-col px-4'>
                <h2 className='pb-6'>Curations</h2>
                <p className='pb-6'>
                Curations is a website that offers a curated collection of stunning tools and website inspirations for free. The website was created with the goal of helping designers, developers, and everyone else discover new and innovative tools and ideas for their projects.
                <br />
                <br />
                <h3 className='text-2xl pb-2'>Challenges</h3>
                Text
                <br />
                <br />
                <h3 className='text-2xl pb-2'>Solution</h3>
                Text
                </p>
            
                
                <Image src="/assets/projects/curations.png" alt='' width="593" height="305" className='rounded-xl mb-2' priority='true'></Image>
                <p>
                Texts
                </p>
            </div>
        </div>
    )
}

export default Curations
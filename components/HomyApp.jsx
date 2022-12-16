import React from 'react'
import Image from 'next/image'

export const HomyApp = () => {
    return (
        <div className='w-full h-auto pt-[180px]'>
            <div className='max-w-[593px] h-full mx-auto flex flex-col px-4'>
                <h2 className='pb-6'>Homy App</h2>
                <p className='pb-6'>
                Text
                <br />
                <br />
                <h3 className='text-2xl pb-2'>Challenges</h3>
                Text
                <br />
                <br />
                <h3 className='text-2xl pb-2'>Solution</h3>
                Text
                </p>
            
                
                <Image src="/assets/projects/homy_app.png" alt='' width="593" height="305" className='rounded-xl mb-2' priority='true'></Image>
                <p>
                Texts
                </p>
            </div>
        </div>
    )
}

export default HomyApp
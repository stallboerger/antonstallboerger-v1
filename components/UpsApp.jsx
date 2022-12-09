import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export const UpsApp = () => {
    return (
        <div className='w-full h-auto pt-[180px]'>
            <div className='max-w-[593px] h-full mx-auto flex flex-col px-4'>
                <h2 className='pb-6'>UPS App Redesign</h2>
                <p className='pb-6'>
                The UPS app is a popular mobile application that allows users to track and manage their packages, schedule pick-ups, and access other UPS services on the go. However, the app had been criticized for its outdated design and lack of user-friendly features. As a result, I decided to undertake a redesign of the app to improve its user experience and functionality.
                <br />
                <br />
                <h3 className='text-2xl pb-2'>Challenges</h3>
                The previous design was cluttered and difficult to navigate, which made it frustrating for users to find the information they needed. The app also lacked a cohesive design system, which made it difficult to create a consistent user experience across the app.
                <br />
                <br />
                <h3 className='text-2xl pb-2'>Solution</h3>
                I started by conducting user research to understand the needs and pain points of UPS customers. I used this information to create a new design that was clean and easy to navigate. I also created a new design system that was consistent across the app. 
                </p>
            
                
                <Image src="/assets/projects/ups_app_screens.png" alt='UPS App Redesign' width="593" height="305" className='rounded-xl mb-2' priority='true'></Image>
                <p>

                </p>
            </div>
        </div>
    )
}

export default UpsApp
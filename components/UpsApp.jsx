import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export const UpsApp = () => {
    return (
        <div className='w-full h-auto pt-[180px]'>
            <div className='max-w-[593px] h-full mx-auto flex flex-col px-4'>
                <h2 className='pb-6'>UPS App Redesign</h2>
                <p className='pb-6'>
                The UPS App is a great tool for tracking packages and managing shipments. However, the app is not very intuitive and lacks a modern design. I&apos;ve redesigned the app to make it more user-friendly and modern.
                </p>
                <Image src="/assets/projects/ups_app_screens.png" alt='UPS App Redesign' width="593" height="305" className='rounded-xl mb-2' priority='true'></Image>
                <p>

                </p>
            </div>
        </div>
    )
}

export default UpsApp
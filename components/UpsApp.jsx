import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { SmartphoneDevice } from 'iconoir-react'
import Footer from './Footer'

export const UpsApp = () => {
    return (
        <div className='w-full h-auto pt-[140px]'>
            <div className='max-w-[593px] h-full mx-auto flex flex-col px-4'>
                <h2 className='pb-6'>UPS App Redesign</h2>
                <div className='flex flex-wrap gap-2'>
                    <Link 
                        href="https://www.figma.com/proto/3m2XkVbguuGwNYfWknrFg4/UPS-App-Redesign?page-id=138%3A18&node-id=707%3A12467&viewport=113%2C371%2C0.03&scaling=scale-down&starting-point-node-id=707%3A12467" 
                        className="hover:text-zinc-50 dark:hover:text-zinc-900 inline-flex w-fit justify-center rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black py-1 pl-3 pr-3 text-l font-regular dark:text-zinc-100 text-zinc-900 hover:bg-zinc-900 dark:hover:bg-zinc-100  hover:border-zinc-900 dark:hover-border-100 gap-2" 
                        target="_blank"
                    >
                    <SmartphoneDevice className="text-xs self-center stroke-2"/>
                    <p className="text-sm font-medium self-center">View Prototype</p>
                    </Link>
                    <Link 
                        href="https://www.alicesopp.com/" 
                        className="hover:text-zinc-50 dark:hover:text-zinc-900 inline-flex w-fit justify-center rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black py-1 pl-1 pr-3 text-l font-regular dark:text-zinc-100 text-zinc-900 hover:bg-zinc-900 dark:hover:bg-zinc-100  hover:border-zinc-900 dark:hover-border-100 gap-2" 
                        target="_blank"
                    >
                        <Image
                            src="/assets/projects/alice_sopp.jpeg"
                            alt="Alice Sopp"
                            width="30"
                            height="30"
                            className="rounded-full"
                            priority="true"
                        />                         
                        <p className="text-sm font-medium self-center">Alice</p>
                    </Link>
                </div>
                <p className='pb-10 pt-6 text-zinc-500'>
                The UPS app is a popular mobile application that allows users to track and manage their packages, schedule pick-ups, and access other UPS services on the go. However, the app had been criticized for its outdated design and lack of user-friendly features. As a result, I decided to undertake a redesign of the app to improve its user experience and functionality.
                <br />
                <br />
                <Image 
                    src="/assets/projects/ups_app.webp" 
                    alt='UPS App Redesign' 
                    width="593" 
                    height="305" 
                    className='rounded-xl mb-6' 
                    priority='true'
                />
                <br />
                <h3 className='text-2xl pb-2 text-zinc-900 dark:text-zinc-100'>Challenges</h3>
                The previous design was cluttered and difficult to navigate, which made it frustrating for users to find the information they needed. The app also lacked a cohesive design system, which made it difficult to create a consistent user experience across the app.
                <br />
                <br />
                <Image 
                    src="/assets/projects/comparisson.webp" 
                    alt='UPS App Redesign' 
                    width="593" 
                    height="305" 
                    className='rounded-xl mb-6' 
                    priority='true'
                />
                <br />
                <h3 className='text-2xl pb-2 text-zinc-900 dark:text-zinc-100'>Solution</h3>
                I started by conducting user research to understand the needs and pain points of UPS customers. I used this information to create a new design that was clean and easy to navigate. I also created a new design system that was consistent across the app. 
                <br />
                <br />
                <Image 
                    src="/assets/projects/ups_app_screens.webp" 
                    alt='UPS App Redesign' 
                    width="593" 
                    height="305"
                    className='rounded-xl mb-6' 
                />
                <br />
                <h3 className='text-2xl pb-2 text-zinc-900 dark:text-zinc-100'>Conclusion</h3>
                Overall, the UPS app redesign was a successful project that demonstrates the value of investing in user-centered design and testing to create a better product.
                </p>
                <Footer />
            </div>
        </div>
    )
}

export default UpsApp
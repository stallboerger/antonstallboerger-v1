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
                <Link href="https://www.figma.com/proto/3m2XkVbguuGwNYfWknrFg4/UPS-App-Redesign?page-id=138%3A18&node-id=707%3A12467&viewport=113%2C371%2C0.03&scaling=scale-down&starting-point-node-id=707%3A12467" className="hover:text-zinc-50 inline-flex w-fit justify-center rounded-lg border border-zinc-300 bg-white px-2 py-1 text-l font-regular text-zinc-700 hover:bg-zinc-900 hover:border-zinc-900 gap-2" target="_blank">
                    <SmartphoneDevice className="text-xs self-center"/>
                    <p className="text-ml">View Prototype</p>
                </Link>
                <p className='py-10'>
                The UPS app is a popular mobile application that allows users to track and manage their packages, schedule pick-ups, and access other UPS services on the go. However, the app had been criticized for its outdated design and lack of user-friendly features. As a result, I decided to undertake a redesign of the app to improve its user experience and functionality.
                <br />
                <br />
                <Image src="/assets/projects/ups_app.png" alt='UPS App Redesign' width="593" height="305" className='rounded-xl mb-2' priority='true'></Image>
                <br />
                <h3 className='text-2xl pb-2'>Challenges</h3>
                The previous design was cluttered and difficult to navigate, which made it frustrating for users to find the information they needed. The app also lacked a cohesive design system, which made it difficult to create a consistent user experience across the app.
                <br />
                <br />
                <Image src="/assets/projects/comparisson.png" alt='UPS App Redesign' width="593" height="305" className='rounded-xl mb-2' priority='true'></Image>
                <br />
                <h3 className='text-2xl pb-2'>Solution</h3>
                I started by conducting user research to understand the needs and pain points of UPS customers. I used this information to create a new design that was clean and easy to navigate. I also created a new design system that was consistent across the app. 
                <br />
                <br />
                <Image src="/assets/projects/ups_app_screens.png" alt='UPS App Redesign' width="593" height="305" className='rounded-xl mb-2' priority='true'></Image>
                <br />
                <h3 className='text-2xl pb-2'>Conclusion</h3>
                Overall, the UPS app redesign was a successful project that demonstrates the value of investing in user-centered design and testing to create a better product.
                </p>
                <Footer />
            </div>
        </div>
    )
}

export default UpsApp
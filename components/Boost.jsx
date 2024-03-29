import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SmartphoneDevice, Internet, User} from 'iconoir-react'
import Footer from './Footer'

export const Boost = () => {
    return (
        <div className='w-full h-auto pt-[140px]'>
            <div className='max-w-[593px] h-full mx-auto flex flex-col px-4'>
                <h2 className='pb-6'>Boost</h2>
                <div className='flex flex-wrap gap-2'>
                    <Link 
                        href="https://www.figma.com/proto/tpBz0t3tighs62W4aAS6J5/Boost?page-id=381%3A101&node-id=651%3A440&viewport=172%2C299%2C0.09&scaling=scale-down&starting-point-node-id=651%3A440" 
                        className="hover:text-zinc-50 dark:hover:text-zinc-900 inline-flex w-fit justify-center rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black py-1 pl-3 pr-3 text-l font-regular dark:text-zinc-100 text-zinc-900 hover:bg-zinc-900 dark:hover:bg-zinc-100  hover:border-zinc-900 dark:hover-border-100 gap-2" 
                        target="_blank"
                    >
                        <SmartphoneDevice className="text-xs self-center stroke-2"/>
                        <p className="text-sm font-medium self-center">View Prototype</p>
                    </Link>
                    <Link 
                        href="https://boost-three.vercel.app/index.html" 
                        className="hover:text-zinc-50 dark:hover:text-zinc-900 inline-flex w-fit justify-center rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black py-1 pl-3 pr-3 text-l font-regular dark:text-zinc-100 text-zinc-900 hover:bg-zinc-900 dark:hover:bg-zinc-100  hover:border-zinc-900 dark:hover-border-100 gap-2" 
                        target="_blank"
                    >
                        <Internet className="text-xs self-center stroke-2"/>
                        <p className="text-sm font-medium self-center">View Landingpage</p>
                    </Link>
                    <Link 
                        href="https://designwithtech.com/" 
                        className="hover:text-zinc-50 dark:hover:text-zinc-900 inline-flex w-fit justify-center rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black py-1 pl-1 pr-3 text-l font-regular dark:text-zinc-100 text-zinc-900 hover:bg-zinc-900 dark:hover:bg-zinc-100  hover:border-zinc-900 dark:hover-border-100 gap-2" 
                        target="_blank"
                    >
                        <Image
                            src="/assets/projects/florian_kiem1.jpg"
                            alt="Florian Kiem"
                            width="30"
                            height="30"
                            className="rounded-full"
                            priority="true"
                        /> 
                        <p className="text-sm font-medium self-center">Florian</p>
                    </Link>
                </div>
                <p className='pb-10 pt-6 text-zinc-500'>
                Boost is a app and product that focuses on personalized nutrients. It solves the problem of having to take multiple supplements with varying doses, by providing users with their own personalized nutrient pack. Boost has a seamless onboarding process that collects information about the user&apos;s lifestyle, basic information, and real-time data to calculate the exact nutrients that the user needs. In addition, Boost also comes with a dispenser device, which makes it easier to take the right amount of nutrients, without the hassle of measuring or counting pills.
                <br />
                <br />
                <Image 
                    src="/assets/projects/tinywow_4B3A8053_14337793.webp" 
                    alt='Device with Boost app and Packaging' 
                    width="593" 
                    height="305" 
                    className='rounded-xl mb-6 max-h-[340px]' 
                    priority='true'
                />
                <br />
                <h3 className='text-2xl pb-2 text-zinc-900 dark:text-zinc-100'>Onboarding</h3>
                Boost onboarding is simple and straightforward. It starts with a series of questions that help us understand nutritional requirements and current diet. Based on the answers, we create a personalized nutrition profile that takes into account your age, gender, weight, height, activity level and various different aspects of your everyday life.
                <br />
                <br />
                <Image 
                    src="/assets/projects/tinywow_4B3A8249_14337851.webp" 
                    alt='Boost App Onboarding' 
                    width="593" 
                    height="305" 
                    className='rounded-xl mb-6 max-h-[340px]' 
                    priority='true'
                />
                <br />
                <h3 className='text-2xl pb-2 text-zinc-900 dark:text-zinc-100'>Personalized Recommendation</h3>
                Based on your nutritional profile, Boost calculates your daily nutrient needs and gives you customized recommendations for vitamins, minerals, and other essential nutrients. Recommendations are updated daily based on weather and your step count to ensure you get the right amount of nutrients at the right time.
                <br />
                <br />
                <Image 
                    src="/assets/projects/tinywow_mockup_boost1_14337527.webp" 
                    alt='Boost App Mockup' 
                    width="593" 
                    height="305" 
                    className='rounded-xl mb-6 max-h-[340px]' 
                    priority='true'
                />
                <br />
                <h3 className='text-2xl pb-2 text-zinc-900 dark:text-zinc-100'>Dispenser</h3>
                The Boost dispenser is an device that dispenses your individual nutrients in the form of a powder. Simply dispense the powder into a glass of water and you have a delicious and nutrient-rich drink that helps you meet your daily nutritional needs.
                <br />
                <br />
                <Image 
                    src="/assets/projects/tinywow_4B3A8259_14399130.webp" 
                    alt='Boost Dispenser Device' 
                    width="593" 
                    height="305" 
                    className='rounded-xl mb-6 max-h-[340px]' 
                />
                <br />
                <h3 className='text-2xl pb-2 text-zinc-900 dark:text-zinc-100'>Branding</h3>
                We have also dealt with the topic of branding. What could the product and everything around it look like? We created packaging for the device, a landing page, a manual and the overall appearance.
                <br />
                <br />
                <Image 
                    src="/assets/projects/tinywow_packaging1_14337562.webp" 
                    alt='Boost Packaging Mockup' 
                    width="593" 
                    height="305" 
                    className='rounded-xl mb-6 max-h-[340px]' 
                />
                </p>
                <Footer/>
            </div>
        </div>
    )
}

export default Boost
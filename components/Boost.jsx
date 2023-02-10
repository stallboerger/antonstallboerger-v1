import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SmartphoneDevice, Internet } from 'iconoir-react'
import Footer from './Footer'

export const Boost = () => {
    return (
        <div className='w-full h-auto pt-[140px]'>
            <div className='max-w-[593px] h-full mx-auto flex flex-col px-4'>
                <h2 className='pb-6'>Boost</h2>
                <div className='flex gap-2'>
                    <Link href="https://www.figma.com/proto/tpBz0t3tighs62W4aAS6J5/Boost?page-id=381%3A101&node-id=651%3A440&viewport=172%2C299%2C0.09&scaling=scale-down&starting-point-node-id=651%3A440" className="hover:text-purple-50 inline-flex w-fit justify-center rounded-lg border border-zinc-300 bg-white px-2 py-1 text-l font-regular text-zinc-700 hover:bg-zinc-900 hover:border-zinc-900 gap-2" target="_blank">
                        <SmartphoneDevice className="text-xs self-center"/>
                        <p className="text-ml">View Prototype</p>
                    </Link>
                    <Link href="https://boost-three.vercel.app/index.html" className="hover:text-purple-50 inline-flex w-fit justify-center rounded-lg border border-zinc-300 bg-white px-2 py-1 text-l font-regular text-zinc-700 hover:bg-zinc-900 hover:border-zinc-900 gap-2" target="_blank">
                        <Internet className="text-xs self-center"/>
                        <p className="text-ml">View Landingpage</p>
                    </Link>
                </div>
                <p className='py-10'>
                Boost is an innovative app and product designed to help people track their daily nutrient intake and make it easier for them to receive personalized nutrients in the form of a powder that can be easily dissolved in a glass of water. The product and app are designed to work seamlessly together to help users identify their nutrient deficiencies, understand their daily needs and receive personalized nutrient recommendations based on weather and step count.
                <br />
                <br />
                <Image src="/assets/projects/homy_app.png" alt='' width="593" height="305" className='rounded-xl mb-2' priority='true'></Image>
                <br />
                <h3 className='text-2xl pb-2'>Problem</h3>
                Many homeowners are unaware of their home&apos;s energy usage and the ways in which they can reduce it. This can lead to higher energy bills and a larger carbon footprint. In addition, individuals with disabilities may face challenges in accessing and controlling various aspects of their home, such as lighting, temperature, and appliances.
                <br />
                <br />
                <Image src="/assets/projects/homy1_portfolio.png" alt='' width="593" height="305" className='rounded-xl mb-2' priority='true'></Image>
                <br />
                <h3 className='text-2xl pb-2'>Solution</h3>
                Homy is a smart home app that helps users monitor and control their home&apos;s energy usage through a variety of features. The app includes a dashboard that displays real-time energy usage data, as well as tips and recommendations on how to reduce energy consumption. Users can also set energy-saving goals and track their progress over time.
                </p>
                <Footer/>
            </div>
        </div>
    )
}

export default Boost
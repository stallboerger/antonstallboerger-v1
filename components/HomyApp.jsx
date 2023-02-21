import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SmartphoneDevice, User } from 'iconoir-react'
import Footer from './Footer'

export const HomyApp = () => {
    return (
        <div className='w-full h-auto pt-[140px]'>
            <div className='max-w-[593px] h-full mx-auto flex flex-col px-4'>
                <h2 className='pb-6'>Homy App</h2>
                <div className='flex gap-4 flex-wrap'>
                    <Link href="https://www.figma.com/proto/Q8Hj1VlDqYiPw9rx6n1SvP/Visual-Prototyping-Smart-Home-App?page-id=66%3A2&node-id=331%3A6081&viewport=-378%2C-1110%2C0.05&scaling=scale-down&starting-point-node-id=331%3A6081&show-proto-sidebar=1" className="hover:text-purple-50 inline-flex w-fit justify-center rounded-lg border border-zinc-300 bg-white px-2 py-1 text-l font-regular text-zinc-700 hover:bg-zinc-900 hover:border-zinc-900 gap-2" target="_blank">
                        <SmartphoneDevice className="text-xs self-center stroke-2"/>
                        <p className="text-sm font-medium self-center">View Prototype</p>
                    </Link>
                    <Link 
                        href="https://www.nilseller.com/" 
                        className="hover:text-purple-50 inline-flex w-fit justify-center rounded-lg border border-zinc-300 bg-white px-2 py-1 text-l font-regular text-zinc-700 hover:bg-zinc-900 hover:border-zinc-900 gap-2" 
                        target="_blank">
                        <User className="text-xs self-center stroke-2"/>
                        <p className="text-sm font-medium self-center">Nils</p>
                    </Link>
                </div>
                <p className='pb-10 pt-6'>
                Smart home technology has become increasingly popular in recent years, with a variety of devices and apps available to automate and control various aspects of a home. However, many of these solutions focus on convenience and luxury, rather than energy efficiency and accessibility. Homy is a smart home app concept that aims to address these issues by providing users with a simple and intuitive way to monitor and control their home&apos;s energy usage, as well as make their home more accessible for people with disabilities.
                <br />
                <br />
                <Image src="/assets/projects/homy_app.webp" alt='' width="593" height="305" className='rounded-xl mb-2' priority='true'></Image>
                <br />
                <h3 className='text-2xl pb-2'>Problem</h3>
                Many homeowners are unaware of their home&apos;s energy usage and the ways in which they can reduce it. This can lead to higher energy bills and a larger carbon footprint. In addition, individuals with disabilities may face challenges in accessing and controlling various aspects of their home, such as lighting, temperature, and appliances.
                <br />
                <br />
                <Image src="/assets/projects/homy1_portfolio.webp" alt='' width="593" height="305" className='rounded-xl mb-2' priority='true'></Image>
                <br />
                <h3 className='text-2xl pb-2'>Solution</h3>
                Homy is a smart home app that helps users monitor and control their home&apos;s energy usage through a variety of features. The app includes a dashboard that displays real-time energy usage data, as well as tips and recommendations on how to reduce energy consumption. Users can also set energy-saving goals and track their progress over time.
                </p>
                <Footer/>
            </div>
        </div>
    )
}

export default HomyApp
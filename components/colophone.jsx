import React from 'react'
import Footer from './Footer'
import Image from 'next/image'
import Link from 'next/link'

export const Colophone = () => {
    return (
        <div className='w-full h-auto pt-[140px]'>
            <div className='max-w-[593px] h-full mx-auto flex flex-col px-4'>
                <h2 className='pb-6'>Colophone</h2>
                <div className='mb-10'>
                    <Image src="/assets/colophone/colophone.webp" alt='Anton Stallbörger Quality' width="593" height="305" className='rounded-xl object-cover mb-4 max-h-[561px]' priority='true'></Image>
                    <h4 className='mb-2 mt-6 text-xl'>Typography</h4>
                    <p className='mb-10 leading-relaxed'>
                        <a href='https://rsms.me/inter/' className='text-zinc-500 hover:text-zinc-900 w-fit'>Inter</a> is a typeface designed and published by <a href='https://rsms.me/' className='text-zinc-500 hover:text-zinc-900 w-fit'>Rasmus Andersson</a>. It is carefully crafted & designed for computer screens. Free for personal and commercial use.
                    </p>
                    <h4 className='mb-2 mt-6 text-xl'>Tech stack</h4>
                    <p className='mb-10 leading-relaxed'>
                        Built with <a href='https://nextjs.org/' className='text-zinc-500 hover:text-zinc-900 w-fit'>Next.js</a>, <a href='https://tailwindcss.com/' className='text-zinc-500 hover:text-zinc-900 w-fit'>Tailwind CSS</a>, and <a href='https://headlessui.com/' className='text-zinc-500 hover:text-zinc-900 w-fit'>Headless UI</a>. Hosted on <a href='https://vercel.com/home' className='text-zinc-500 hover:text-zinc-900 w-fit'>Vercel</a>. Privacy friendly analytics with <a href='https://vercel.com/analytics' className='text-zinc-500 hover:text-zinc-900 w-fit'>Vercel Analytics</a>.
                        <br />
                        <br />
                        <a href="https://github.com/antonstallboerger/nextjs-tailwind-portfolio" className='text-zinc-500 hover:text-zinc-900 w-fit mb-10'>GitHub Repository</a>
                    </p>
                    
                    <h4 className='mb-2 mt-6 text-xl'>Photography</h4>
                    <p className='mb-10 leading-relaxed'>
                        Images were taken or created by Anton Stallbörger, if not stated otherwise.
                    </p>
                    <h4 className='mb-2 mt-6 text-xl'>Great humans</h4>
                    <p className='mb-6 leading-relaxed'>
                        I am especially grateful for the support of the following humans:
                    </p>
                    <div className='flex flex-col gap-2 mb-10'>
                        <a href="https://linusrogge.com/" className='text-zinc-500 hover:text-zinc-900 w-fit'>Linus Rogge</a>
                        <a href="https://designwithtech.com/" className='text-zinc-500 hover:text-zinc-900 w-fit'>Florian Kiem</a>
                        <a href="https://www.nilseller.com/" className='text-zinc-500 hover:text-zinc-900 w-fit'>Nils Eller</a>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    )
}

export default Colophone
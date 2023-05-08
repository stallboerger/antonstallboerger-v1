import React from 'react'
import Footer from './Footer'
import Image from 'next/image'

export const Colophon = () => {
    return (
        <div className='w-full h-auto pt-[140px]'>
            <div className='max-w-[593px] h-full mx-auto flex flex-col px-4'>
                <h2 className='pb-6'>Colophon</h2>
                <div className='mb-10'>
                    <Image 
                        src="/assets/colophone/colophone.webp" 
                        alt='Anton Stallbörger Colophon' 
                        width="593" 
                        height="305" 
                        className='rounded-xl object-cover mb-20 max-h-[561px]' 
                        priority='true'
                    />
                    <h4 className='mb-4 text-xl'>Typography</h4>
                    <p className='mb-20 leading-relaxed text-zinc-500'>
                        <a href='https://rsms.me/inter/' className='text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 w-fit underline' target="_blank" rel="noreferrer">Inter</a> is a typeface designed and published by <a href='https://rsms.me/' className='text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 w-fit underline' target="_blank" rel="noreferrer">Rasmus Andersson</a>. It is carefully crafted & designed for computer screens. Free for personal and commercial use.
                    </p>
                    <h4 className='mb-4 text-xl'>Tech stack</h4>
                    <p className='mb-6 leading-relaxed text-zinc-500'>
                        Built with <a href='https://nextjs.org/' className='text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 w-fit underline' target="_blank" rel="noreferrer">Next.js</a>, <a href='https://tailwindcss.com/' className='text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 w-fit underline' target="_blank" rel="noreferrer">Tailwind CSS</a>, and <a href='https://headlessui.com/' className='text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 w-fit underline' target="_blank" rel="noreferrer">Headless UI</a>. Hosted on <a href='https://vercel.com/home' className='text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 w-fit underline' target="_blank" rel="noreferrer">Vercel</a>. Privacy friendly analytics with <a href='https://vercel.com/analytics' className='text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 w-fit underline' target="_blank" rel="noreferrer">Vercel Analytics</a>.
                    </p>    
                    <a href="https://github.com/antonstallboerger/nextjs-tailwind-portfolio" className='text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 w-fit underline' target="_blank" rel="noreferrer">GitHub Repository</a>
                    
                    
                    <h4 className='mb-4 mt-20 text-xl'>Photography</h4>
                    <p className='mb-20 leading-relaxed text-zinc-500'>
                        Images were taken or created by Anton Stallbörger, if not stated otherwise.
                    </p>

                    <h4 className='mb-4 mt-6 text-xl'>Inspiration</h4>
                    <div className='flex flex-col gap-2 mb-20'>
                        <a 
                            href="https://linusrogge.com/" 
                            className='text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 w-fit underline' 
                            target="_blank" 
                            rel="noreferrer"
                        >
                            Linus Rogge
                        </a>
                        <a 
                            href="https://sdrn.co/" 
                            className='text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 w-fit underline' 
                            target="_blank" 
                            rel="noreferrer"
                        >
                            Siddharth Arun
                        </a>
                        <a 
                            href="https://www.cedric.design/" 
                            className='text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 w-fit underline' 
                            target="_blank" 
                            rel="noreferrer"
                        >
                            Cédric Moore
                        </a>
                        <a 
                            href="https://www.wireframe.co/" 
                            className='text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 w-fit underline' 
                            target="_blank" 
                            rel="noreferrer"
                        >
                            Wireframe
                        </a>
                        <a 
                            href="https://foundation.app/" 
                            className='text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 w-fit underline' 
                            target="_blank" 
                            rel="noreferrer"
                        >
                            Foundation
                        </a>
                        <a 
                            href="https://www.studiolenzing.com/" 
                            className='text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 w-fit underline' 
                            target="_blank" 
                            rel="noreferrer"
                        >
                            Studio Lenzing
                        </a>
                        <a 
                            href="https://goods.wtf/" 
                            className='text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 w-fit underline' 
                            target="_blank" 
                            rel="noreferrer"
                        >
                            Goods
                        </a>
                    </div>

                    <h4 className='mb-4 mt-6 text-xl'>Great humans</h4>
                    <p className='mb-6 leading-relaxed text-zinc-500'>
                        I am especially grateful for the support of the following humans:
                    </p>
                    <div className='flex flex-col gap-2 mb-10'>
                        <a 
                            href="https://linusrogge.com/" 
                            className='text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 w-fit underline' 
                            target="_blank" 
                            rel="noreferrer"
                        >
                            Linus Rogge
                        </a>
                        <a 
                            href="https://designwithtech.com/" 
                            className='text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 w-fit underline'
                            target="_blank" 
                            rel="noreferrer"
                        >
                            Florian Kiem
                        </a>
                        <a 
                            href="https://www.nilseller.com/" 
                            className='text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 w-fit underline'
                            target="_blank" 
                            rel="noreferrer"
                        >
                            Nils Eller
                        </a>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    )
}

export default Colophon
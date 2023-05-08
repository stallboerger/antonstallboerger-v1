import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Footer from './Footer'
// import Carousel from './Carousel'
import { NavArrowRight } from 'iconoir-react'

const quotes = [
    "Life is so short you can't waste even a day subscribing to what someone thinks you can do versus knowing what you can do - Virgil Abloh",
    "Happiness does not derive from the possession of goods, but from the ability to enjoy them - Bernard Grasset",
    "One should always be curious. Not a passive curiosity dependent upon information received, but an aggressive curiosity that compels one to seek things out and ascertain them for oneself - Issey Miyake",
    "The role of the designer is that of a very good, thoughtful host anticipating the needs of his guests - Charles Eames",
    "The reward for good work is more work - Tom Sachs",
    "Less, but better - Dieter Rams",
    "The details are not the details. They make the design - Charles Eames",
    "Design is not just what it looks like and feels like. Design is how it works - Steve Jobs",
    "I strive for two things in design: simplicity and clarity. Great design is born of those two things - Lindon Leader",
    "Everything should be made as simple as possible, but not simpler - Albert Einstein",
    "Good design is obvious. Great design is transparent - Joe Sparano",
  ];

export const About = () => {
    const [quote, setQuote] = useState('');

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]);
    }, []);

    return (
        <div className='w-full h-auto pt-[140px]'>
            <div className='max-w-[593px] h-full mx-auto flex flex-col px-4'>
                <h2 className='pb-10'>About</h2>
                <p className='pb-10 text-zinc-900 dark:text-zinc-100 italic'>
                    {quote}
                </p>
                <Image 
                    src="/assets/about/me.webp" 
                    alt='Anton Stallbörger' 
                    width="593" 
                    height="340" 
                    className='rounded-xl mb-10 max-h-[340px] object-cover' 
                    priority='true'
                />
                
                <p className='pb-10 text-zinc-500'>
                I am a passionate designer and developer who is driven by a love for great, high-quality and thoughtful design. Design is an integral part of my everyday life, and I believe that it has the power to shape and improve the world around us.
                <br />
                <br />
                Pushing the boundaries of design and striving to create something truly unique and meaningful is a constant pursuit of mine. In addition to my work, I also value meaningful conversations and good music, which help to inspire and motivate me in my creative process.
                </p>
                <Image 
                    src="/assets/about/c1.png" 
                    alt='Anton Stallbörger Pursuit of Perfection' 
                    width="593" 
                    height="305" 
                    className='rounded-xl object-cover mb-10 max-h-[305px]' 
                    priority='true'
                />
                <p className='pb-10 text-zinc-500'>
                My goal is to continue improving, learning, and exploring all the different areas life has to offer, with the ultimate goal of building a beloved home with the highly talented people at <Link href="https://normcph.com/" target="_blank" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 w-fit underline">Norm Architects</Link>.
                </p>
                <h3 className='text-2xl pb-6'>Tools I admire</h3>
                <Link href="https://www.figma.com/" className='flex w-full gap-4 h-auto bg-zinc-100 dark:bg-zinc-900 p-4 rounded-xl mb-4 hover:translate-y-[-2px] transition-all duration-300 ease-in-out transform'>
                    <Image 
                        src="/assets/about/figma.webp" 
                        alt="/" 
                        width="50" 
                        height="50" 
                        className='self-center rounded-full border border-zinc-100/10'
                    />
                    <div className='self-center'>
                        <p className='text-ml font-medium'>
                        Figma
                        </p>
                        <p className='text-ml text-zinc-500'>
                        The collaborative interface design tool
                        </p>
                    </div>
                </Link>
                <Link href="https://iconoir.com/" className='flex w-full gap-4 h-auto bg-zinc-100 dark:bg-zinc-900 p-4 rounded-xl mb-4 hover:translate-y-[-2px] transition-all duration-300 ease-in-out transform'>
                    <Image 
                        src="/assets/about/iconoir.webp" 
                        alt="/" 
                        width="50" 
                        height="50" 
                        className='self-center rounded-full border border-zinc-100/10'
                    />
                    <div className='self-center'>
                        <p className='text-ml font-medium'>
                        Iconoir
                        </p>
                        <p className='text-ml text-zinc-500'>
                        Open-Source high quality Icon collection
                        </p>
                    </div>
                </Link>
                <Link href="https://arc.net/" className='flex w-full gap-4 h-auto bg-zinc-100 dark:bg-zinc-900 p-4 rounded-xl mb-4 hover:translate-y-[-2px] transition-all duration-300 ease-in-out transform'>
                    <Image 
                        src="/assets/about/arc.webp" 
                        alt="/" 
                        width="50" 
                        height="50" 
                        className='self-center rounded-full border border-zinc-100/10'
                    />
                    <div className='self-center'>
                        <p className='text-ml font-medium'>
                        Arc Browser
                        </p>
                        <p className='text-ml text-zinc-500'>
                        A calmer, more personal Browser
                        </p>
                    </div>
                </Link>
                <Link href="https://nextjs.org/" className='flex w-full gap-4 h-auto bg-zinc-100 dark:bg-zinc-900 p-4 rounded-xl mb-4 hover:translate-y-[-2px] transition-all duration-300 ease-in-out transform'>
                    <Image 
                        src="/assets/about/nextjs.webp" 
                        alt="/" 
                        width="50" 
                        height="50" 
                        className='self-center rounded-full border border-zinc-100/10'
                    />
                    <div className='self-center'>
                        <p className='text-ml font-medium'>
                        Next.js
                        </p>
                        <p className='text-ml text-zinc-500'>
                        The React Framework for Production
                        </p>
                    </div>
                </Link>
                <Link href="https://www.raycast.com/" className='flex w-full gap-4 h-auto bg-zinc-100 dark:bg-zinc-900 p-4 rounded-xl mb-4 hover:translate-y-[-2px] transition-all duration-300 ease-in-out transform'>
                    <Image
                        src="/assets/about/raycast.webp" 
                        alt="/" 
                        width="50" 
                        height="50" 
                        className='self-center rounded-full border border-zinc-100/10'
                    />
                    <div className='self-center'>
                        <p className='text-ml font-medium'>
                        Raycast
                        </p>
                        <p className='text-ml text-zinc-500'>
                        Blazingly fast, totally extendable launcher
                        </p>
                    </div>
                </Link>
                <Link href="https://www.curations.tech/" className='h-full mb-8 '>
                <div className='flex h-fit text-zinc-500 group'>
                    <p className='text-sm font-medium underline h-auto self-center group-hover:text-zinc-900 dark:group-hover:text-zinc-100  group-dark:hover:text-zinc-100'>
                      More stunning tools
                    </p> 
                    <NavArrowRight className='text-xs stroke-2 self-center group-hover:text-zinc-900 dark:group-hover:text-zinc-100 group-hover:translate-x-0.5 transition-all duration-300 ease-in-out transform'/>
                  </div>
                </Link>                
                <Footer />
            </div>
        </div>
    )
}

export default About
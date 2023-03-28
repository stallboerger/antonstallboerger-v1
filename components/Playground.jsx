import React from 'react'
import Footer from './Footer'
import Image from 'next/image'
import Link from 'next/link'
import { NavArrowRight } from 'iconoir-react';

export const Playground = () => {
    return (
        <div className='w-full h-auto pt-[140px]'>
            <div className='max-w-[593px] h-full mx-auto flex flex-col px-4'>
                <h2 className='pb-6'>Playground</h2>
                <div className='mb-10'>
                    <Link href="/greatapps" className='group'>
                        <Image 
                        src="/assets/playground/783shots_so.webp"  
                        alt='Curations' 
                        width="593" 
                        height="305" 
                        className='rounded-xl mb-2 group-hover:translate-y-[-2px] transition-all duration-300 ease-in-out transform'
                        />
                        <div className='flex pb-6 justify-between'>
                            <div>
                                <p className='text-sm font-medium'>
                                Great Apps
                                </p>
                                <p className='text-sm text-zinc-500'>
                                Apps with that special something
                                </p>
                                <p className='text-sm text-zinc-500'>
                                Q1 2023
                                </p>
                            </div>
                            <div className='flex h-fit text-zinc-500 group-hover:text-zinc-900'>
                                <p className='text-sm h-auto self-center font-medium'>
                                Learn more
                                </p> 
                                <NavArrowRight className='text-xs stroke-2 self-center group-hover:translate-x-0.5 transition-all duration-300 ease-in-out transform'/>
                            </div>
                        </div>
                    </Link>
                    <Link href="/greatfinds" className='group'>
                        <Image 
                        src="/assets/playground/great_finds1.webp"  
                        alt='Curations' 
                        width="593" 
                        height="305" 
                        className='rounded-xl mb-2 group-hover:translate-y-[-2px] transition-all duration-300 ease-in-out transform'
                        />
                        <div className='flex pb-6 justify-between'>
                            <div>
                                <p className='text-sm font-medium'>
                                Great Finds
                                </p>
                                <p className='text-sm text-zinc-500'>
                                Home of all bookmarks and Safari tabs
                                </p>
                                <p className='text-sm text-zinc-500'>
                                Q1 2023
                                </p>
                            </div>
                            <div className='flex h-fit text-zinc-500 group-hover:text-zinc-900'>
                                <p className='text-sm h-auto self-center font-medium'>
                                Learn more
                                </p> 
                                <NavArrowRight className='text-xs stroke-2 self-center group-hover:translate-x-0.5 transition-all duration-300 ease-in-out transform'/>
                            </div>
                        </div>
                    </Link>
                    <Link href="/sustainablegoods" className='group'>
                        <Image 
                        src="/assets/playground/sustainable_goods_1.webp"  
                        alt='Sustainable Goods' 
                        width="593" 
                        height="305" 
                        className='rounded-xl mb-2 group-hover:translate-y-[-2px] transition-all duration-300 ease-in-out transform'
                        />
                        <div className='flex pb-6 justify-between'>
                            <div>
                                <p className='text-sm font-medium'>
                                Sustainable Goods
                                </p>
                                <p className='text-sm text-zinc-500'>
                                Quality, long lasting and sustainable goods
                                </p>
                                <p className='text-sm text-zinc-500'>
                                Q4 2022
                                </p>
                            </div>
                            <div className='flex h-fit text-zinc-500 group-hover:text-zinc-900'>
                                <p className='text-sm h-auto self-center font-medium'>
                                Learn more
                                </p> 
                                <NavArrowRight className='text-xs stroke-2 self-center group-hover:translate-x-0.5 transition-all duration-300 ease-in-out transform'/>
                            </div>
                        </div>
                    </Link>
                    <Link href="/heartbeatos" className='group'>
                        <Image 
                        src="/assets/playground/905shots_so.webp"  
                        alt='Curations' 
                        width="593" 
                        height="305" 
                        className='rounded-xl mb-2 group-hover:translate-y-[-2px] transition-all duration-300 ease-in-out transform'
                        />
                        <div className='flex pb-6 justify-between'>
                            <div>
                                <p className='text-sm font-medium'>
                                HeartbeatOS
                                </p>
                                <p className='text-sm text-zinc-500'>
                                Interface to visualize your heart rate
                                </p>
                                <p className='text-sm text-zinc-500'>
                                Q1 2023
                                </p>
                            </div>
                            <div className='flex h-fit text-zinc-500 group-hover:text-zinc-900'>
                                <p className='text-sm h-auto self-center font-medium'>
                                Learn more
                                </p> 
                                <NavArrowRight className='text-xs stroke-2 self-center group-hover:translate-x-0.5 transition-all duration-300 ease-in-out transform'/>
                            </div>
                        </div>
                    </Link>
                </div>

                <Footer />
            </div>
        </div>
    )
}

export default Playground 
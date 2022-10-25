import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='fixed w-full h-[53px] z-[100] backdrop-blur-md'>
            <div className='flex justify-between items-center w-full h-full px-4 border-b-[1px] bg-white opacity-80'>
                <Link href='/'>
                    <a>
                        <li className='font-regular text-l list-none text-zinc-600'>Anton Stallbörger</li>
                    </a>
                </Link>
                <div>
                    <ul className='hidden md:flex border-[1px] hover:bg-zinc-100 py-1 px-2 rounded-lg'>
                        <Link href='/'>
                            <li className='text-l'>Contact</li>
                        </Link>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Navbar
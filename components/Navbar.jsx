import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Dropdown from '../components/Dropdown'

const Navbar = () => {
    return (
        <div className='fixed w-full h-[53px] z-1 backdrop-blur-md'>
            <div className='flex justify-between items-center w-full h-full px-4 border-b-[1px] bg-white opacity-80'>
                <Link href='/'>
                    <ul>
                        <li className='font-regular text-l list-none text-zinc-600'>Anton Stallbörger</li>
                    </ul> 
                </Link>
                <Dropdown />
            </div>
        </div>
    )
}

export default Navbar
import Link from 'next/link'
import React from 'react'
import Dropdown from '../components/Dropdown';
import AntonDropdown from '../components/AntonDropdown';
import { NavArrowDown } from 'iconoir-react';

const Navbar = () => {
    return (
        <div className='fixed w-full h-[53px] z-999'>
            <div className='flex justify-between items-center w-full h-full px-4 border-b-[1px] bg-white'>
                <div className='flex gap-4'>
                    <Link href='/' className='text-zinc-900 self-center'>
                        Anton Stallbörger
                    </Link>
                    <AntonDropdown />
                </div>
                <div className='flex gap-4 text-zinc-500'>
                    {/* <Link href="/about" className='self-center hidden sm:block hover:text-zinc-900 hover:pointer'>About</Link> */}
                    {/* <Link href="/thoughts" className='self-center hidden sm:block hover:text-zinc-900 hover:pointer'>Thoughts</Link> */}
                    <Dropdown />
                </div>
            </div>
        </div>
    )
}

export default Navbar
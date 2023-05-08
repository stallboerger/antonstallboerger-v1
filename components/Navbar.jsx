import Link from 'next/link'
import React from 'react'
import Dropdown from '../components/Dropdown';
import AntonDropdown from '../components/AntonDropdown';
import ExploreDropdown from './ExploreDropdown';
import { NavArrowDown } from 'iconoir-react';

const Navbar = () => {
    return (
        <div className='fixed w-full h-[53px] z-50'>
            <div className='flex justify-between items-center w-full h-full px-4 border-b-[1px] dark:border-zinc-800 bg-white dark:bg-black'>
                <div className='flex gap-2'>
                    <Link href='/' className='text-zinc-900 hover:text-zinc-700 dark:text-zinc-100 dark:hover:text-zinc-400 text-base font-medium self-center'>
                        Anton Stallbörger
                    </Link>
                    <ExploreDropdown />
                </div>
                <div className='flex gap-4 text-zinc-500'>
                    <Dropdown />
                </div>
            </div>
        </div>
    )
}

export default Navbar
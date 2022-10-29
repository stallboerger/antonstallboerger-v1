import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Dropdown = () => {
    return (
        <div className='fixed flex items-end w-full h-[100px] z-[100] flex-row-reverse'>
           <div className='w-[300px] h-auto backdrop-blur-md border-[1px] mt-20 mr-4 rounded-lg'>
                <h3>Contact</h3>
                <ul>
                    <li>Email</li>
                    <li>Social</li>
                </ul>
           </div>
        </div>
    )
}

export default Dropdown
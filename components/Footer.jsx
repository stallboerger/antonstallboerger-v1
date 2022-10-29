import React from "react";
import Link from 'next/link'

export const Footer = () => {
    return (
        <div className='w-full h-40'>
            <div className="w-full h-[1px] bg-zinc-200 mb-6"></div>
            <p className="credits text-sm text-zinc-500 mb-2">&copy; Anton Stallbörger 2022. This website is hosted and deployed via <a href="https://vercel.com/" target="_blank">Vercel</a>.</p>
            <div className="flex gap-2 text-zinc-500 text-sm">
                <a href="/">Legal Notice</a>
                <a href="/">Privacy Policy</a>
            </div>
        </div>
    )
}

export default Footer
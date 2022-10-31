import React from "react";
import Link from 'next/link'

export const Footer = () => {
    return (
        <div className='w-full h-auto mb-20'>
            <div className="w-full h-[1px] bg-zinc-200 mb-6"></div>
            <p className="credits text-sm text-zinc-500 mb-2">&copy; Anton Stallbörger 2022. This website is hosted and deployed via <Link href='https://vercel.com/' target="_blank" className="font-medium hover:underline">Vercel</Link>. Privacy-friendly Analytics by <Link href="https://vercel.com/analytics" target="_blank" className="font-medium hover:underline">Vercel Analytics</Link>.</p>
            <div className="flex gap-4 text-zinc-500 text-sm">
                <Link href='/' className="underline">Legal Notice</Link>
                <Link href='/' className="underline">Privacy Policy</Link>
            </div>
        </div>
    )
}

export default Footer
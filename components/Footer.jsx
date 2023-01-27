import React from "react";
import Link from 'next/link'
import { GitHub, Iconoir, Instagram, Medal1St, Twitter, TwitterVerifiedBadge, GoogleDocs } from 'iconoir-react';

export const Footer = () => {
    return (
        <div className='w-full h-auto mb-20'>
            <div className="w-full h-[1px] bg-zinc-200 mb-6"></div>
            <div className="flex flex-row gap-6 pb-6">
                        <Link href="https://twitter.com/AntonStalli" className="hover:text-blue-600 flex flex-row gap-1" target="_blank">
                            <Twitter className="text-xs"/>
                            <p className="text-sm">Twitter</p>
                        </Link>
                        <Link href="https://www.instagram.com/saved_that/" className="hover:text-red-600 flex flex-row gap-1" target="_blank">
                            <Instagram className="text-xs"/>
                            <p className="text-sm">Instagram</p>
                        </Link>
                        <Link href="https://github.com/antonstallboerger" className="hover:text-purple-600 flex flex-row gap-1" target="_blank">
                            <GitHub className="text-xs"/>
                            <p className="text-sm">GitHub</p>
                        </Link>
                        <Link href="https://read.cv/antonsta" className="hover:text-orange-600 flex flex-row gap-1" target="_blank">
                            <GoogleDocs className="text-xs"/>
                            <p className="text-sm">CV</p>
                        </Link>
            </div>
            <p className="credits text-sm text-zinc-500 mb-6">&copy; Anton Stallbörger 2023. This website is hosted and deployed via <Link href='https://vercel.com/' target="_blank" className="hover:text-zinc-900">Vercel</Link>. 
            Privacy-friendly Analytics by <Link href="https://vercel.com/analytics" target="_blank" className="hover:text-zinc-900">Vercel Analytics</Link>.</p>
            <div className="flex gap-4 text-zinc-500 text-sm">
                <Link href='/about' className="hover:text-zinc-900">About</Link>
                <Link href='/legalnotice' className="hover:text-zinc-900">Legal Notice</Link>
                <Link href='/privacypolicy' className="hover:text-zinc-900">Privacy Policy</Link>
            </div>
        </div>
    )
}


export default Footer
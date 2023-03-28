import React from "react";
import Link from 'next/link'

export const Footer = () => {
    return (
        <div className='w-full h-auto mt-10 mb-20'>
            <div className="w-full h-[1px] bg-zinc-200 mb-6"></div>
            
            <div className="flex sm:flex-row flex-col gap-6 sm:gap-0 justify-between">
                <div className="flex  gap-12 text-zinc-500 text-sm">
                    <div className="flex flex-col gap-2">
                        <p className="text-sm font-medium text-zinc-900">Connect</p>
                        <a href="https://twitter.com/AntonStalli" className="hover:text-blue-600">Twitter</a>
                        <a href="https://github.com/antonstallboerger" className="hover:text-purple-600">GitHub</a>
                        <a href="https://read.cv/antonsta" className="hover:text-zinc-900">CV</a>
                        {/* <a href="https://www.cosmos.so/antonsta" className="hover:text-zinc-900">Cosmos</a> */}
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-sm font-medium text-zinc-900">Explore</p>
                        <Link href='/about' className="hover:text-zinc-900">About</Link>
                        <Link href='/thoughts' className="hover:text-zinc-900">Thoughts</Link>
                        <Link href='/playground' className="hover:text-zinc-900">Playground</Link>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-sm font-medium text-zinc-900">Information</p>
                        <Link href='/colophon' className="hover:text-zinc-900">Colophon</Link>
                        <Link href='/legalnotice' className="hover:text-zinc-900">Legal Notice</Link>
                        <Link href='/privacypolicy' className="hover:text-zinc-900">Privacy Policy</Link>
                    </div>
                </div>
                <p className="credits text-sm text-zinc-900 mb-6 font-medium">&copy; Anton Stallbörger 2023</p>
            </div>
            
        </div>
    )
}


export default Footer
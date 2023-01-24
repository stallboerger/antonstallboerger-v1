import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Footer from './Footer'
import { NavArrowRight } from 'iconoir-react'

export const Bookmarks = () => {
    return (
        <div className='w-full h-auto pt-[140px]'>
            <div className='max-w-[593px] h-full mx-auto flex flex-col px-4'>
                <h2 className='pb-6'>Bookmarks</h2>
                <blockquote class="twitter-tweet"><p lang="en" dir="ltr">it&#39;s time to push some boundaries <a href="https://t.co/2U6tQ0QAQk">pic.twitter.com/2U6tQ0QAQk</a></p>&mdash; raf 🌋 (@lfgraf) <a href="https://twitter.com/lfgraf/status/1617543701667921922?ref_src=twsrc%5Etfw">January 23, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                <Footer />
            </div>
        </div>
    )
}

export default Bookmarks
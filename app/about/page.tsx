import Image from 'next/image';
import Link from 'next/link';
import Carousel from 'components/carousel'

export const metadata = {
    title: 'About',
    description: 'Digital Product Designer and Developer',
};

export default function AboutPage() {
    return (
        <div className='w-full h-auto pt-[140px]'>
            <div className='max-w-[593px] h-full mx-auto flex flex-col px-4'>
                <h2 className='pb-6'>About</h2>
                <p className='pb-8'>
                “Life is so short you can&apos;t waste even a day subscribing to what someone thinks you can do versus knowing what you can do” - Virgil Abloh
                <br />
                <br />
                <Image src="/assets/about/me.webp" alt='Anton Stallbörger' width="593" height="340" className='rounded-xl mb-2 max-h-[340px] object-cover' priority></Image>
                <br />
                I am a passionate designer and developer who is driven by a love for great, high-quality and thoughtful design. Design is an integral part of my everyday life, and I believe that it has the power to shape and improve the world around us.
                <br />
                <br />
                Pushing the boundaries of design and striving to create something truly unique and meaningful is a constant pursuit of mine. In addition to my work, I also value meaningful conversations and good music, which help to inspire and motivate me in my creative process.
                <br />
                <br />
                <Carousel />
                My goal is to continue improving, learning, and exploring all the different areas life has to offer, with the ultimate goal of building a beloved home with the highly talented people at <Link href="https://normcph.com/" target="_blank" className="text-zinc-500 hover:text-zinc-900">Norm Architects</Link>.
                </p>
                <h3 className='text-2xl pb-4'>Tools I admire</h3>
                <Link href="https://www.figma.com/" className='  flex w-full gap-4 h-auto bg-zinc-100 p-4 rounded-xl mb-4 hover:bg-zinc-200'>
                    <Image src="/assets/about/figma.webp" alt="/" width="50" height="50" className='self-center rounded-full'></Image>
                    <div className='self-center'>
                        <p className='text-ml font-medium'>
                        Figma
                        </p>
                        <p className='text-ml text-zinc-500'>
                        The collaborative interface design tool
                        </p>
                    </div>
                </Link>
                <Link href="https://iconoir.com/" className='flex w-full gap-4 h-auto bg-zinc-100 p-4 rounded-xl mb-4 hover:bg-zinc-200'>
                    <Image src="/assets/about/iconoir.webp" alt="/" width="50" height="50" className='self-center rounded-full'></Image>
                    <div className='self-center'>
                        <p className='text-ml font-medium'>
                        Iconoir
                        </p>
                        <p className='text-ml text-zinc-500'>
                        Open-Source high quality Icon collection
                        </p>
                    </div>
                </Link>
                <Link href="https://arc.net/" className='flex w-full gap-4 h-auto bg-zinc-100 p-4 rounded-xl mb-4 hover:bg-zinc-200'>
                    <Image src="/assets/about/arc.webp" alt="/" width="50" height="50" className='self-center rounded-full'></Image>
                    <div className='self-center'>
                        <p className='text-ml font-medium'>
                        Arc Browser
                        </p>
                        <p className='text-ml text-zinc-500'>
                        A calmer, more personal Browser
                        </p>
                    </div>
                </Link>
                <Link href="https://nextjs.org/" className='flex w-full gap-4 h-auto bg-zinc-100 p-4 rounded-xl mb-4 hover:bg-zinc-200'>
                    <Image src="/assets/about/nextjs.webp" alt="/" width="50" height="50" className='self-center rounded-full'></Image>
                    <div className='self-center'>
                        <p className='text-ml font-medium'>
                        Next.js
                        </p>
                        <p className='text-ml text-zinc-500'>
                        The React Framework for Production
                        </p>
                    </div>
                </Link>
                <Link href="https://www.curations.tech/" className='h-full mb-8 '>
                <div className='flex h-fit text-zinc-500 group'>
                    <p className='text-sm h-auto self-center group-hover:text-zinc-900'>
                    More stunning tools
                    </p> 
                    <NavArrowRight className='text-xs self-center group-hover:text-zinc-900'/>
                </div>
                </Link>                
                <Footer />
            </div>
        </div>
    )
}
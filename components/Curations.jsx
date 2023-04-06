import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {Internet, User} from 'iconoir-react'
import Footer from './Footer'

export const Curations = () => {
    return (
        <div className='w-full h-auto pt-[140px]'>
            <div className='max-w-[593px] h-full mx-auto flex flex-col px-4'>
                <h2 className='pb-6'>Curations</h2>
                <div className='flex flex-wrap gap-2'>
                    <Link 
                        href="https://www.curations.tech/" 
                            className="hover:text-purple-50 inline-flex w-fit justify-center rounded-full border border-zinc-200 bg-white py-1 pl-2 pr-3 text-l font-regular text-zinc-900 hover:bg-zinc-900 hover:border-zinc-900 gap-2" 
                        target="_blank">
                        <Internet className="text-xs self-center stroke-2"/>
                        <p className="text-sm font-medium self-center">Visit Curations</p>
                    </Link>
                    <Link 
                        href="https://designwithtech.com/" 
                        className="hover:text-purple-50 inline-flex w-fit justify-center rounded-full border border-zinc-200 bg-white py-1 pl-1 pr-3 text-l font-regular text-zinc-900 hover:bg-zinc-900 hover:border-zinc-900 gap-2" 
                        target="_blank"
                    >
                        <Image
                            src="/assets/projects/florian_kiem1.jpg"
                            alt="Florian Kiem"
                            width="24"
                            height="24"
                            className="rounded-full"
                            priority="true"
                        />                         
                        <p className="text-sm font-medium self-center">Florian</p>
                    </Link>
                    <Link 
                        href="https://www.nilseller.com/" 
                        className="hover:text-purple-50 inline-flex w-fit justify-center rounded-full border border-zinc-200 bg-white py-1 pl-1 pr-3 text-l font-regular text-zinc-900 hover:bg-zinc-900 hover:border-zinc-900 gap-2" 
                        target="_blank">
                        <Image
                            src="/assets/projects/nils_eller_portrait.jpg"
                            alt="Florian Kiem"
                            width="24"
                            height="24"
                            className="rounded-full"
                            priority="true"
                        />  
                        <p className="text-sm font-medium self-center">Nils</p>
                    </Link>
                </div>
                
                <p className='pb-10 pt-6 text-zinc-500'>
                Curations is a website that offers a curated collection of stunning tools and website inspirations for free. The website was created with the goal of helping designers, developers, and everyone else discover new and innovative tools and ideas for their projects.
                <br />
                <br />
                <Image 
                    src="/assets/projects/curations.webp" 
                    alt='' 
                    width="593" 
                    height="305" 
                    className='rounded-xl mb-6' 
                    priority='true'
                />
                <br />
                <h3 className='text-2xl pb-2 text-zinc-900'>Features</h3>
                One of the key features of Curations is its extensive collection of design tools and resources. The website offers a wide range of design assets, including templates, graphics, icons, and more, all of which are carefully selected by the Curations team. This allows users to quickly find the resources they need to bring their creative ideas to life.
                <br />
                <br />
                <Image 
                    src="/assets/projects/ph_design_portfolio.webp" 
                    alt='' 
                    width="593" 
                    height="305" 
                    className='rounded-xl mb-6' 
                    priority='true'
                />
                <br />
                <h3 className='text-2xl pb-2 text-zinc-900'>Web Inspiration</h3>
                In addition to its design resources, Curations also features a section dedicated to website inspiration. This section showcases some of the most beautifully designed websites from around the world, offering users a chance to see what&apos;s possible with modern design techniques and technologies.
                <br />
                <br />
                <Image 
                    src="/assets/projects/ph_productivity_portfolio.webp" 
                    alt='' 
                    width="593" 
                    height="305" 
                    className='rounded-xl mb-6' 
                    priority='true'
                />
                <br />
                <h3 className='text-2xl pb-2 text-zinc-900'>Interface</h3>
                Another key aspect of Curations is its user-friendly interface. The website is easy to navigate and users can search for specific resources or browse through the different categories to find what they need. This makes it easy for users to find the resources they need, even if they don&apos;t know exactly what they&apos;re looking for.
                <br />
                <br />
                <Image 
                    src="/assets/projects/featured_portfolio.webp" 
                    alt='' 
                    width="593" 
                    height="305" 
                    className='rounded-xl mb-6' 
                    priority='true'
                />
                <br />
                <h3 className='text-2xl pb-2 text-zinc-900'>Conclusion</h3>
                Overall, Curations has been a greatly appreciated by users since its launch, thanks to its extensive collection of high-quality design resources and its user-friendly interface. Its focus on providing free resources has also helped it to gain a loyal following among designers and creative professionals.
                </p>
                <Footer />
            </div>
        </div>
    )
}

export default Curations
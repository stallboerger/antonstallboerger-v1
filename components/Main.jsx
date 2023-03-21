import React from 'react'
import Image from 'next/image'
import Footer from '../components/Footer'
import Link from 'next/link'
import GMTTime from './GMTTime';
import { NavArrowRight } from 'iconoir-react';

export const Main = () => {
  return (
    <div className='w-full h-auto pt-[140px] md:pt-[180px]'>
        <div className='max-w-[593px] h-full mx-auto flex px-4'>
            <div>
              <div className='pb-2 flex flex-row'>
                  <p className='text-sm text-zinc-500'>Schwäbisch Gmünd, GER&thinsp;・&thinsp;  </p>
                  <GMTTime /> 
                  <p className='text-sm text-zinc-500'>&nbsp; GMT</p>
              </div>
              <h1>
              Digital Product Designer and Developer driven 
              <br />
              by curiosity
              </h1>
              <p className='py-6'>
              At the moment, I&apos;m a student at the University of Design in Schwäbisch Gmünd, Germany where I&apos;m focusing on digital products and development. I love creating products that are functional, aesthetically pleasing, and user-friendly. In addition, I&apos;m an avid supporter of the open source movement and the community that surrounds it.
              </p>
              <p className='pb-6'>
              Here are some of my curated works I&apos;ve done in the past.
              </p>

              <Link href="boost" className='group'>
                <Image 
                  src="/assets/projects/tinywow_mockup_boost1_14337527.webp" 
                  alt='Boost' 
                  width="593" 
                  height="305" 
                  className='rounded-xl mb-2 object-cover group-hover:translate-y-[-2px] transition-all duration-300 ease-in-out transform'
                  priority="true"
                />
                <div className='flex pb-6 justify-between'>
                  <div>
                    <p className='text-sm font-medium'>
                    Boost
                    </p>
                    <p className='text-sm text-zinc-500'>
                    Personalized Nutrients
                    </p>
                    <p className='text-sm text-zinc-500'>
                    Q1 2023
                    </p>
                  </div>
                  <div className='flex h-fit text-zinc-500 group-hover:text-zinc-900'>
                    <p className='text-sm h-auto self-center font-medium'>
                      Learn more
                    </p> 
                    <NavArrowRight className='text-xs self-center stroke-2 group-hover:translate-x-0.5 transition-all duration-300 ease-in-out transform'/>
                  </div>
                </div>
                
              </Link>
              <Link href="/curations" className='group'>
                <Image 
                  src="/assets/projects/curations.webp"  
                  alt='Curations' 
                  width="593" 
                  height="305" 
                  className='rounded-xl mb-2 group-hover:translate-y-[-2px] transition-all duration-300 ease-in-out transform'
                />
                <div className='flex pb-6 justify-between'>
                  <div>
                    <p className='text-sm font-medium'>
                    Curations
                    </p>
                    <p className='text-sm text-zinc-500'>
                    Curated Collection of Tools
                    </p>
                    <p className='text-sm text-zinc-500'>
                    Q4 2022
                    </p>
                  </div>
                  <div className='flex h-fit text-zinc-500 group-hover:text-zinc-900'>
                    <p className='text-sm h-auto self-center font-medium'>
                      Learn more
                    </p> 
                    <NavArrowRight className='text-xs stroke-2 self-center group-hover:translate-x-0.5 transition-all duration-300 ease-in-out transform'/>
                  </div>
                </div>
              </Link>
              <Link href='/upsapp' className='group'>
                <Image 
                  src="/assets/projects/ups_app.webp" 
                  alt='UPS App Redesign' 
                  width="593" 
                  height="305" 
                  priority='true' 
                  className='rounded-xl mb-2 group-hover:translate-y-[-2px] transition-all duration-300 ease-in-out transform'
                />
                <div className='flex pb-6 justify-between'>
                  <div>
                    <p className='text-sm font-medium'>
                    Package App
                    </p>
                    <p className='text-sm text-zinc-500'>
                    UPS App Redesign
                    </p>
                    <p className='text-sm text-zinc-500'>
                    Q2 2022
                    </p>
                  </div>
                  <div className='flex h-fit text-zinc-500 group-hover:text-zinc-900'>
                    <p className='text-sm h-auto self-center font-medium'>
                      Learn more
                    </p> 
                    <NavArrowRight className='text-xs self-center stroke-2 group-hover:translate-x-0.5 transition-all duration-300 ease-in-out transform'/>
                  </div>
                </div>
              </Link>
              <Link href="homyapp" className='group'>
                <Image 
                  src="/assets/projects/homy_app.webp" 
                  alt='Homy Energy Smart Home App' 
                  width="593" 
                  height="305" 
                  className='rounded-xl mb-2 group-hover:translate-y-[-2px] transition-all duration-300 ease-in-out transform'
                />
                <div className='flex pb-6 justify-between'>
                  <div>
                    <p className='text-sm font-medium'>
                    Homy
                    </p>
                    <p className='text-sm text-zinc-500'>
                    Energy Smart Home App
                    </p>
                    <p className='text-sm text-zinc-500'>
                    Q2 2022
                    </p>
                  </div>
                  <div className='flex h-fit text-zinc-500 group-hover:text-zinc-900'>
                    <p className='text-sm h-auto self-center font-medium'>
                      Learn more
                    </p> 
                    <NavArrowRight className='text-xs self-center stroke-2 group-hover:translate-x-0.5 transition-all duration-300 ease-in-out transform'/>
                  </div>
                </div>
              </Link>
              
              <p className='pb-4'>
              If you want to learn more about me or just want to talk about design, technology, or life in general, don&apos;t hesitate to reach out. I&apos;m always open to new conversations and opportunities.
              </p>
              <a href="mailto:anton@stallboerger.de" className='hover:text-purple-50 inline-flex w-fit justify-center rounded-lg border-2 border-zinc-200 bg-white px-2 py-1 text-l font-regular text-zinc-900 hover:bg-zinc-900 hover:border-zinc-900 gap-2 mb-10 text-sm font-medium'>Get in touch</a>
              <Footer />
            </div>
        </div> 
    </div>
  )
}

export default Main
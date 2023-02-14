import Image from 'next/image';
import { NavArrowRight } from 'iconoir-react';
import Link from 'next/link';
import GMTTime from './GMTTime';

export const metadata = {
    description: 'Digital Product Designer and Developer',
    openGraph: {
        title: 'Anton Stallbörger',
        desription: 'Digital Product Designer and Developer',
        url: 'https://antonstallboerger.com',
        siteName: 'Anton Stallbörger',
        images: [
            {
                url: '',
                width: 1920,
                height: 1080,
            }
        ],
        locale : 'en_US',
        type: 'website',
    },
}

export default async function homePage() {
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
            
              <Link href='/upsapp'>
                <Image 
                    src="/assets/projects/ups_app.webp" 
                    alt='UPS App Redesign' 
                    width="593" 
                    height="305" 
                    placeholder='blur'
                    priority 
                    className='rounded-xl mb-2'>
                </Image>
                <div className='flex pb-6 justify-between'>
                  <div>
                    <p className='text-sm'>
                    Package App
                    </p>
                    <p className='text-sm text-zinc-500'>
                    UPS App Redesign
                    </p>
                    <p className='text-sm text-zinc-500'>
                    Q2 2022
                    </p>
                  </div>
                  <div className='flex h-fit text-zinc-500 hover:text-zinc-900'>
                    <p className='text-sm h-auto self-center'>
                      Learn more
                    </p> 
                    <NavArrowRight className='text-xs self-center'/>
                  </div>
                </div>
              </Link>
              <Link href="/curations">
                <Image src="/assets/projects/curations.webp" alt='Curations' width="593" height="305" className='rounded-xl mb-2'></Image>
                <div className='flex pb-6 justify-between'>
                  <div>
                    <p className='text-sm'>
                    Curations
                    </p>
                    <p className='text-sm text-zinc-500'>
                    Curated Collection of Tools
                    </p>
                    <p className='text-sm text-zinc-500'>
                    Q4 2022
                    </p>
                  </div>
                  <div className='flex h-fit text-zinc-500 hover:text-zinc-900'>
                    <p className='text-sm h-auto self-center'>
                      Learn more
                    </p> 
                    <NavArrowRight className='text-xs self-center'/>
                  </div>
                </div>
              </Link>
              <Link href="homyapp">
                <Image src="/assets/projects/homy_app.webp" alt='Homy Energy Smart Home App' width="593" height="305" className='rounded-xl mb-2'></Image>
                <div className='flex pb-6 justify-between'>
                  <div>
                    <p className='text-sm'>
                    Homy
                    </p>
                    <p className='text-sm text-zinc-500'>
                    Energy Smart Home App
                    </p>
                    <p className='text-sm text-zinc-500'>
                    Q2 2022
                    </p>
                  </div>
                  <div className='flex h-fit text-zinc-500 hover:text-zinc-900'>
                    <p className='text-sm h-auto self-center'>
                      Learn more
                    </p> 
                    <NavArrowRight className='text-xs self-center'/>
                  </div>
                </div>
              </Link>
              {/* <Link href="#"> */}
                <Image src="/assets/projects/in_progress.webp" alt='In Progress' width="593" height="305" className='rounded-xl mb-2'></Image>
                <p className='text-sm'>
                Work in Progress 
                </p>
                <p className='text-sm text-zinc-500'>
                Coming Soon
                </p>
                <p className='text-sm pb-6 text-zinc-500'>
                Q1 2023
                </p>
              {/* </Link> */}
              <p className='pb-10'>
              If you want to learn more about me or just want to talk about design, technology, or life in general, don&apos;t hesitate to reach out. I&apos;m always open to new conversations and opportunities.
              </p>
              <Footer />
            </div>
        </div> 
    </div>
}
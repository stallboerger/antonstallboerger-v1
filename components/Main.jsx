import React from 'react'
import Image from 'next/image'
import Footer from '../components/Footer'
import { MapPinIcon } from '@heroicons/react/24/outline'
import { ClockIcon } from '@heroicons/react/24/outline'

export const Main = () => {
  return (
    <div className='w-full h-auto pt-[180px]'>
        <div className='max-w-[593px]  h-full mx-auto flex justify-center px-6'>
            <div>
              <div className='flex flex-column gap-2 pb-2'>
                <div className='border-[1px] rounded-full py-1 px-2 flex flex-column gap-1 text-red-600 items-center '>
                  <MapPinIcon className="h-5 w-5" aria-hidden="true" />
                  <p className='text-sm text-zinc-500'>Schwäbisch Gmünd, DE</p> 
                </div>
              <div className='flex flex-column gap-2 pb-2'>
                <div className='border-[1px] rounded-full py-1 px-2 flex flex-column gap-1 text-blue-600'>
                  <ClockIcon className="h-5 w-5" aria-hidden="true" />
                  <p className='text-sm text-zinc-500'>20:39 GMT</p>
                </div>
              </div>
            </div>
                <h1 className=''>
                    Product Designer and Developer building the future
                </h1>
                <p className='py-6'>
                I currently study at the University of Desing in Schäbisch Gmünd, Germany - focusing on digital products and development. I am passionate about creating products that are useful, beautiful and easy to use. I am also a big fan of open source and the community around it.
                </p>
                <p className='pb-6'>
                Here are some of my curated works i’ve done in the past.
                </p>
                <Image src="/assets/projects/ups_app.png" alt='UPS App Redesign' width="545" height="305" className='rounded-xl mb-2'></Image>
                <p className='text-sm'>
                Package App
                </p>
                <p className='text-sm text-zinc-500'>
                UPS App Redesign
                </p>
                <p className='text-sm pb-6 text-zinc-500'>
                Q2 2022
                </p>
                <Image src="/assets/projects/homy_app.png" alt='Homy Energy Smart Home App' width="545" height="305" className='rounded-xl mb-2'></Image>
                <p className='text-sm'>
                Homy
                </p>
                <p className='text-sm text-zinc-500'>
                Energy Smart Home App
                </p>
                <p className='text-sm pb-6 text-zinc-500'>
                Q2 2022
                </p>
                <Image src="/assets/projects/infosystem.png" alt='Design Classics Informationsystem' width="545" height="305" className='rounded-xl mb-2'></Image>
                <p className='text-sm'>
                Informationsystem
                </p>
                <p className='text-sm text-zinc-500'>
                Design Classics
                </p>
                <p className='text-sm pb-6 text-zinc-500'>
                Q4 2021
                </p>
                <p className='pb-6'>
                For more information about me or if you just want to chat about design, technology or life hit me up. Im always open for something new.
                </p>
                <Footer />
            </div>
        </div> 
    </div>
  )
}

export default Main
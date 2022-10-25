import React from 'react'
import Image from 'next/image'

export const Main = () => {
  return (
    <div className='w-full h-auto pt-[180px]'>
        <div className='max-w-[545px] w-full h-full mx-auto flex justify-left'>
            <div>
                <ul className='flex flex-column pb-6'>
                  <li className=''>Anton Stallbörger</li>
                  <li className=''>Schwäbisch Gmünd</li>
                </ul>
                <h1>
                    Product Designer and Developer building the future
                </h1>
                <p className='py-6'>
                I currently study at the University of Desing in Schäbisch Gmünd, Germany - focusing on digital products and development.
                </p>
                <p className='pb-6'>
                Here are some of my curated works i’ve done in the past.
                </p>
                {/* <Iconoir color="red" height='36' width='36' /> */}
                <Image src="/assets/projects/ups_app.png" alt='/' width="545px" height="305" class="rounded-xl"></Image>
                <p className='text-sm'>
                Package App
                </p>
                <p className='text-sm text-zinc-400'>
                UPS App Redesign
                </p>
                <p className='text-sm pb-6 text-zinc-400'>
                Q2 2022
                </p>
                <Image src="/assets/projects/homy_app.png" alt='/' width="545px" height="305" class="rounded-xl"></Image>
                <p className='text-sm'>
                Homy
                </p>
                <p className='text-sm text-zinc-400'>
                Energy Smart Home App
                </p>
                <p className='text-sm pb-6 text-zinc-400'>
                Q2 2022
                </p>
                <Image src="/assets/projects/infosystem.png" alt='/' width="545px" height="305" class="rounded-xl"></Image>
                <p className='text-sm'>
                Informationssystem
                </p>
                <p className='text-sm text-zinc-400'>
                Design Classics
                </p>
                <p className='text-sm pb-6 text-zinc-400'>
                Q4 2021
                </p>
                <p className='pb-6'>
                For more information about me or if you just want to chat about design, technology or life hit me up. Im always open for something new.
                </p>
            </div>
        </div> 
    </div>
  )
}

export default Main
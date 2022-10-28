import React from 'react'
import Image from 'next/image'

export const Main = () => {
  return (
    <div className='w-full h-auto pt-[180px]'>
        <div className='max-w-[545px] w-full h-full mx-auto flex justify-left'>
            <div>
                <ul className='flex flex-column pb-6'>
                  <li className='text-sm'>Schwäbisch Gmünd, DE</li>
                  <li className='text-sm'>20:39 GMT</li>
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
                <Image src="/assets/projects/ups_app.png" alt='UPS App Redesign' width="545" height="305" className='rounded-xl'></Image>
                <p className='text-sm'>
                Package App
                </p>
                <p className='text-sm text-zinc-500'>
                UPS App Redesign
                </p>
                <p className='text-sm pb-6 text-zinc-500'>
                Q2 2022
                </p>
                <Image src="/assets/projects/homy_app.png" alt='Homy Energy Smart Home App' width="545" height="305" className='rounded-xl'></Image>
                <p className='text-sm'>
                Homy
                </p>
                <p className='text-sm text-zinc-500'>
                Energy Smart Home App
                </p>
                <p className='text-sm pb-6 text-zinc-500'>
                Q2 2022
                </p>
                <Image src="/assets/projects/infosystem.png" alt='Design Classics Informationsystem' width="545" height="305" className='rounded-xl'></Image>
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
            </div>
        </div> 
    </div>
  )
}

export default Main
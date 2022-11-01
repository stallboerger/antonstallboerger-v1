import React from 'react'
import Image from 'next/image'
import Footer from '../components/Footer'

export const Main = () => {
  return (
    <div className='w-full h-auto pt-[140px] md:pt-[180px]'>
        <div className='max-w-[593px] h-full mx-auto flex px-4'>
            <div>
              <div className='pb-2'>
                  <p className='text-sm text-zinc-500'>Schwäbisch Gmünd, DE | 20:39 GMT</p> 
              </div>
              <h1>
              Digital Product Designer and Developer driven 
              <br />
              by curiosity
              </h1>
              <p className='py-6'>
              I currently study at the University of Desing in Schäbisch Gmünd, Germany - focusing on digital products and development. I am passionate about creating products that are useful, beautiful and easy to use. I am also a big fan of open source and the community around it.
              </p>
              <p className='pb-6'>
              Here are some of my curated works i’ve done in the past.
              </p>
              <Image src="/assets/projects/ups_app.png" alt='UPS App Redesign' width="593" height="305" priority='true' className='rounded-xl mb-2'></Image>
              <p className='text-sm'>
              Package App
              </p>
              <p className='text-sm text-zinc-500'>
              UPS App Redesign
              </p>
              <p className='text-sm pb-6 text-zinc-500'>
              Q2 2022
              </p>
              <Image src="/assets/projects/homy_app.png" alt='Homy Energy Smart Home App' width="593" height="305" className='rounded-xl mb-2'></Image>
              <p className='text-sm'>
              Homy
              </p>
              <p className='text-sm text-zinc-500'>
              Energy Smart Home App
              </p>
              <p className='text-sm pb-6 text-zinc-500'>
              Q2 2022
              </p>
              <Image src="/assets/projects/infosystem.png" alt='Design Classics Informationsystem' width="593" height="305" className='rounded-xl mb-2'></Image>
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
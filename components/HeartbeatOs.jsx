import React from 'react'
import Image from 'next/image'
import Footer from './Footer'

export const HeartbeatOs = () => {
    return (
        <div className='w-full h-auto pt-[140px]'>
            <div className='max-w-[593px] h-full mx-auto flex flex-col px-4'>
                <h2 className='pb-4'>HeartbeatOS</h2>
                <p className='pb-10 pt-4 text-zinc-500'>
                A communication between a heartbeat sensor on one side and a pulse actuator on the other side. Both are not connected with a cable. The communication was established using various current methods.
                </p>
                <Image 
                    src="/assets/playground/hb1.png" 
                    alt='' 
                    width="593" 
                    height="305" 
                    className='rounded-xl mb-2' 
                    priority='true'
                />  
                <p className='mb-10 text-zinc-500 text-sm'>Web interface</p>    

                <Image 
                    src="/assets/playground/hb3.png" 
                    alt='Great Finds Clos up' 
                    width="593" 
                    height="305" 
                    className='rounded-xl mb-2' 
                    priority='true'
                />    
                <p className='mb-10 text-zinc-500 text-sm'>Sensor and actuator</p> 

                <Image 
                    src="/assets/playground/hb4.png" 
                    alt='Great Finds Clos up' 
                    width="593" 
                    height="305" 
                    className='rounded-xl mb-2' 
                    priority='true'
                />    
                <p className='mb-10 text-zinc-500 text-sm'>Azure connection</p>

                <Image 
                    src="/assets/playground/hb2.png" 
                    alt='Great Finds Clos up' 
                    width="593" 
                    height="305" 
                    className='rounded-xl mb-2' 
                    priority='true'
                />    
                <p className='mb-10 text-zinc-500 text-sm'>Documentation</p>  

                <Footer />
            </div>
        </div>
    )
}

export default HeartbeatOs